<!-- 代码编辑器 -->
<template>
    <div ref="dom" class="editor"></div>
</template>

<script setup>
import {
    ref,
    onMounted,
    watchEffect,
    watch,
    defineExpose,
    onUnmounted,
    toRaw,
} from 'vue';
import * as monaco from 'monaco-editor';

const props = defineProps({
    modelValue: [String, Number],
    theme: { type: String, default: 'vs-dark' },
    language: { type: String, default: 'json' },
    codeTips: { type: Array, default: () => [] },
    init: { type: Function, default: undefined },
    registrationTips: { type: Object, default: () => ({}) },
    registrationTypescript: { type: Object, default: () => ({}) },
});

const emit = defineEmits(['update:modelValue', 'blur']);

const dom = ref();

const instance = ref();

const monacoProviderRef = ref();
const monacoTypescriptProviderRef = ref();

// codeTipItem.dispose() // 销毁自定义提示

const handleSuggestions = (suggestions, range) => {
    return Array.isArray(suggestions)
        ? suggestions.map((item) => ({ ...item, range }))
        : [];
};

const disposeRegister = () => {
    monacoProviderRef.value?.dispose();
    monacoProviderRef.value = null;
};
/**
 * 代码提示注册
 */
const registerCompletionItemProvider = () => {
    disposeRegister();
    if (monaco.languages && props.registrationTips?.suggestions) {
        const { name, suggestions } = props.registrationTips;
        monacoProviderRef.value =
            monaco.languages.registerCompletionItemProvider(name || 'json', {
                provideCompletionItems: function (model, position) {
                    const word = model.getWordUntilPosition(position); // 获取提示代码范围位置
                    const range = {
                        startLineNumber: position.lineNumber,
                        endLineNumber: position.lineNumber,
                        startColumn: word.startColumn,
                        endColumn: word.endColumn,
                    };

                    return {
                        suggestions: handleSuggestions(suggestions, range),
                    };
                },
            });
    }
};

const disposeTypescript = () => {
    monacoTypescriptProviderRef.value?.dispose();
    monacoTypescriptProviderRef.value = null;
};

const registerTypescript = () => {
    disposeTypescript();
    if (monaco.languages && props.registrationTypescript?.typescript) {
        const { name, typescript } = props.registrationTypescript;
        monacoTypescriptProviderRef.value =
            monaco.languages.typescript.javascriptDefaults.addExtraLib(
                typescript,
            );
    }
};

onMounted(() => {
    const _model = monaco.editor.createModel(props.modelValue, props.language);

    instance.value = monaco.editor.create(dom.value, {
        model: _model,
        tabSize: 2,
        automaticLayout: true,
        scrollBeyondLastLine: false,
        theme: props.theme, // 主题色: vs(默认高亮), vs-dark(黑色), hc-black(高亮黑色)
        formatOnPaste: true,
    });

    instance.value.onDidChangeModelContent(() => {
        //
        const value = toRaw(instance.value).getValue();
        emit('update:modelValue', value);
    });

    instance.value.onDidBlurEditorText(() => {
        emit('blur');
    });

    props.init?.(instance);
});

/**
 * 代码格式化
 */
const editorFormat = () => {
    if (!instance.value) return;
    instance.value.getAction('editor.action.formatDocument')?.run();
};

watchEffect(() => {
    setTimeout(() => {
        editorFormat();
    }, 300);
});

watch(
    () => JSON.stringify(props.registrationTips),
    () => {
        registerCompletionItemProvider();
    },
    { immediate: true },
);

watch(
    () => JSON.stringify(props.registrationTypescript),
    () => {
        registerTypescript();
    },
    { immediate: true },
);

/**
 * 光标位置插入内容
 * @param {String} val
 */
const insert = (val) => {
    if (!instance.value) return;
    const position = instance.value.getPosition();
    instance.value.executeEdits(instance.value.getValue(), [
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
        if (!instance.value) return;
        // setValue之前获取光标位置
        const position = instance.value.getPosition();
        // setValue之后光标位置改变
        instance.value.setValue(val);
        // 设置光标位置为setValue之前的位置
        instance.value.setPosition(position);
    },
);

onUnmounted(() => {
    disposeRegister();
    disposeTypescript();
    instance.value?.editor?.dispose?.();
});

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
