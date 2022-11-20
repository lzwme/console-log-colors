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

declare const color: {
  (str: unknown, type: ColorList): string;
  list: Record<ColorList, [string, string]>;
} & Record<ColorList, StyleFN>;

declare const log: Record<ColorList, (...args) => void> & {
  (str: string | number | symbol, type: ColorList): void;
};

declare function isSupported(): boolean;
declare function enable(): boolean;
declare function disable(): boolean;
declare function strip(str: string): string;

export = {
  ...color,
  color,
  log,
  isSupported,
  enable,
  disable,
  strip,
};
