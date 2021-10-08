[![console-log-colors](https://nodei.co/npm/console-log-colors.png)][download-url]

# console-log-colors

[![NPM version][npm-badge]][npm-url]
[![node version][node-badge]][node-url]
[![npm download][download-badge]][download-url]
[![GitHub issues][issues-badge]][issues-url]
[![GitHub forks][forks-badge]][forks-url]
[![GitHub stars][stars-badge]][stars-url]
[![minzipped size][bundlephobia-badge]][bundlephobia-url]

Console log colors helper for simple lightweight useage, no external dependencies.

Please use [colorette](https://github.com/jorgebucaran/colorette) or [colors.js](https://github.com/Marak/colors.js) or [chalk](https://github.com/chalk/chalk) for complex requirements.

## INSTALL

```bash
npm install console-log-colors --save-dev
```

## USAGE/API

First, import the lib:

```js
const { color, log } = require('console-log-colors');
const { red, green, cyan } = color;
```

### `color[color type](string)`
```js
console.log(red("color.red('text')"));
```

### `log[color type](str)`
```js
log.red("log.red('text')", 'test');
log.green("log.green('text')");
```

### Others Useage Demo
```js
log.red(green('green'));
log.red('red', green('green'), 'default', cyan('cyan'), 'default');
log.red(color.whiteBG('red and whiteBG'));
log.red('red', color.yellowBG('red and yellowBG'), 'red');
```

### ALL Color Types => `color.list`

```js
Object.keys(color.list).forEach(function (colorType) {
    log[colorType](colorType);
});
```

## Styles

`modifier:`

* reset
* bold
* dim
* italic
* underline
* inverse
* hidden
* strikethrough

`color:`

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

`Bright color:`

* redBright
* greenBright
* yellowBright
* blueBright
* magentaBright
* cyanBright
* whiteBright

`bgColor:`

* bgBlack
* bgRed
* bgGreen
* bgYellow
* bgBlue
* bgMagenta
* bgCyan
* bgWhite

`bgColor - legacy styles for colors pre version:`

* blackBG
* redBG
* greenBG
* yellowBG
* blueBG
* magentaBG
* cyanBG
* whiteBG

`Bright bgColor:`

* bgBlackBright
* bgRedBright
* bgGreenBright
* bgYellowBright
* bgBlueBright
* bgMagentaBright
* bgCyanBright
* bgWhiteBright

## License

`console-log-colors` is released under the MIT license.

该插件由[志文工作室](https://lzw.me)开发和维护。

[stars-badge]: https://img.shields.io/github/stars/lzwme/console-log-colors.svg
[stars-url]: https://github.com/lzwme/console-log-colors/stargazers
[forks-badge]: https://img.shields.io/github/forks/lzwme/console-log-colors.svg
[forks-url]: https://github.com/lzwme/console-log-colors/network
[issues-badge]: https://img.shields.io/github/issues/lzwme/console-log-colors.svg
[issues-url]: https://github.com/lzwme/console-log-colors/issues
[npm-badge]: https://img.shields.io/npm/v/console-log-colors.svg?style=flat-square
[npm-url]: https://npmjs.org/package/console-log-colors
[node-badge]: https://img.shields.io/badge/node.js-%3E=_4.0.0-green.svg?style=flat-square
[node-url]: https://nodejs.org/download/
[download-badge]: https://img.shields.io/npm/dm/console-log-colors.svg?style=flat-square
[download-url]: https://npmjs.org/package/console-log-colors
[bundlephobia-url]: https://bundlephobia.com/result?p=console-log-colors@latest
[bundlephobia-badge]: https://badgen.net/bundlephobia/minzip/console-log-colors@latest
