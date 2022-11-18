[![console-log-colors](https://nodei.co/npm/console-log-colors.png)][download-url]

# console-log-colors

[![NPM version][npm-badge]][npm-url]
[![node version][node-badge]][node-url]
[![npm download][download-badge]][download-url]
[![GitHub issues][issues-badge]][issues-url]
[![GitHub forks][forks-badge]][forks-url]
[![GitHub stars][stars-badge]][stars-url]

Console log colors helper for simple lightweight useage, no external dependencies. It supports use in Node.js and Browser(Since Chrome 69) environments.

Please use [colorette](https://github.com/jorgebucaran/colorette) or [chalk](https://github.com/chalk/chalk) for complex requirements.

## INSTALL

```bash
npm install console-log-colors
```

## USAGE/API

Examples:

```js
const { color, log, red, green, cyan, cyanBright } = require('console-log-colors');
// or use import
import { color, log, red, green, cyan, cyanBright } from 'console-log-colors';

// ansi colors
console.log(green('This is a green string!'));
console.log(color.green('This is a green string!'));
console.log(color('This is a green string!', 'green'));

// chained styles
console.log(cyan.bgRed.bold.underline('Hello world!'));

try {
  cyan.bold.cyan('Should throw Error');
} catch(e) {
  console.log(String(e.message).includes('cyan'), e.message);
}

// log
log('This is a green string!', 'green');
log.green('This is a green string!', 'This is a green string!');

// helpers
console.log('isSupported:', clc.isSupported());
clc.disable();
console.log('isSupported(after disabled):', clc.isSupported());
clc.enable();
console.log('isSupported(after enabled):', clc.isSupported());

const greenstr = clc.green('This is a green string!');
const striped = clc.strip(greenstr);
console.log(greenstr, ' ==> [striped]', striped);
```

### Chained colors

```js
import { cyan } from 'console-log-colors';

console.log(cyan.bgRed.bold.underline('Hello world!'));
console.log(bold.cyan.bgRed.underline('Hello world!'));
```

### `color[color type](string)`

```js
import { color } from 'console-log-colors';

console.log(color.red('red'), color.green('green'), color.cyanBright('cyanBright'));
```

### `log[color type](str)`

```js
import { log } from 'console-log-colors';

log.red('red text');
log.green('green text');
log.cyanBright('cyanBright text', 'cyanBright text2');
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

## Benchmark

```bash
$ npm run benchmark
```

Output reference:

```diff
# All Colors
+ console-log-colors x 253,111 ops/sec ±0.70% (90 runs sampled)
  ansi-colors x 133,279 ops/sec ±0.81% (88 runs sampled)
  cli-color x 8,714 ops/sec ±0.69% (89 runs sampled)
  picocolors x 637,233 ops/sec ±0.65% (87 runs sampled)
  colorette x 220,125 ops/sec ±0.72% (90 runs sampled)
  chalk x 380,768 ops/sec ±0.59% (89 runs sampled)
  kleur x 529,787 ops/sec ±0.73% (90 runs sampled)

# Chained colors
+ console-log-colors x 62,782 ops/sec ±0.69% (85 runs sampled)
  ansi-colors x 17,313 ops/sec ±0.90% (87 runs sampled)
  cli-color x 6,652 ops/sec ±0.72% (88 runs sampled)
  chalk x 203,901 ops/sec ±0.76% (89 runs sampled)
  kleur x 55,145 ops/sec ±0.90% (86 runs sampled)

# Nested colors
+ console-log-colors x 121,535 ops/sec ±0.61% (90 runs sampled)
  ansi-colors x 46,949 ops/sec ±0.70% (90 runs sampled)
  cli-color x 3,858 ops/sec ±0.70% (90 runs sampled)
  picocolors x 108,340 ops/sec ±0.67% (91 runs sampled)
  colorette x 101,065 ops/sec ±0.76% (87 runs sampled)
  chalk x 79,484 ops/sec ±0.59% (90 runs sampled)
  kleur x 94,918 ops/sec ±0.59% (91 runs sampled))
```

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
[npm-url]: https://npmjs.com/package/console-log-colors
[node-badge]: https://img.shields.io/badge/node.js-%3E=_4.0.0-green.svg?style=flat-square
[node-url]: https://nodejs.org/download/
[download-badge]: https://img.shields.io/npm/dm/console-log-colors.svg?style=flat-square
[download-url]: https://npmjs.com/package/console-log-colors
[bundlephobia-url]: https://bundlephobia.com/result?p=console-log-colors
[bundlephobia-badge]: https://badgen.net/bundlephobia/minzip/console-log-colors
