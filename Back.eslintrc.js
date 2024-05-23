module.exports = {
  env:{
    browser:true,
    es2021:true,
    node:true
  },
  extends: [
    'eslint:recommended',
    'plugin:react/recommended',
    'pluge:@typescript-eslint/recommended',
    'plugin:prettier/recommended'
  ],
  overrides:[],
  parser:'@typescript-eslint/parser',
  parserOptions: {
    ecmaVersion: 'latest'
  },
  rules: {
    'react/multi-word-component-names': 'off'
  }
}