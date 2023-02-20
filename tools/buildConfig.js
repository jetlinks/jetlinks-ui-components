const path = require('path');
const buildConfig = {
    esm: {
        module: 'ESNext',
        format: 'esm',
        ext: 'mjs',
        output: {
            name: 'es',
            path: path.resolve('es'),
        },
    },
    cjs: {
        module: 'CommonJS',
        format: 'cjs',
        ext: 'js',
        output: {
            name: 'lib',
            path: path.resolve('lib'),
        },
    },
};
const buildConfigEntries = Object.entries(buildConfig);

module.exports = {
    buildConfig,
    buildConfigEntries,
};
