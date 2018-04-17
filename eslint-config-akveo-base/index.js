module.exports = {
  extends: [
    'eslint-config-airbnb-base',
    'eslint-config-airbnb-base/rules/strict',
  ].map(require.resolve),

  rules: {
    'class-methods-use-this': 0,
    'import/prefer-default-export': 0,
    'import/no-named-default': 0
  }
};
