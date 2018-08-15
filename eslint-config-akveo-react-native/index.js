module.exports = {
  extends: [
    'eslint-config-akveo-react',
  ].map(require.resolve),

  settings: {
    'import/resolver': {
      'node': {
        'extensions': [
          '.js',
          '.android.js',
          '.ios.js'
        ]
      }
    }
  }
};
