/**
 * useage
 */
var clc = require('../');
var { color, log, enable, disable } = clc;
var { red, green, cyan } = color;

// color(String, color type)
log.yellow('USAGE1: color(String, color type) ');
console.log(color("color('text', 'red')", 'red'));
log.yellow('------------------------------------------');

// color[color type](String)
log.yellow('USAGE2: color[color type](String)');
console.log(red("color.red('text')"));

log.yellow('------------------------------------------');

// log(String, color type)
log.yellow('USAGE3: log(String, color type)');
log("log('text', 'blue')", 'blue');
log.yellow('------------------------------------------');

// log[color type](String)
log.yellow('USAGE4: log[color type]');
log.red("log.red('text')");
log.yellow('------------------------------------------');

// other custom
log.yellow('others demo: ');
log.red(green('green'));
log.red('red', green('green'), 'default', cyan('cyan'), 'default');
log.red(color.whiteBG('red and whiteBG'));
log.red('red', color.yellowBG('red and yellowBG'), 'red');

log.yellow('------------------------------------------');

Object.keys(color.list).forEach(function (colorType) {
  log[colorType](colorType);
});

log.yellow('------------------------------------------');

disable();
console.log(green('[green]color support disabled:'), clc.isSupported());

enable();
log.green('[green]color support enabled:', clc.isSupported());
