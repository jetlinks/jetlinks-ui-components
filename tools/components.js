const { rollup } = require('rollup');
const vue = require('@vitejs/plugin-vue');
const vueJsx = require('@vitejs/plugin-vue-jsx');
const VueMacros = require('unplugin-vue-macros/rollup');
const { nodeResolve } = require('@rollup/plugin-node-resolve');
const commonjs = require('@rollup/plugin-commonjs');
const esbuild = require('rollup-plugin-esbuild');
const glob = require('fast-glob');
const path = require('path');
const gulp = require('gulp');
const { buildConfigEntries } = require('./buildConfig');

function writeBundles(bundle, options) {
    return Promise.all(options.map((option) => bundle.write(option)));
}

const buildModules = async () => {
    const files = await glob('components/**/*.{js,ts,vue}', {
        cwd: path.resolve(__dirname, '..'),
        absolute: true,
        onlyFiles: true,
    });

    const bundle = await rollup({
        input: files,
        plugins: [
            VueMacros({
                setupComponent: false,
                setupSFC: false,
                plugins: {
                    vue: vue({
                        isProduction: false,
                    }),
                    vueJsx: vueJsx(),
                },
            }),
            nodeResolve({
                extensions: ['.mjs', '.js', '.json', '.ts'],
            }),
            // commonjs(),
            // esbuild({
            //     sourceMap: true,
            //     target: 'es2018',
            //     loaders: {
            //         '.vue': 'ts',
            //     },
            // }),
        ],
        treeshake: false,
    });

    await writeBundles(
        bundle,
        buildConfigEntries.map(([module, config]) => {
            return {
                format: config.format,
                dir: config.output.path,
                exports: module === 'cjs' ? 'named' : undefined,
                // preserveModules: true,
                // preserveModulesRoot: epRoot,
                sourcemap: true,
                entryFileNames: `[name].${config.ext}`,
            };
        }),
    );
};

module.exports = {
    buildModules: gulp.series(buildModules),
};
