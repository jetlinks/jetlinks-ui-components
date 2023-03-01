const fs = require('fs');
const path = require('path');
const compactVars = require('./scripts/compact-vars');
const vueCompiler = require('@vue/compiler-sfc');
const { transform } = require('sucrase');

function generateThemeFileContent(theme) {
    return `const { ${theme}ThemeSingle } = require('./theme');\nconst defaultTheme = require('./default-theme');\n
module.exports = {
  ...defaultTheme,
  ...${theme}ThemeSingle
}`;
}

// We need compile additional content for antd user
function finalizeCompile() {
    if (fs.existsSync(path.join(__dirname, './lib'))) {
        // Build a entry less file to dist/antd.less
        const componentsPath = path.join(process.cwd(), 'components');
        let componentsLessContent = '';
        // Build components in one file: lib/style/components.less
        fs.readdir(componentsPath, (err, files) => {
            files.forEach((file) => {
                if (
                    fs.existsSync(
                        path.join(componentsPath, file, 'style', 'index.less'),
                    )
                ) {
                    componentsLessContent += `@import "../${path.posix.join(
                        file,
                        'style',
                        'index-pure.less',
                    )}";\n`;
                }
            });
            fs.writeFileSync(
                path.join(process.cwd(), 'lib', 'style', 'components.less'),
                componentsLessContent,
            );
        });
    }
}

function buildThemeFile(theme, vars) {
    // Build less entry file: dist/jetlinks.${theme}.less
    if (theme !== 'default') {
        fs.writeFileSync(
            path.join(process.cwd(), 'dist', `jetlinks.${theme}.less`),
            `@import "../lib/style/${theme}.less";\n@import "../lib/style/components.less";`,
        );
        // eslint-disable-next-line no-console
        console.log(`Built a entry less file to dist/jetlinks.${theme}.less`);
    } else {
        fs.writeFileSync(
            path.join(process.cwd(), 'dist', `default-theme.js`),
            `module.exports = ${JSON.stringify(vars, null, 2)};\n`,
        );
        return;
    }

    // Build ${theme}.js: dist/${theme}-theme.js, for less-loader

    fs.writeFileSync(
        path.join(process.cwd(), 'dist', `theme.js`),
        `const ${theme}ThemeSingle = ${JSON.stringify(vars, null, 2)};\n`,
        {
            flag: 'a',
        },
    );

    fs.writeFileSync(
        path.join(process.cwd(), 'dist', `${theme}-theme.js`),
        generateThemeFileContent(theme),
    );

    // eslint-disable-next-line no-console
    console.log(`Built a ${theme} theme js file to dist/${theme}-theme.js`);
}

function finalizeDist() {
    if (fs.existsSync(path.join(__dirname, './dist'))) {
        // Build less entry file: dist/jetlinks.less
        fs.writeFileSync(
            path.join(process.cwd(), 'dist', 'jetlinks.less'),
            '@import "../lib/style/default.less";\n@import "../lib/style/components.less";',
        );
        // eslint-disable-next-line no-console
        fs.writeFileSync(
            path.join(process.cwd(), 'dist', 'theme.js'),
            `const defaultTheme = require('./default-theme.js');\n`,
        );
        // eslint-disable-next-line no-console
        console.log('Built a entry less file to dist/jetlinks.less');
        buildThemeFile('compact', compactVars);
        buildThemeFile('variable', {});
        fs.writeFileSync(
            path.join(process.cwd(), 'dist', `theme.js`),
            `
function getThemeVariables(options = {}) {
  let themeVar = {
    'hack': \`true;@import "\${require.resolve('ant-design-vue/lib/style/color/colorPalette.less')}";\`,
    ...defaultTheme
  };
  if(options.dark) {
    themeVar = {
      ...themeVar,
      ...darkThemeSingle
    }
  }
  if(options.compact){
    themeVar = {
      ...themeVar,
      ...compactThemeSingle
    }
  }
  return themeVar;
}

module.exports = {
  darkThemeSingle,
  compactThemeSingle,
  getThemeVariables
}`,
            {
                flag: 'a',
            },
        );
    }
}

function isComponentStyleEntry(file) {
    return file.path.match(/style(\/|\\)index\.ts/);
}

function needTransformStyle(content) {
    return (
        content.includes('../../style/index.less') ||
        content.includes('./index.less')
    );
}

