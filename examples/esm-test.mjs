// node --experimental-specifier-resolution=node examples/esm-test.mjs

import clc from '../src/esm.js';
// import { color } from '../';

console.log(Object.keys(clc));
// console.log(color.green('green'));
// clc.log.greenBright('log.greenBright');
// console.log(import.meta, exports)
console.log(clc.red('red'));
console.log(clc.color.red('color.red'));
console.log(clc.log.red('log.red'));
