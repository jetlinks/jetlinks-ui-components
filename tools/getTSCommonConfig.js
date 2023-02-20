'use strict';

const fs = require('fs');
const assign = require('object-assign');
const JSON5 = require('json5');
const { getProjectPath } = require('./utils/projectHelper');

module.exports = function () {
    let my = {};
    if (fs.existsSync(getProjectPath('tsconfig.json'))) {
        // my = require((getProjectPath('tsconfig.json')));
        my = JSON5.parse(
            fs.readFileSync(getProjectPath('tsconfig.json')).toString(),
        );
    }
    return assign(
        {
            noUnusedParameters: true,
            noUnusedLocals: true,
            strictNullChecks: true,
            target: 'es6',
            jsx: 'preserve',
            moduleResolution: 'node',
            declaration: true,
            allowSyntheticDefaultImports: true,
        },
        my.compilerOptions,
    );
};