module.exports = {
    compile: {
        includeLessFile: [/(\/|\\)components(\/|\\)style(\/|\\)variable.less$/],
        transformTSFile(file) {
            if (isComponentStyleEntry(file)) {
                let content = file.contents.toString();
                if (needTransformStyle(content)) {
                    const cloneFile = file.clone();

                    // Origin
                    content = content.replace(
                        '../../style/index.less',
                        '../../style/default.less',
                    );
                    cloneFile.contents = Buffer.from(content);

                    return cloneFile;
                }
            } else {
                let content = file.contents.toString();
                const cloneFile = file.clone();
                content = content.replace(/\.vue/g, '.js');
                cloneFile.contents = Buffer.from(content);
                return cloneFile;
            }
        },
        transformVue(file) {
            if (file.path.endsWith('.vue')) {
                const cloneFile = file.clone();
                const content = fs.readFileSync(file.path, 'utf-8');
                const { descriptor } = vueCompiler.parse(content);
                const { script, scriptSetup } = descriptor;

                if (script || scriptSetup) {
                    const id = Date.now().toString();
                    const scopeId = `data-v-${id}`;
                    const codeList = [];
                    const lang = scriptSetup?.lang || script?.lang || 'js';
                    let code = '';

                    let scriptCompiler = vueCompiler.compileScript(descriptor, {
                        id: scopeId,
                        inlineTemplate: true,
                        templateOptions: {
                            expressionPlugins: ['typescript'],
                        },
                    });
                    if (scriptCompiler.bindings) {
                        code += `\n/* Analyzed bindings: ${JSON.stringify(
                            scriptCompiler.bindings,
                            null,
                            2,
                        )} */`;
                    }

                    code +=
                        `\n` +
                        vueCompiler.rewriteDefault(
                            scriptCompiler.content,
                            '__sfc_main__',
                            ['typescript'],
                        );

                    if (lang) {
                        code = transform(code, {
                            transforms: ['typescript'],
                        }).code;
                    }

                    code += `\nexport default __sfc_main__`;

                    code = code.replace(/\.vue/g, '.js');

                    // codeList.push(vueCompiler.rewriteDefault(script.content, `__sfc_main__`, ['typescript']))
                    // codeList.push(`__sfc_main__.__scopeId='${scopeId}'`)
                    //
                    // const template = vueCompiler.compileTemplate({
                    //     source: descriptor.template.content,
                    //     filename: `main.vue`,
                    //     id: scopeId,
                    // })
                    //
                    // codeList.push(template.code);
                    // codeList.push(`__sfc_main__.render=render`);
                    // codeList.push(`export default __sfc_main__`);
                    cloneFile.contents = Buffer.from(code);

                    cloneFile.path = cloneFile.path.replace(
                        /\.vue$/,
                        `.${lang}`,
                    );
                    return cloneFile;
                }
            }
        },
        transformFile(file) {
            if (isComponentStyleEntry(file)) {
                const indexLessFilePath = file.path.replace(
                    'index.tsx',
                    'index.less',
                );

                if (fs.existsSync(indexLessFilePath)) {
                    // We put origin `index.less` file to `index-pure.less`
                    const pureFile = file.clone();
                    pureFile.contents = Buffer.from(
                        fs.readFileSync(indexLessFilePath, 'utf8'),
                    );
                    pureFile.path = pureFile.path.replace(
                        'index.tsx',
                        'index-pure.less',
                    );

                    // Rewrite `index.less` file with `root-entry-name`
                    const indexLessFile = file.clone();
                    indexLessFile.contents = Buffer.from(
                        [
                            // Inject variable
                            '@root-entry-name: default;',
                            // Point to origin file
                            "@import './index-pure.less';",
                        ].join('\n\n'),
                    );
                    indexLessFile.path = indexLessFile.path.replace(
                        'index.tsx',
                        'index.less',
                    );

                    return [indexLessFile, pureFile];
                }
            }

            return [];
        },
        lessConfig: {
            modifyVars: {
                'root-entry-name': 'default',
                'border-radius-base': '6px',
                'primary-color': '#315EFB',
                'ant-prefix': 'jetlinks',
            },
        },
        finalize: finalizeCompile,
    },
    dist: {
        finalize: finalizeDist,
    },
    generateThemeFileContent,
    bail: true,
};
