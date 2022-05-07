module.exports = {
  env: {
    browser: true,
    es6: true,
    commonjs: true,
    node: true,
  },
  extends: ['eslint:recommended'],
  rules: {
    //参数：0 关闭，1 警告，2 错误
    //强制使用单引号
    quotes: ['error', 'single'],
    //强制不使用分号结尾
    semi: ['error', 'never'],
    'comma-dangle': 2,
  }
}