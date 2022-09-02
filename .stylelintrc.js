module.exports = {
    extends: ['stylelint-config-standard', 'stylelint-config-prettier'],
    // extends: 'stylelint-config-recommended-less',
    // customSyntax: 'postcss-less',
    // add your custom config here
    // https://stylelint.io/user-guide/configuration
    // rules: {},
    overrides: [
        {
          files: ["**/*.less"],
          customSyntax: "postcss-less"
        }
    ]
}
