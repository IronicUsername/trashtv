const OFF = 0;
const WARN = 1;
const ERROR = 2;

module.exports = {
  root: true,
  env: {
    node: true
  },
  extends: [
    'plugin:vue/essential',
    'eslint:recommended'
  ],
  parserOptions: {
    parser: 'babel-eslint',
    ecmaVersion: 2020,
  },
  rules: {
    'comma-dangle': OFF,
    'complexity': [ERROR, {max: 10}],
    'indent': [WARN, 2, {
      ArrayExpression: 'first',
      ObjectExpression: 'first',
      VariableDeclarator: 'first',
      SwitchCase: 1,
    }],
    'max-len': [ERROR, {code: 159}],
    'no-multiple-empty-lines': [ERROR, {max: 2, maxEOF: 1}],
    'quotes': [WARN, 'single'],
    'sort-imports': WARN,
    'space-before-function-paren': [WARN, 'never'],
    'space-before-blocks': [WARN, { functions: 'never', keywords: 'never', classes: 'never' }],
    'keyword-spacing': [WARN, {
      before: true,
      after: false,
      overrides: {
        case: {after: true},
        default: {after: true},
        from: {after: true},
        return: {after: true},
        import: {after: true},
      }
    }],

    'no-console': process.env.NODE_ENV === 'production' ? 'warn' : 'off',
    'no-debugger': process.env.NODE_ENV === 'production' ? 'warn' : 'off'
  }
}
