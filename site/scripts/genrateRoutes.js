/* eslint-disable @typescript-eslint/no-var-requires */
// import {globby} from 'globby';
// import fs from 'fs'
// import path from 'path'
// import matter from 'gray-matter'
// import { ESLint } from 'eslint'
// import esConfig from '../../.eslintrc.js'
const globby = require('globby');
const fs = require('fs');
const path = require('path');
const matter = require('gray-matter');
const { ESLint } = require('eslint');

(async () => {
  const paths = await globby('components/*/index.md');
  const components = {};
  paths.forEach(path => {
    const content = fs.readFileSync(path).toString();
    const componentName = path.split('/')[1];
    if (componentName !== 'color-picker') {
      const { data } = matter(content);
      components[componentName] = { ...components[componentName], ...data };
    }
  });

  const TEMPLATE = `
export default [
  ${Object.keys(components).map(
    component => `
  {
    path: '${component}',
    meta: ${JSON.stringify(components[component])},
    component: () => import('../../../components/${component}/demo/index.vue'),
  }`,
  )}
];`;

  const engine = new ESLint({
    fix: true,
    useEslintrc: false,
    // baseConfig: require(path.join(process.cwd(), '.eslintrc.js')),
    // baseConfig: esConfig,
  });

  const report = await engine.lintText(TEMPLATE);

  fs.writeFileSync('site/src/router/demoRoutes.js', TEMPLATE);
})();
