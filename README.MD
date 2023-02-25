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
+ console-log-colors x 1,773,905 ops/sec ±0.65% (91 runs sampled)
  ansi-colors        x 153,603 ops/sec ±0.92% (93 runs sampled)
  cli-color          x 35,879 ops/sec ±0.71% (94 runs sampled)
  picocolors         x 692,485 ops/sec ±0.92% (91 runs sampled)
  colorette          x 215,972 ops/sec ±0.92% (89 runs sampled)
  chalk              x 361,315 ops/sec ±3.65% (90 runs sampled))
  kleur              x 485,399 ops/sec ±0.80% (93 runs sampled)

# Chained colors
+ console-log-colors x 60,202 ops/sec ±0.79% (94 runs sampled)
  ansi-colors        x 14,001 ops/sec ±7.89% (83 runs sampled))
  cli-color          x 14,339 ops/sec ±0.89% (90 runs sampled)
  chalk              x 179,431 ops/sec ±0.97% (90 runs sampled)
  kleur              x 62,768 ops/sec ±0.88% (91 runs sampled)

# Nested colors
+ console-log-colors x 101,060 ops/sec ±0.93% (89 runs sampled)
  ansi-colors        x 34,329 ops/sec ±11.88% (73 runs sampled)
  cli-color          x 12,013 ops/sec ±1.58% (89 runs sampled)
  picocolors         x 100,250 ops/sec ±0.71% (93 runs sampled)
  colorette          x 93,476 ops/sec ±0.94% (89 runs sampled))
  chalk              x 71,938 ops/sec ±1.02% (90 runs sampled)
  kleur              x 87,196 ops/sec ±0.80% (91 runs sampled)
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
