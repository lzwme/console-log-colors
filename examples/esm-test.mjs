// node --experimental-specifier-resolution=node examples/esm-test.mjs

import { red, log, color } from '../src/esm.mjs';
// import { color } from '../';

console.log(Object.keys(color));
// console.log(color.green('green'));
// clc.log.greenBright('log.greenBright');
console.log(import.meta);
console.log(red('red'));
console.log(color.red('color.red'));
console.log(log.red('log.red'));
