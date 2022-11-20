type ColorList =
  | 'reset'
  | 'bold'
  | 'dim'
  | 'italic'
  | 'underline'
  | 'inverse'
  | 'hidden'
  | 'strikethrough'
  | 'black'
  | 'red'
  | 'green'
  | 'yellow'
  | 'blue'
  | 'magenta'
  | 'cyan'
  | 'white'
  | 'gray'
  | 'grey'
  | 'redBright'
  | 'greenBright'
  | 'yellowBright'
  | 'blueBright'
  | 'magentaBright'
  | 'cyanBright'
  | 'whiteBright'
  | 'bgBlack'
  | 'bgRed'
  | 'bgGreen'
  | 'bgYellow'
  | 'bgBlue'
  | 'bgMagenta'
  | 'bgCyan'
  | 'bgWhite'
  | 'blackBG'
  | 'redBG'
  | 'greenBG'
  | 'yellowBG'
  | 'blueBG'
  | 'magentaBG'
  | 'cyanBG'
  | 'whiteBG'
  | 'bgBlackBright'
  | 'bgRedBright'
  | 'bgGreenBright'
  | 'bgYellowBright'
  | 'bgBlueBright'
  | 'bgMagentaBright'
  | 'bgCyanBright'
  | 'bgWhiteBright';

interface StyleFN extends Record<ColorList, StyleFN> {
  (str: unknown): string;
}

interface Color extends Record<ColorList, StyleFN> {
  (str: unknown, type: ColorList): string;
  list: Record<ColorList, [string, string]>;
}

declare interface CLC extends Record<ColorList, StyleFN> {
  color: Color;
  log: Record<ColorList, (...args) => void> & {
    (str: string | number | symbol, type: ColorList): void;
  };
  isSupported(): boolean;
  enable(): boolean;
  disable(): boolean;
  strip(str: string): string;
}

declare const clc: CLC;

export = clc;
// export default clc;
