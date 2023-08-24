<!-- 代码编辑器 -->
<template>
    <div ref="dom" class="editor"></div>
</template>

<script setup lang="ts">
import * as monaco from 'monaco-editor';
import { ref, onMounted, PropType } from 'vue';

import editorWorker from 'monaco-editor/esm/vs/editor/editor.worker?worker';
import jsonWorker from 'monaco-editor/esm/vs/language/json/json.worker?worker';
import cssWorker from 'monaco-editor/esm/vs/language/css/css.worker?worker';
import htmlWorker from 'monaco-editor/esm/vs/language/html/html.worker?worker';
import tsWorker from 'monaco-editor/esm/vs/language/typescript/ts.worker?worker';

// vue support
import * as onigasm from 'onigasm';
import onigasmWasm from 'onigasm/lib/onigasm.wasm?url';
import { loadGrammars, loadTheme } from 'monaco-volar';
import vueWorker from 'monaco-volar/vue.worker?worker';

self.MonacoEnvironment = {
    getWorker(_: string, label: string) {
        if (label === 'json') {
            return new jsonWorker();
        }
        if (label === 'css' || label === 'scss' || label === 'less') {
            return new cssWorker();
        }
        if (label === 'html') {
            return new htmlWorker();
        }
        if (['typescript', 'javascript'].includes(label)) {
            return new tsWorker();
        }
        if (label === 'vue') {
            return new vueWorker();
        }
        return new editorWorker();
    },
};

const props = defineProps({
    value: { type: String, default: '' },
    /*主题色: vs(默认高亮), vs-dark(黑色), hc-black(高亮黑色) */
    theme: {
        type: String as PropType<'vs' | 'vs-dark' | 'hc-black'>,
        default: 'vs-dark',
    },
    language: { type: String, default: 'json' },
});

const emit = defineEmits(['update:value', 'change']);
const dom = ref();
let instance: any;

const getTheme = async () => {
    if (props.language === 'vue') {
        const theme = await loadTheme(monaco.editor);
        if (props.theme === 'vs') {
            return theme.light;
        } else if (props.theme === 'vs-dark') {
            return theme.dark;
        }
        return theme.dark;
    }
    return props.theme;
};

onMounted(async () => {
    const model = monaco.editor.createModel(props.value, props.language);
    instance = monaco.editor.create(dom.value, {
        model: model,
        tabSize: 2,
        automaticLayout: true,
        scrollBeyondLastLine: false,
        theme: await getTheme(),
        formatOnPaste: true,
    });

    instance.onDidChangeModelContent(() => {
        const value = instance.getValue();
        emit('update:value', value);
        emit('change', value);
    });
    if (props.language === 'vue') {
        onigasm.loadWASM(onigasmWasm);
        loadGrammars(monaco, instance);
    }
});
</script>
