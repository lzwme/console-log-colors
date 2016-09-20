/**
 * useage
 */
var colors = require('../src/index');
var color = colors.color;
var log = colors.log;

// color(String, color type)
log.yellow('USAGE1: color(String, color type) ');
console.log(color("color('text', 'red')", 'red'));
log.yellow('------------------------------------------');

// color[color type](String)
log.yellow('USAGE2: color[color type](String)');
console.log(color.red("color.red('text')"));

log.yellow('------------------------------------------');

// log(String, color type)
log.yellow('USAGE3: log(String, color type)');
log("log('text', 'blue')", 'blue');
log.yellow('------------------------------------------');

// log[color type](String)
log.yellow('USAGE4: log[color type]');
log.red("log.red('text')");
log.green("log.green('text')");
log.yellow('------------------------------------------');

// other custom
log.yellow('others demo: ');
log.red(color.green('ssss'));
log.red(color.whiteBG('red and whiteBG'));
log.red(color.yellowBG('red and yellowBG'));

log.yellow('------------------------------------------');

Object.keys(color.list).forEach(function (colorType) {
    log[colorType](colorType);
});
