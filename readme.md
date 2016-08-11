# eslint-plugin-gogu

## Install && Usage

```shell
$ npm install eslint github:gogu/eslint-plugin-gogu
```

.eslintrc

```json
{
  "extends": "gogu"
}
```

## Rules

基于 [eslint:recommended](http://eslint.org/docs/rules/) 增加如下规则：

- 强制 strict mode
- 两空格缩进
- 一般情况强制单引号，允许 ES6 反引号字符模板，允许单双引号嵌套
- 强制语句结尾分号（`function`, `Class`, `for`, `while`, `if`, `switch`, `try` 除外)
- 单行代码块前后强制空格
- 逗号前禁止空格，后强制空格
- 对象字面量键值冒号前禁止空格，后强制空格
- 关键字前后强制空格
- 操作符前后强制空格（`|0` 除外）
- 圆括号前后禁止空格
- 单行对象字面量大括号前后有空格
- 注释 `//` 后强制空格
- 语句大括号禁止另起一行
- 禁止语句不写大括号情况下单条执行语句换行，允许不换行时不写大括号
- 强制变量分开声明
- 强制使用 `===` 和 `!==`
- 禁止在代码块中声明函数或变量（`let`, `const` 允许）
- 禁止 `eval`
- 禁止 `with`
- 强制文件最后留有空行
- 允许 `console`

## Reference

- [ElemeFE style guide](https://github.com/ElemeFE/style-guide/blob/master/javascript.md)
