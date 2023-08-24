<!-- 代码编辑器 -->
<template>
    <div ref="dom" class="editor"></div>
</template>

<script setup lang="ts">
import {
    ref,
    onMounted,
    watch,
    defineExpose,
    onUnmounted,
    toRaw,
    nextTick,
} from 'vue';
import * as monaco from 'monaco-editor';

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
        if (label === 'css') {
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
    modelValue: [String, Number],
    theme: { type: String, default: 'vs-dark' },
    language: { type: String, default: 'json' },
    codeTips: { type: Array, default: () => [] },
    init: { type: Function, default: undefined },
    registrationTips: { type: Object, default: () => ({}) },
    registrationTypescript: { type: Object, default: () => ({}) },
    blurFormat: { type: Boolean, default: true },
});

const emit = defineEmits(['update:modelValue', 'blur', 'change']);
const dom = ref();
let instance: any;
const monacoProviderRef = ref();
const monacoTypescriptProviderRef = ref();

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

/**
 * 代码格式化
 */
const editorFormat = () => {
    if (!instance.value) return;
    toRaw(instance.value).getAction('editor.action.formatDocument')?.run();
};

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
    const _model = monaco.editor.createModel(props.modelValue, props.language);

    instance.value = monaco.editor.create(dom.value, {
        model: _model,
        tabSize: 2,
        automaticLayout: true,
        scrollBeyondLastLine: false,
        theme: await getTheme(), // 主题色: vs(默认高亮), vs-dark(黑色), hc-black(高亮黑色)
        formatOnPaste: true,
    });

    instance.value.onDidChangeModelContent(() => {
        //
        const value = toRaw(instance.value).getValue();
        nextTick(() => {
            emit('update:modelValue', value);
            emit('change', value);
        });
    });

    instance.value.onDidBlurEditorText(() => {
        emit('blur');
        if (props.blurFormat) {
            editorFormat();
        }
    });

    if (props.modelValue) {
        setTimeout(() => {
            editorFormat();
        }, 200);
    }

    props.init?.(instance.value, monaco);

    if (props.language === 'vue') {
        onigasm.loadWASM(onigasmWasm);
        loadGrammars(monaco, instance);
    }
});

/**
 * 光标位置插入内容
 * @param {String} val
 */
const insert = (val) => {
    if (!instance.value) return;
    const position = toRaw(instance.value).getPosition();
    const value = toRaw(instance.value).getValue();
    toRaw(instance.value).executeEdits(value, [
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
        if (
            !instance.value ||
            (instance.value &&
                props.modelValue === toRaw(instance.value).getValue())
        )
            return;
        // setValue之前获取光标位置
        const position = toRaw(instance.value).getPosition();

        // setValue之后光标位置改变
        toRaw(instance.value).setValue(val);
        // 设置光标位置为setValue之前的位置
        toRaw(instance.value).setPosition(position);

        editorFormat();
    },
);

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

onUnmounted(() => {
    disposeRegister();
    disposeTypescript();
    toRaw(instance.value).editor?.dispose?.();
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
