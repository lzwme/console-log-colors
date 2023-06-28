[![console-log-colors](https://nodei.co/npm/console-log-colors.png)][download-url]

# console-log-colors

[![NPM version][npm-badge]][npm-url]
[![node version][node-badge]][node-url]
[![npm download][download-badge]][download-url]
[![GitHub issues][issues-badge]][issues-url]
[![GitHub forks][forks-badge]][forks-url]
[![GitHub stars][stars-badge]][stars-url]

Console log colors helper for simple lightweight useage. No external dependencies. It supports use in Node.js and Browser(Since Chrome 69) environments.

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

### Nested

```js
import { red, white, gray } from 'console-log-colors';

console.log(
  red(`a red ${white('white')} red ${red('red')} red ${gray('gray')} red ${red('red')} red ${red('red')}`)
);
```

### ANSI256

Support ansi256 colors. For example:

```js
import { c250 } from 'console-log-colors';

console.log(c250.bg129(' ANSI256: color 250 and background 129 '));
```

## API

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

`ANSI256`:

- `c<0~255>`
- `bg<0~255>`

## Benchmarks

```bash
$ npm run benchmark
```

Output reference:

```diff
# All Colors
+ console-log-colors x 1,713,611 ops/sec ±1.35% (88 runs sampled))
  ansi-colors        x 361,503 ops/sec ±1.15% (89 runs sampled))
  cli-color          x 61,993 ops/sec ±1.53% (91 runs sampled)
  picocolors         x 1,458,754 ops/sec ±1.14% (90 runs sampled)
  colorette          x 441,998 ops/sec ±1.19% (92 runs sampled)
  chalk              x 922,968 ops/sec ±1.30% (91 runs sampled)d)
  kleur              x 1,162,681 ops/sec ±1.46% (87 runs sampled)
  yoctocolors        x 345,921 ops/sec ±1.07% (91 runs sampled)
  kolorist           x 345,567 ops/sec ±0.69% (93 runs sampled)

# Chained colors
+ console-log-colors x 105,119 ops/sec ±2.13% (92 runs sampled))
  ansi-colors        x 36,412 ops/sec ±1.31% (91 runs sampled)
  cli-color          x 28,733 ops/sec ±1.10% (90 runs sampled)
  chalk              x 479,833 ops/sec ±0.82% (93 runs sampled)
  kleur              x 74,308 ops/sec ±2.06% (75 runs sampled))

# Nested colors
+ console-log-colors x 193,483 ops/sec ±1.20% (88 runs sampled)
  ansi-colors        x 97,122 ops/sec ±1.21% (89 runs sampled))
  cli-color          x 25,077 ops/sec ±0.97% (93 runs sampled)
  picocolors         x 191,207 ops/sec ±1.22% (86 runs sampled)
  colorette          x 179,415 ops/sec ±1.37% (88 runs sampled)
  chalk              x 136,924 ops/sec ±1.04% (90 runs sampled)
  kleur              x 166,470 ops/sec ±1.23% (87 runs sampled)
  kolorist           x 150,592 ops/sec ±1.33% (90 runs sampled)
```

## References

- [colors.js](https://github.com/Marak/colors.js)
- [chalk](https://github.com/chalk/chalk)
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
