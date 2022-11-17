type ColorList =
  | "reset"
  | "bold"
  | "dim"
  | "italic"
  | "underline"
  | "inverse"
  | "hidden"
  | "strikethrough"
  | "black"
  | "red"
  | "green"
  | "yellow"
  | "blue"
  | "magenta"
  | "cyan"
  | "white"
  | "gray"
  | "grey"
  | "redBright"
  | "greenBright"
  | "yellowBright"
  | "blueBright"
  | "magentaBright"
  | "cyanBright"
  | "whiteBright"
  | "bgBlack"
  | "bgRed"
  | "bgGreen"
  | "bgYellow"
  | "bgBlue"
  | "bgMagenta"
  | "bgCyan"
  | "bgWhite"
  | "blackBG"
  | "redBG"
  | "greenBG"
  | "yellowBG"
  | "blueBG"
  | "magentaBG"
  | "cyanBG"
  | "whiteBG"
  | "bgBlackBright"
  | "bgRedBright"
  | "bgGreenBright"
  | "bgYellowBright"
  | "bgBlueBright"
  | "bgMagentaBright"
  | "bgCyanBright"
  | "bgWhiteBright";

interface StyleFN extends Record<ColorList, StyleFN> {
  (s: string): string;
}

export const color: {
  (str: string, type: ColorList): string;
  list: ColorList[];
} & Record<ColorList, StyleFN>;

export const log: Record<ColorList, (...args) => void> & {
  (str: string, type: ColorList): void;
};

export const colorList: ColorList[];
export function isSupported(): boolean;
export function enable(): boolean;
export function disable(): boolean;
export function strip(str: string): string;

export = {
  ...color,
  color,
  log,
  colorList,
  isSupported,
  enable,
  disable,
  strip,
};
