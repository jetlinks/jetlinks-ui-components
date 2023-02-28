<!-- 代码编辑器 -->
<template>
    <div ref="dom" class="editor"></div>
</template>

<script setup lang="ts">
import * as monaco from 'monaco-editor';
import { ref, onMounted } from 'vue';

const props = defineProps({
    value: { type: String, default: '' },
    theme: { type: String, default: 'vs-dark' },
    language: { type: String, default: 'json' },
});

const emit = defineEmits(['update:value']);

const dom = ref();

let instance: any;

onMounted(() => {
    const model = monaco.editor.createModel(props.value, props.language);
    instance = monaco.editor.create(dom.value, {
        model: model,
        tabSize: 2,
        automaticLayout: true,
        scrollBeyondLastLine: false,
        theme: props.theme, // 主题色: vs(默认高亮), vs-dark(黑色), hc-black(高亮黑色)
        formatOnPaste: true,
    });

    instance.onDidChangeModelContent(() => {
        const value = instance.getValue();
        emit('update:value', value);
    });
});
</script>
