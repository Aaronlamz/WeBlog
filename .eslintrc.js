// https://v3.nuxtjs.org/community/contribution/#use-eslint
module.exports = {
    extends: [
        'plugin:vue/recommended',
        'plugin:prettier-vue/recommended',
        // '@nuxtjs/eslint-config-typescript',
        'prettier',
    ],
    rules: {
        'vue/multi-word-component-names': 'off',
    },
}
