// https://eslint.org/docs/user-guide/configuring

module.exports = {
  root: true,
  parserOptions: {
    parser: 'babel-eslint'
  },
  env: {
    browser: true,
  },
  extends: [
    // https://github.com/vuejs/eslint-plugin-vue#priority-a-essential-error-prevention
    // consider switching to `plugin:vue/strongly-recommended` or `plugin:vue/recommended` for stricter rules.
    'plugin:vue/essential', 
    // https://github.com/standard/standard/blob/master/docs/RULES-en.md
    'standard'
  ],
  // required to lint *.vue files
  plugins: [
    'vue'
  ],
  // add your custom rules here
  rules: {
    'generator-star-spacing': 'off',
    'no-debugger': process.env.NODE_ENV === 'production' ? 'error' : 'off',
    "no-irregular-whitespace":"off",
    "no-unused-vars":"off",
    "no-console": "off", // 禁止console
    "no-alert": "off", // 禁止alert,conirm等
    "no-tabs": "off", // 禁止使用tab
    "eol-last": "off", // 文件末尾强制换行
    "no-new": "error",  // 禁止在使用new构造一个实例后不赋值
    "no-trailing-spaces": "off", // 一行结束后面不要有空格
    "indent": "off",
    "key-spacing": "off",
    "padded-blocks": "off",
    "no-multiple-empty-lines": "off",
    "space-before-blocks": "off",
    "semi": "off", // 允许以分号结束
    "space-before-function-paren": "off" // 函数定义时括号前面要不要有空格
  }
}
