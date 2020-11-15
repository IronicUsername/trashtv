const OFF = 0;
const WARN = 1;
const ERROR = 2;

module.exports = {
  'root': true,
  'env': {
    node: true
  },
  'extends': [
    'plugin:vue/essential',
    'eslint:recommended'
  ],
  'parserOptions': {
    'ecmaVersion': 2020
  },
  'rules': {
    // Allowed a getter without setter, but all setters require getters
    'accessor-pairs': [ERROR, {
      'getWithoutSet': false,
      'setWithoutGet': true,
    }],
    'block-scoped-var': WARN,
    'comma-dangle': OFF,
    'complexity': [ERROR, {'max': 10}],
    'eqeqeq': WARN,
    'indent': [WARN, 2, {
      'ArrayExpression': 'first',
      'ObjectExpression': 'first',
      'VariableDeclarator': 'first',
      'SwitchCase': 1,
    }],
    'keyword-spacing': [WARN, {
      'before': true,
      'after': false,
      'overrides': {'default': {'after': true},
                    'from': {'after': true},
                    'import': {'after': true},
                    'return': {'after': true}}
    }],
    'max-len': [ERROR, {'code': 159}],
    'no-multiple-empty-lines': [ERROR, {
      'max': 2,
      'maxEOF': 1,
    }],
    'no-unexpected-multiline': ERROR,
    'object-curly-spacing': OFF,
    'object-curly-newline': OFF,
    'quotes': [WARN, 'single'],
    'quote-props': [WARN, 'consistent'],
    'spaced-comment': [OFF],
    'space-before-function-paren': [WARN, 'never'],
    'sort-imports': WARN,

    'no-console': process.env.NODE_ENV === 'production' ? 'warn' : 'off',
    'no-debugger': process.env.NODE_ENV === 'production' ? 'warn' : 'off'
  }
}
