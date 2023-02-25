// node --experimental-specifier-resolution=node examples/esm-test.mjs

import { red, log, color } from '../src/esm.mjs';
// import { color } from '../';

console.log(Object.keys(color));
// console.log(color.green('green'));
// clc.log.greenBright('log.greenBright');
console.log(import.meta);
console.log(red('red'));
console.log(color.red('color.red'));
log.red('log.red');

// ansi256
console.log(color.c250('c250'));
console.log(color.bg129('bg129'));
console.log(color.bg129(color.c250('bg129-c250')));
console.log(color.bg129.c250('bg129 - c250'));
console.log(color.c250.bg129('c250-bg129'));
console.log(color.c250.bg129.underline.italic(' ANSI256: color 250 and background 129 '));
