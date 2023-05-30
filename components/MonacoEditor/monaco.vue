<!-- 代码编辑器 -->
<template>
    <div ref="dom" class="editor"></div>
</template>

<script setup>
import { ref, onMounted, watchEffect, watch, defineExpose } from 'vue';
import * as monaco from 'monaco-editor';

const props = defineProps({
    modelValue: [String, Number],
    theme: { type: String, default: 'vs-dark' },
    language: { type: String, default: 'json' },
    codeTips: { type: Array, default: () => []}
});

const emit = defineEmits(['update:modelValue']);

const dom = ref();
const codeTipsMap = ref(new Map())

let instance;

// codeTipItem.dispose() // 销毁自定义提示

onMounted(() => {
    const _model = monaco.editor.createModel(props.modelValue, props.language);

    instance = monaco.editor.create(dom.value, {
        model: _model,
        tabSize: 2,
        automaticLayout: true,
        scrollBeyondLastLine: false,
        theme: props.theme, // 主题色: vs(默认高亮), vs-dark(黑色), hc-black(高亮黑色)
        formatOnPaste: true,
    });

    instance.onDidChangeModelContent(() => {
        const value = instance.getValue();
        emit('update:modelValue', value);
    });
});

/**
 * 代码格式化
 */
const editorFormat = () => {
    if (!instance) return;
    instance.getAction('editor.action.formatDocument')?.run();
};

watchEffect(() => {
    setTimeout(() => {
        editorFormat();
    }, 300);
});

/**
 * 光标位置插入内容
 * @param {String} val
 */
const insert = (val) => {
    if (!instance) return;
    const position = instance.getPosition();
    instance.executeEdits(instance.getValue(), [
        {
            range: new monaco.Range(
                position?.lineNumber,
                position?.column,
                position?.lineNumber,
                position?.column,
            ),
            text: val,
        },
    ]);
};

watch(
    () => props.modelValue,
    (val) => {
        if (!instance) return;
        // setValue之前获取光标位置
        const position = instance.getPosition();
        // setValue之后光标位置改变
        instance.setValue(val);
        // 设置光标位置为setValue之前的位置
        instance.setPosition(position);
    },
);

defineExpose({
    editorFormat,
    insert,
});
</script>

<style lang="less" scoped>
.editor {
    height: 100%;
}
</style>
