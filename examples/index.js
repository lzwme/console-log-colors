/**
 * useage
 */
const clc = require('../');

clc.log.yellow('------------------------------------------');
// simple examples
const { color, red, green, cyan, log, enable, disable } = require('../');

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

log.yellow('------------------------------------------');

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

log.yellow('-------------- log[colorType] list ----------------');

Object.keys(color.list).forEach(function (colorType) {
  log[colorType](colorType);
});

log.yellow('-------------------- helpers ----------------------');

disable();
console.log(green('[green]color support disabled:'), clc.isSupported());

enable();
log.green('[green]color support enabled:', clc.isSupported());

const redstr = clc.red('redstr');
console.log('colored:', redstr, ' =>  striped:', clc.strip(redstr));
