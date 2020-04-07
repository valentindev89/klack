module.exports = {
  env: {
    browser: true,
    es6: true,
  },
  extends: ['airbnb', 'plugin:prettier/recommended'],
  globals: {
    Atomics: 'readonly',
    SharedArrayBuffer: 'readonly',
  },
  parserOptions: {
    ecmaFeatures: {
      jsx: true,
    },
    ecmaVersion: 2018,
    sourceType: 'module',
  },
  parser: 'babel-eslint',
  plugins: ['react'],
  rules: {
    'react/jsx-filename-extension': 0, // purely dislike it
    'react/react-in-jsx-scope': 0, // next.js provides react by default
    'react/jsx-props-no-spreading': 0,
    'react/prop-types': 0,
    'implicit-arrow-linebreak': 0,
    'function-paren-newline': 0,
    'import/prefer-default-export': 0,
    'react/jsx-curly-newline': 0,
    'operator-linebreak': 0,
    'no-console': 0,
    'no-plusplus': 0,
    'no-useless-escape': 0,
    'no-restricted-globals': 0,
    'no-shadow': 0,
    'consistent-return': 0,
    'jsx-a11y/anchor-is-valid': 0,
    'react/jsx-no-target-blank': 0,
    'no-new': 0,
    'func-names': 0,
    'react/static-property-placement': 0,
    'react/destructuring-assignment': 0,
    'react/sort-comp': 0,
    'react/require-default-props': 0,
    'react/forbid-prop-types': 0,
    'react/no-array-index-key': 0,
    'no-underscore-dangle': 0,
    'arrow-parens': 0, // there are many cases i know i only need 1 arg. and it looks prettier
    'no-confusing-arrow': 0,
    'jsx-a11y/media-has-caption': 0,
    'jsx-a11y/click-events-have-key-events': 0,
    'jsx-a11y/no-static-element-interactions': 0,
    'jsx-a11y/no-noninteractive-element-interactions': 0,
  },
  settings: {
    'import/resolver': {
      node: {
        paths: ['./'],
      },
    },
  },
};
