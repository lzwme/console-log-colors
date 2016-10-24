# console-log-colors

Console log colors helper for simple useage. Without any dependence.

Please use [colors.js](https://github.com/Marak/colors.js) or [chalk](https://github.com/chalk/chalk) for complex requirements.

## INSTALL

```bash
npm install console-log-colors --save-dev
```

## USAGE/API

First, import the lib:

```js
var colors = require('console-log-colors');
var color = colors.color;
var log = colors.log;
```

### USAGE API 1: `color(String, color type)`
```js
console.log(color("color('text', 'red')", 'red'));
```

### USAGE API 2: `color[color type](String)`
```js
console.log(color.red("color.red('text')"));
```

### USAGE API 3: `log(String, color type)`
```js
log("log('text', 'blue')", 'blue');
```

### USAGE API 4: `log[color type](String)`
```js
log.red("log.red('text')");
log.green("log.green('text')");
```

### Others Useage Demo
```js
log.red(color.green('ssss'));
log.red(color.whiteBG('red and whiteBG'));
log.red(color.yellowBG('red and yellowBG'));
```

### ALL Color Types => `color.list`
```js
Object.keys(color.list).forEach(function (colorType) {
    log[colorType](colorType);
});
```

## Colors Styles

text colors

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

background colors

* bgBlack
* bgRed
* bgGreen
* bgYellow
* bgBlue
* bgMagenta
* bgCyan
* bgWhite
