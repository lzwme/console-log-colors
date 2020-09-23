[![Code Climate](https://lzw.me/images/logo.png)](https://lzw.me)
[![console-log-colors](https://nodei.co/npm/console-log-colors.png)][download-url]

console-log-colors
========

[![NPM version][npm-image]][npm-url]
[![node version][node-image]][node-url]
[![npm download][download-image]][download-url]
[![GitHub issues][issues-img]][issues-url]
[![GitHub forks][forks-img]][forks-url]
[![GitHub stars][stars-img]][stars-url]
[![minzipped size][bundlephobia-img]][bundlephobia-url]

[stars-img]: https://img.shields.io/github/stars/lzwme/dir-fast-copy.svg
[stars-url]: https://github.com/lzwme/dir-fast-copy/stargazers
[forks-img]: https://img.shields.io/github/forks/lzwme/dir-fast-copy.svg
[forks-url]: https://github.com/lzwme/dir-fast-copy/network
[issues-img]: https://img.shields.io/github/issues/lzwme/dir-fast-copy.svg
[issues-url]: https://github.com/lzwme/dir-fast-copy/issues
[npm-image]: https://img.shields.io/npm/v/console-log-colors.svg?style=flat-square
[npm-url]: https://npmjs.org/package/console-log-colors
[node-image]: https://img.shields.io/badge/node.js-%3E=_10.9.0-green.svg?style=flat-square
[node-url]: https://nodejs.org/download/
[download-image]: https://img.shields.io/npm/dm/console-log-colors.svg?style=flat-square
[download-url]: https://npmjs.org/package/console-log-colors
[bundlephobia-url]: https://bundlephobia.com/result?p=console-log-colors@latest
[bundlephobia-img]: https://badgen.net/bundlephobia/minzip/console-log-colors@latest

Console log colors helper for simple useage. Without any dependence.

Please use [colors.js](https://github.com/Marak/colors.js) or [chalk](https://github.com/chalk/chalk) for complex requirements.

## INSTALL

```bash
npm install console-log-colors --save-dev
```

## USAGE/API

First, import the lib:

```js
const {color, log} = require('../src/index');
```

### `color[color type](string)`
```js
console.log(color.red("color.red('text')"));
```

### `log[color type](str)`
```js
log.red("log.red('text')", 'test');
log.green("log.green('text')");
```

### Others Useage Demo
```js
log.red(color.green('ssss'));
log.red(color.whiteBG('red and whiteBG'));
log.red(color.yellowBG('red and yellowBG'));
```

### ALL Color Types => `color.list`
```js
Object.keys(color.list).forEach(function (colorType) {
    log[colorType](colorType);
});
```

## Colors Styles

text colors:

* black
* red
* green
* yellow
* blue
* magenta
* cyan
* white
* gray
* grey

background colors:

* bgBlack
* bgRed
* bgGreen
* bgYellow
* bgBlue
* bgMagenta
* bgCyan
* bgWhite

Others:

* reset
* bold
* dim
* italic
* underline
* inverse
* hidden
* strikethrough
