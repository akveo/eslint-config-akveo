module.exports = {
  extends: [
    'eslint-config-airbnb/rules/react',
    'eslint-config-airbnb/rules/react-a11y',
    'eslint-config-akveo-base',
  ].map(require.resolve),

  rules: {
    'no-use-before-define': 0,
    'react/prefer-stateless-function': 0,
    'react/jsx-filename-extension': [
      'error',
      {
        'extensions': [
          '.js'
        ]
      }
    ],
    'react/jsx-closing-bracket-location': [
      'warn',
      {
        'selfClosing': 'tag-aligned',
        'nonEmpty': 'after-props'
      }
    ]
  }
};
