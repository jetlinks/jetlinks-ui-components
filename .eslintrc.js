export default {
  "root": true,
  "env": {
    "browser": true,
    "node": true,
    "es6": true
  },
  "parser": "@typescript-eslint/parser",
  "parserOptions": {
    "parser": "babel-eslint"
  },
  "extends": [
    "plugin:vue/vue3-recommended",
    "plugin:import/recommended",
    "plugin:import/typescript",
    "prettier"
  ],
  "plugins": [
    "markdown",
    "@typescript-eslint",
    "import"
  ],
  "rules": {
    // override/add rules settings here, such as:
    "@typescript-eslint/no-explicit-any": "off",
    "@typescript-eslint/ban-ts-comment": "off",
    "vue/v-on-event-hyphenation": "off",
    "vue/multi-word-component-names": "off"
  },
  "globals": {
    "h": true
  }
}