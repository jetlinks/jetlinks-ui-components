const path = require('path')
const vueJsx = require('@vitejs/plugin-vue-jsx')

module.exports = {
    "stories": [
        "../src/**/*.stories.mdx",
        "../src/**/*.stories.@(js|jsx|ts|tsx)",
        "../src/**/**/*.stories.@(js|jsx|ts|tsx)"
    ],
    "addons": [
        "@storybook/addon-links",
        "@storybook/addon-essentials",
        "@storybook/addon-interactions"
    ],
    "framework": "@storybook/vue3",
    "core": {
        "builder": "@storybook/builder-vite"
    },
    webpackFinal: async (config, {configType}) => {
        config.module.rules.push({
            test: /\.mjs$/,
            type: 'javascript/auto',
            resolve: {
                fullySpecified: false,
                extensions: ['.js', '.vue', '.json', 'ts', 'tsx']
            }
        });

        config.module.rules.push({
            test: /\.less$/,
            loaders: ["style-loader", "css-loader", "less-loader"],
            include: path.resolve(__dirname, '../')
        })
      
        return config;
    }
}