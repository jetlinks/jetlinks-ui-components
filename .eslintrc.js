module.exports = {
    root: true,
    ecmaFeatures: {
        jsx: true,
    },
    env: {
        browser: true,
        node: true,
        es6: true,
    },
    parser: 'vue-eslint-parser',
    parserOptions: {
        ecmaVersion: 12,
        parser: '@typescript-eslint/parser',
        sourceType: 'module',
    },
    extends: [
        'plugin:vue/vue3-recommended',
        'plugin:import/recommended',
        'plugin:import/typescript',
        'prettier',
    ],
    plugins: ['markdown', '@typescript-eslint', 'import'],
    rules: {
        // override/add rules settings here, such as:
        '@typescript-eslint/no-explicit-any': 'off',
        '@typescript-eslint/ban-ts-comment': 'off',
        'vue/v-on-event-hyphenation': 'off',
        'vue/multi-word-component-names': 'off',
        'import/no-unresolved': 'off',
        'import/extensions': 'off',
        'import/no-absolute-path': 'off',
        'import/no-extraneous-dependencies': 'off',
        'vue/no-unused-vars': 'off',
    },
    globals: {
        h: true,
    },
};
