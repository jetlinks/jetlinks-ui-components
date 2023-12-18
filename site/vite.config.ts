import path from 'path';
import vue from '@vitejs/plugin-vue';
import md from '../plugin/md';
import docs from '../plugin/docs';
import vueJsx from '@vitejs/plugin-vue-jsx';
import { additionalData } from './themeConfig';
import monacoEditorPlugin from 'vite-plugin-monaco-editor';
import copy from 'rollup-plugin-copy'

const prefix = `monaco-editor/esm/vs`;

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
        port: 8082,
    },
    plugins: [
        copy({
            targets: [
                { src: `../components/MarsMap/3DMap/sxii/*/**`, dest: 'public/js' },
            ]
        }),
        monacoEditorPlugin({}),
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
                // additionalData,
            },
        },
    },
    // build: {
    //     rollupOptions: {
    //         output: {
    //             manualChunks: {
    //                 jsonWorker: [`${prefix}/language/json/json.worker`],
    //                 cssWorker: [`${prefix}/language/css/css.worker`],
    //                 htmlWorker: [`${prefix}/language/html/html.worker`],
    //                 tsWorker: [`${prefix}/language/typescript/ts.worker`],
    //                 editorWorker: [`${prefix}/editor/editor.worker`],
    //             },
    //         },
    //     },
    // },
};
