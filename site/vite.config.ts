import path from 'path';
import vue from '@vitejs/plugin-vue';
import md from '../plugin/md';
import docs from '../plugin/docs';
import vueJsx from '@vitejs/plugin-vue-jsx';
import { additionalData } from './themeConfig';
/**
 * @type {import('vite').UserConfig}
 */
export default {
    resolve: {
        alias: {
            vue: 'vue/dist/vue.esm-bundler.js',
            'jetlinks-ui-components': path.resolve(__dirname, '../components'),
        },
    },
    server: {
        host: true,
    },
    plugins: [
        vueJsx({
            // options are passed on to @vue/babel-plugin-jsx
            mergeProps: false,
            enableObjectSlots: false,
        }),
        docs(),
        md(),
        vue({
            include: [/\.vue$/, /\.md$/],
        }),
    ],
    optimizeDeps: {
        include: ['vue', 'vue-router'],
    },
    css: {
        preprocessorOptions: {
            less: {
                modifyVars: {
                    'root-entry-name': 'variable',
                },
                javascriptEnabled: true,
                // includePaths: ["node_modules/"],
                additionalData,
            },
        },
    },
};
