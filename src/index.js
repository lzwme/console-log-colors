/**
 * colors string
 * @see https://github.com/lzwme/console-log-colors.git
 */

var colorList = {
    // modifier
    reset: [0, 0],
    bold: [1, 22],
    dim: [2, 22],
    italic: [3, 23],
    underline: [4, 24],
    inverse: [7, 27],
    hidden: [8, 28],
    strikethrough: [9, 29],

    // color
    black: [30, 39],
    red: [31, 39],
    green: [32, 39],
    yellow: [33, 39],
    blue: [34, 39],
    magenta: [35, 39],
    cyan: [36, 39],
    white: [37, 39],
    gray: [90, 39],
    grey: [90, 39],

    // Bright color
    redBright: [91, 39],
    greenBright: [92, 39],
    yellowBright: [93, 39],
    blueBright: [94, 39],
    magentaBright: [95, 39],
    cyanBright: [96, 39],
    whiteBright: [97, 39],

    // bgColor
    bgBlack: [40, 49],
    bgRed: [41, 49],
    bgGreen: [42, 49],
    bgYellow: [43, 49],
    bgBlue: [44, 49],
    bgMagenta: [45, 49],
    bgCyan: [46, 49],
    bgWhite: [47, 49],

    // bgColor - legacy styles for colors pre v1.0.0
    blackBG: [40, 49],
    redBG: [41, 49],
    greenBG: [42, 49],
    yellowBG: [43, 49],
    blueBG: [44, 49],
    magentaBG: [45, 49],
    cyanBG: [46, 49],
    whiteBG: [47, 49],

    // Bright bgColor
    bgBlackBright: [100, 49],
    bgRedBright: [101, 49],
    bgGreenBright: [102, 49],
    bgYellowBright: [103, 49],
    bgBlueBright: [104, 49],
    bgMagentaBright: [105, 49],
    bgCyanBright: [106, 49],
    bgWhiteBright: [107, 49],
};

function color(str, colorType) {
    var typecfg = colorList[colorType];

    if (!typecfg) {
        return str;
    }

    // return '\u001b[' + typecfg[0] + 'm' + str + '\u001b[' + typecfg[1] + 'm';
    return '\x1b[1m\x1b[' + typecfg[0] + 'm' + str + '\x1b[' + typecfg[1] + 'm\x1b[22m';
}

color.list = colorList;

Object.keys(colorList).forEach(function (key) {
    color[key] = function(str) {
        return color(str, key);
    }
});

function log(str, colorType) {
    console.log(color(str, colorType));
}

Object.keys(colorList).forEach(function (key) {
    log[key] = function() {
        var str = '';
        for (var i = 0;i < arguments.length; i++) {
            str += ' ' + String(arguments[i]);
        }
        console.log(color(str, key));
    }
});

module.exports = {
    color: color,
    log: log,
    colorList: colorList,
}
