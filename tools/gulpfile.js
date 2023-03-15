/* eslint-disable no-console */
const { getProjectPath, getConfig } = require('./utils/projectHelper');
const runCmd = require('./runCmd');
const getBabelCommonConfig = require('./getBabelCommonConfig');
const merge2 = require('merge2');
const through2 = require('through2');
const transformLess = require('./transformLess');
const webpack = require('webpack');
const babel = require('gulp-babel');
const argv = require('minimist')(process.argv.slice(2));

const chalk = require('chalk');
const getNpmArgs = require('./utils/get-npm-args');
const path = require('path');
const ts = require('gulp-typescript');
const gulp = require('gulp');
const rimraf = require('rimraf');
const stripCode = require('gulp-strip-code');
const getTSCommonConfig = require('./getTSCommonConfig');
const replaceLib = require('./replaceLib');

const packageJson = require(getProjectPath('package.json'));
const tsDefaultReporter = ts.reporter.defaultReporter();
const cwd = process.cwd();
const libDir = getProjectPath('lib');
const esDir = getProjectPath('es');

const tsConfig = getTSCommonConfig();

function dist(done) {
    rimraf.sync(path.join(cwd, 'dist'));
    process.env.RUN_ENV = 'PRODUCTION';
    const webpackConfig = require(getProjectPath('webpack.build.conf.js'));
    webpack(webpackConfig, (err, stats) => {
        if (err) {
            console.error('webpack-error', err.stack || err);
            if (err.details) {
                console.error(err.details);
            }
            return;
        }

        const info = stats.toJson();
        const { dist: { finalize } = {}, bail } = getConfig();

        if (stats.hasErrors()) {
            (info.errors || []).forEach((error) => {
                console.error(error);
            });
            // https://github.com/ant-design/ant-design/pull/31662
            if (bail) {
                process.exit(1);
            }
        }
        if (stats.hasWarnings()) {
            console.warn(info.warnings);
        }

        const buildInfo = stats.toString({
            colors: true,
            children: true,
            chunks: false,
            modules: false,
            chunkModules: false,
            hash: false,
            version: false,
        });
        console.log(buildInfo);
        // Additional process of dist finalize
        if (finalize) {
            console.log('[Dist] Finalization...');
            finalize();
        }
        done(0);
    });
}

const tsFiles = [
    '**/*.ts',
    '**/*.tsx',
    '!node_modules/**/*.*',
    'typings/**/*.d.ts',
];

function compileTs(stream) {
    return stream
        .pipe(ts(tsConfig))
        .js.pipe(
            through2.obj(function (file, encoding, next) {
                // console.log(file.path, file.base);
                file.path = file.path.replace(/\.[jt]sx$/, '.js');
                console.log(file.path)
                this.push(file);
                next();
            }),
        )
        .pipe(gulp.dest(process.cwd()));
}

gulp.task('tsc', () =>
    compileTs(
        gulp.src(tsFiles, {
            base: cwd,
        }),
    ),
);

