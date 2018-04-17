module.exports = {
  extends: [
    'eslint-config-airbnb/rules/react',
    'eslint-config-airbnb/rules/react-a11y',
    'eslint-config-akveo-base',
  ].map(require.resolve),

  rules: {
    'react/prefer-stateless-function': 0,
    'react/jsx-filename-extension': [
      'error',
      {
        'extensions': [
          '.js'
        ]
      }
    ]
  }
};