module.exports = {module.exports = {

  extends: [  root: true,

    'next/core-web-vitals',  env: {

    'plugin:react/recommended',    browser: true,

    'plugin:jsx-a11y/recommended',    es2021: true,

    'plugin:jest/recommended',    node: true,

    'prettier'  },

  ],  extends: [

  plugins: ['react', 'jsx-a11y', 'prettier', 'jest'],    'eslint:recommended',

  rules: {    'plugin:react/recommended',

    'react/react-in-jsx-scope': 'off',    'plugin:react-hooks/recommended',

    'react/prop-types': 'warn'    'plugin:jsx-a11y/recommended',

  },  ],

  env: {  parserOptions: {

    browser: true,    ecmaFeatures: {

    node: true,      jsx: true,

    es6: true,    },

    'jest/globals': true    ecmaVersion: 'latest',

  },    sourceType: 'module',

  settings: {  },

    jest: {  settings: {

      version: 'latest'    react: {

    }      version: 'detect',

  }    },

};  },
  rules: {
    'react/react-in-jsx-scope': 'off',
    'jsx-a11y/anchor-is-valid': 'off',
    'no-unused-vars': ['warn', { argsIgnorePattern: '^_' }],
    'react/prop-types': 'warn',
  },
};
