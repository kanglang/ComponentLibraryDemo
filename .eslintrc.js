/*
 * @Author: kanglang
 * @Date: 2022-01-25 13:39:17
 * @LastEditors: kanglang
 * @LastEditTime: 2022-01-25 13:39:17
 * @Description: ESlint配置
 */
module.exports = {
  parser: 'babel-eslint',
  env: {
    browser: true,
    es6: true,
  },
  extends: 'airbnb',
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
  plugins: ['react'],
  rules: {
    'react/jsx-filename-extension': [1, {extensions: ['.js', '.jsx']}], //在JS文件中允许存在JSX语法
    'global-require': 'off', //image指定source时要用require语句
    'react/jsx-indent': ['error', 2], //缩进规则为2个空格
    'react/jsx-indent-props': ['error', 2], //缩进规则为2个空格
    'react/prop-types': ['error', {ignore: ['tintColor', 'navigation']}],
    'react/no-multi-comp': ['error', {ignoreStateless: true}],
    'react/prefer-stateless-function': ['error', {ignorePureComponents: true}],
    'max-len': ['error', {code: 200}],
    'import/no-unresolved': [
      2,
      {
        ignore: ['^@/'], // @ 是设置的路径别名,解决与eslint的冲突
      },
    ],

    // 配置方法编码顺序start
    'react/sort-comp': [
      1,
      {
        order: ['static-methods', 'lifecycle', 'rendering', 'everything-else'],
        groups: {
          rendering: ['/^render.+$/', 'render'],
        },
      },
    ],
    // 配置方法编码顺序end

    'no-underscore-dangle': 0, //下换线警告
    'no-console': 'off', //console警告
    'no-return-assign': 0, //箭头函数必须有返回值
    'react/no-unused-state': 0, //没有使用的state
    'react/jsx-props-no-spreading': 0,
    'no-plusplus': 0,  // ++  --
    'import/prefer-default-export': 0, //默认导出
    'no-use-before-define': 0, //在定义前使用
    'react/destructuring-assignment': 1,  //必须用解构的形式
    'react/static-property-placement': 0, //static不用放在外部定义
    'no-useless-constructor': 0, //constrctor的父继承
    'react/prop-types': 0, //prop-types是否必须（严格项目应该打开）
    'max-classes-per-file': ['error', 10],
    'global-require': 0, // 不能使用require
    'comma-dangle': 0, // 结尾逗号
    'no-console': 0, // 不能有console，警告
    'no-param-reassign': 0, // 不允许函数参数重新赋值
    'no-unused-expressions': 0, // 不允许  this.toast.finally && this.toast.finally();形式
    'func-names': 0, // 不允许使用 const getList = function() {...}，是个警告
    'no-prototype-builtins': 0, // 不能使用prototype操作
    'no-restricted-syntax': 0, // 禁止使用for in
    'prefer-const': 0, // 如果没改变的话，必须是const
    'no-undef': 0, // 使用了未定义的变量
    'arrow-parens': 0, // 箭头函数用小括号括起来
    'object-shorthand': 0, //强制对象字面量缩写语法、
    'guard-for-in': 0, // for in循环要用if语句过滤
    'import/no-dynamic-require': 0, // 不能使用动态require
    'react/jsx-wrap-multilines': 0, // 强制jsx多行换行
    'linebreak-style': 0, // 不检查LR和CRLF
    'operator-linebreak': 0, // 换行符
    'arrow-body-style': 0, // 不规定箭头函数体的样式
    'object-curly-newline': 0, // 不强制对象属性换行显示
    'react/require-default-props': 0, // 不强制组件默认props
    'consistent-return': 0,
    'react/no-array-index-key': 0, // 防止在数组遍历中使用数组key做索引
    'react/jsx-closing-tag-location': 0,
    'jsx-quotes': ['error', 'prefer-single'], // 限制使用单引号
    camelcase: 0,
    'no-lonely-if': 0, //非独行if
    'react/no-string-refs': 0, // ref
    'implicit-arrow-linebreak': 0,
    'prefer-destructuring': 0,
    eqeqeq: 0,
    'import/extensions': 0,
    'no-irregular-whitespace': 0,
    'import/no-duplicates': 0,
  },
};
