'use strict';

module.exports = {
  customSyntax: 'postcss-scss',
  extends: 'stylelint-config-standard',
  plugins: [
    'stylelint-order',
    'stylelint-scss'
  ],
  rules: {
    // Disabled from stylelint-config-standard.
    'at-rule-empty-line-before': null,
    'color-function-notation': null,
    'declaration-empty-line-before': null,
    'font-family-name-quotes': null,
    'font-family-no-missing-generic-family-keyword': null,
    'no-descending-specificity': null,
    'no-invalid-position-at-import-rule': null,
    'selector-pseudo-element-colon-notation': null,

    // Additional rules to match OpenSphere SCSS style guide.
    'alpha-value-notation': 'number',
    'at-rule-disallowed-list': ['debug', 'extend', 'warn'],
    'color-named': 'never',
    'declaration-block-no-duplicate-properties': true,
    'function-name-case': 'lower',
    'function-url-no-scheme-relative': true,
    'function-url-scheme-disallowed-list': ['/^(ftp|http)/'],
    'max-nesting-depth': 5,
    'number-leading-zero': 'never',
    'number-max-precision': 5,
    'string-quotes': 'single',
    'selector-class-pattern': [
      '^([a-zA-Z][a-zA-Z0-9]*)([-_]+[a-zA-Z0-9]+)*$'
		],
    'selector-type-no-unknown': [true, {
      ignoreTypes: [
        // attr element.
        'attr',
        // Angular ng-* elements.
        /^ng-/
      ]
    }],
    'value-keyword-case': ['lower', {
      // Expect SVG keywords to be camel case.
      // https://stylelint.io/user-guide/rules/list/value-keyword-case/#camelcasesvgkeywords-true--false-default-false
      camelCaseSvgKeywords: true
    }],

    // Order plugin rules
    "order/order": [
      "declarations",
      "rules"
    ],
    'order/properties-alphabetical-order': true,

    // SCSS plugin rules
    'scss/at-function-pattern': /^[_a-z][-a-z0-9]*$/,
    'scss/at-mixin-pattern': /^[_a-z][-a-z0-9]*$/,
    'scss/dollar-variable-pattern': /^[_a-z][-a-z0-9]*$/,
    'scss/percent-placeholder-pattern': /^[_a-z][-a-z0-9]*$/,
    'at-rule-no-unknown': null,
    'scss/at-rule-no-unknown': true
  }
};
