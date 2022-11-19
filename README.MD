[![console-log-colors](https://nodei.co/npm/console-log-colors.png)][download-url]

# console-log-colors

[![NPM version][npm-badge]][npm-url]
[![node version][node-badge]][node-url]
[![npm download][download-badge]][download-url]
[![GitHub issues][issues-badge]][issues-url]
[![GitHub forks][forks-badge]][forks-url]
[![GitHub stars][stars-badge]][stars-url]

Console log colors helper for simple lightweight useage, no external dependencies. It supports use in Node.js and Browser(Since Chrome 69) environments.

Please use [chalk](https://github.com/chalk/chalk) for complex requirements.

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
+ console-log-colors x 455,528 ops/sec ±0.87% (90 runs sampled)
  ansi-colors        x 128,272 ops/sec ±0.70% (88 runs sampled)
  cli-color          x 8,448 ops/sec ±1.00% (86 runs sampled)
  picocolors         x 611,425 ops/sec ±0.73% (87 runs sampled)
  colorette          x 213,588 ops/sec ±0.67% (85 runs sampled)
  chalk              x 365,556 ops/sec ±0.61% (88 runs sampled)
  kleur              x 517,587 ops/sec ±0.74% (90 runs sampled)

# Chained colors
+ console-log-colors x 45,787 ops/sec ±0.76% (84 runs sampled)
  ansi-colors        x 16,285 ops/sec ±1.15% (85 runs sampled)
  cli-color          x 6,347 ops/sec ±0.83% (88 runs sampled)
  chalk              x 203,046 ops/sec ±0.55% (90 runs sampled)
  kleur              x 51,088 ops/sec ±0.79% (86 runs sampled)

# Nested colors
+ console-log-colors x 88,260 ops/sec ±0.55% (89 runs sampled)
  ansi-colors        x 46,112 ops/sec ±0.76% (90 runs sampled)
  cli-color          x 3,667 ops/sec ±0.69% (88 runs sampled)
  picocolors         x 103,690 ops/sec ±0.71% (90 runs sampled)
  colorette          x 97,951 ops/sec ±0.78% (89 runs sampled)
  chalk              x 74,527 ops/sec ±0.88% (89 runs sampled)
  kleur              x 90,129 ops/sec ±0.71% (89 runs sampled)
```

## References

- [chalk](https://github.com/chalk/chalk)
- [colors.js](https://github.com/Marak/colors.js)
- [ansi-colors](https://github.com/doowb/ansi-colors)
- [colorette](https://github.com/jorgebucaran/colorette)
- [cli-color](https://github.com/medikoo/cli-color)
- [picocolors](https://github.com/alexeyraspopov/picocolors)
- [kleur](https://github.com/lukeed/kleur)

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
