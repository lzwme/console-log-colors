type ColorList =
    'reset' |
    'bold' |
    'dim' |
    'italic' |
    'underline' |
    'inverse' |
    'hidden' |
    'strikethrough' |
    'black' |
    'red' |
    'green' |
    'yellow' |
    'blue' |
    'magenta' |
    'cyan' |
    'white' |
    'gray' |
    'grey' |
    'bgBlack' |
    'bgRed' |
    'bgGreen' |
    'bgYellow' |
    'bgBlue' |
    'bgMagenta' |
    'bgCyan' |
    'bgWhite' |
    'blackBG' |
    'redBG' |
    'greenBG' |
    'yellowBG' |
    'blueBG' |
    'magentaBG' |
    'cyanBG' |
    'whiteBG';

export const color: {
  [key in ColorList]: (str: any) => string;
}

export const log: {
  [key in ColorList]: (...args) => void;
}