function babelify(js, modules) {
    const babelConfig = getBabelCommonConfig(modules);
    babelConfig.babelrc = false;
    delete babelConfig.cacheDirectory;
    if (modules === false) {
        babelConfig.plugins.push(replaceLib);
    }
    const stream = js.pipe(babel(babelConfig)).pipe(
        through2.obj(function z(file, encoding, next) {
            this.push(file.clone());
            if (file.path.match(/\/style\/index\.(js|jsx|ts|tsx)$/)) {
                const content = file.contents.toString(encoding);
                file.contents = Buffer.from(
                    content
                        .replace(/\/style\/?'/g, "/style/css'")
                        .replace(/\/style\/?"/g, '/style/css"')
                        .replace(/\.less/g, '.css'),
                );
                file.path = file.path.replace(
                    /index\.(js|jsx|ts|tsx)$/,
                    'css.js',
                );
                this.push(file);
            } else if (modules !== false) {
                const content = file.contents.toString(encoding);
                file.contents = Buffer.from(
                    content
                        .replace(/lodash-es/g, 'lodash')
                        .replace(
                            /@ant-design\/icons-vue/g,
                            '@ant-design/icons-vue/lib/icons',
                        ),
                );
                this.push(file);
            }
            next();
        }),
    );
    return stream.pipe(gulp.dest(modules === false ? esDir : libDir));
}

function compile(modules) {
    const {
        compile: {
            transformTSFile,
            transformFile,
            transformVue,
            includeLessFile = [],
        } = {},
    } = getConfig();
    rimraf.sync(modules !== false ? libDir : esDir);

    // =============================== LESS ===============================
    const less = gulp
        .src(['components/**/*.less'])
        .pipe(
            through2.obj(function (file, encoding, next) {
                // Replace content
                const cloneFile = file.clone();

                const content = file.contents
                    .toString()
                    .replace(/^\uFEFF/, '')
                    .replace(/\/lib\//g, modules === false ? '/es/' : '/lib/');

                cloneFile.contents = Buffer.from(content);

                // Clone for css here since `this.push` will modify file.path
                const cloneCssFile = cloneFile.clone();
                this.push(cloneFile);

                // Transform less file
                if (
                    file.path.match(/(\/|\\)style(\/|\\)index\.less$/) ||
                    file.path.match(
                        /(\/|\\)style(\/|\\)v2-compatible-reset\.less$/,
                    ) ||
                    includeLessFile.some((regex) => file.path.match(regex))
                ) {
                    transformLess(
                        cloneCssFile.contents.toString(),
                        cloneCssFile.path,
                    )
                        .then((css) => {
                            cloneCssFile.contents = Buffer.from(css);
                            cloneCssFile.path = cloneCssFile.path.replace(
                                /\.less$/,
                                '.css',
                            );
                            this.push(cloneCssFile);
                            next();
                        })
                        .catch((e) => {
                            console.error(
                                cloneCssFile.path,
                                e,
                                cloneCssFile.contents.toString(),
                            );
                        });
                } else {
                    next();
                }
            }),
        )
        .pipe(gulp.dest(modules === false ? esDir : libDir));

    const assets = gulp
        .src(['components/**/*.@(png|svg)'])
        .pipe(gulp.dest(modules === false ? esDir : libDir));

    let error = 0;

    // =============================== FILE ===============================
    let transformFileStream;
    if (transformFile) {
        transformFileStream = gulp
            .src(['components/**/*.tsx'])
            .pipe(
                through2.obj(function (file, encoding, next) {
                    let nextFile = transformFile(file, modules) || file;
                    nextFile = Array.isArray(nextFile) ? nextFile : [nextFile];
                    nextFile.forEach((f) => this.push(f));
                    next();
                }),
            )
            .pipe(gulp.dest(modules === false ? esDir : libDir));
    }

    // ================================ TS ================================
    const source = [
        'components/**/*.js',
        'components/**/*.jsx',
        'components/**/*.tsx',
        'components/**/*.ts',
        'typings/**/*.d.ts',
    ];

    const vueSource = ['components/**/*.vue', '!components/**/demo/*.vue'];

    // Strip content if needed
    let sourceStream = gulp.src(source);
    let sourceVueStream = gulp.src(vueSource);
    if (modules === false) {
        sourceStream = sourceStream.pipe(
            stripCode({
                start_comment: '@remove-on-es-build-begin',
                end_comment: '@remove-on-es-build-end',
            }),
        );
    }

    if (transformTSFile) {
        sourceStream = sourceStream.pipe(
            through2.obj(function (file, encoding, next) {
                let nextFile = transformTSFile(file) || file;
                console.log(file.path);
                nextFile = Array.isArray(nextFile) ? nextFile : [nextFile];
                nextFile.forEach((f) => this.push(f));
                next();
            }),
        );
    }

    if (transformVue) {
        sourceVueStream = sourceVueStream
            .pipe(
                through2.obj(function (file, encoding, next) {
                    let nextFile = transformVue(file) || file;
                    nextFile = Array.isArray(nextFile) ? nextFile : [nextFile];
                    nextFile.forEach((f) => this.push(f));
                    next();
                }),
            )
            .pipe(
                ts(tsConfig, {
                    error(e) {
                        tsDefaultReporter.error(e);
                        error = 1;
                    },
                    finish: tsDefaultReporter.finish,
                }),
            )
            .pipe(gulp.dest(modules === false ? esDir : libDir));
    }

    const tsResult = sourceStream.pipe(
        ts(tsConfig, {
            error(e) {
                tsDefaultReporter.error(e);
                error = 1;
            },
            finish: tsDefaultReporter.finish,
        }),
    );

    function check() {
        console.log('error', error);
        if (error && !argv['ignore-error']) {
            process.exit(1);
        }
    }

    tsResult.on('finish', check);
    tsResult.on('end', check);
    const tsFilesStream = babelify(tsResult.js, modules);
    const tsd = tsResult.dts.pipe(
        gulp.dest(modules === false ? esDir : libDir),
    );
    return merge2(
        [
            less,
            tsFilesStream,
            tsd,
            assets,
            sourceVueStream,
            transformFileStream,
        ].filter((s) => s),
    );
}

gulp.task(
    'check-git',
    gulp.series((done) => {
        runCmd('git', ['status', '--porcelain'], (code, result) => {
            if (/^\?\?/m.test(result)) {
                return done(`There are untracked files in the working tree.\n${result}
      `);
            }
            if (/^([ADRM]| [ADRM])/m.test(result)) {
                return done(`There are uncommitted changes in the working tree.\n${result}
      `);
            }
            return done();
        });
    }),
);

function publish(tagString, done) {
    let args = ['publish', '--with-antd-tools'];
    if (tagString) {
        args = args.concat(['--tag', tagString]);
    }
    const publishNpm = process.env.PUBLISH_NPM_CLI || 'npm';
    runCmd(publishNpm, args, (code) => {
        done(code);
    });
}

function pub(done) {
    const notOk = !packageJson.version.match(/^\d+\.\d+\.\d+$/);
    let tagString;
    if (argv['npm-tag']) {
        tagString = argv['npm-tag'];
    }
    if (!tagString && notOk) {
        tagString = 'next';
    }
    if (packageJson.scripts['pre-publish']) {
        runCmd('npm', ['run', 'pre-publish'], (code2) => {
            if (code2) {
                done(code2);
                return;
            }
            publish(tagString, done);
        });
    } else {
        publish(tagString, done);
    }
}

let startTime = new Date();
gulp.task('compile-with-es', (done) => {
    console.log('start compile at ', startTime);
    console.log('[Parallel] Compile to es...');
    compile(false).on('finish', done);
});

gulp.task('compile-with-lib', (done) => {
    console.log('[Parallel] Compile to js...');
    compile().on('finish', done);
});

gulp.task('compile-finalize', (done) => {
    // Additional process of compile finalize
    const { compile: { finalize } = {} } = getConfig();
    if (finalize) {
        console.log('[Compile] Finalization...');
        finalize();
    }
    done();
});

gulp.task(
    'compile',
    gulp.series(
        gulp.parallel('compile-with-es', 'compile-with-lib'),
        'compile-finalize',
        (done) => {
            console.log('end compile at ', new Date());
            console.log('compile time ', (new Date() - startTime) / 1000, 's');
            done();
        },
    ),
);

gulp.task(
    'dist',
    gulp.series((done) => {
        dist(done);
    }),
);

gulp.task(
    'pub',
    gulp.series('check-git', 'compile', 'dist', (done) => {
        // if (!process.env.GITHUB_TOKEN) {
        //   console.log('no GitHub token found, skip');
        // } else {
        //   pub(done);
        // }
        pub(done);
    }),
);

gulp.task(
    'guard',
    gulp.series((done) => {
        function reportError() {
            console.log(
                chalk.bgRed(
                    '!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!',
                ),
            );
            console.log(
                chalk.bgRed(
                    '!! `npm publish` is forbidden for this package. !!',
                ),
            );
            console.log(chalk.bgRed('!! Use `npm run pub` instead.        !!'));
            console.log(
                chalk.bgRed(
                    '!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!',
                ),
            );
        }

        const npmArgs = getNpmArgs();
        if (npmArgs) {
            for (let arg = npmArgs.shift(); arg; arg = npmArgs.shift()) {
                if (
                    /^pu(b(l(i(sh?)?)?)?)?$/.test(arg) &&
                    npmArgs.indexOf('--with-antd-tools') < 0 &&
                    !process.env.npm_config_with_antd_tools
                ) {
                    reportError();
                    done(1);
                    return;
                }
            }
        }
        done();
    }),
);

// gulp.task(
//   'sort-api-table',
//   gulp.series(done => {
//     sortApiTable();
//     done();
//   }),
// );
