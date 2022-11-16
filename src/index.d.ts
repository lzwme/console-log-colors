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

export const color: {
  [key in ColorList]: (str: any) => string;
} & {
  list: ColorList[];
};

interface Log extends Record<ColorList, (...args) => void> {
  (str: string, type: ColorList): void;
}
export const log: Log;

export const colorList: ColorList[];
export function isSupported(): boolean;
export function enable(): boolean;
export function disable(): boolean;
export function strip(str: string): string;

export = {
  ...color,
  color,
  log,
  isSupported,
  enable,
  disable,
  strip,
};
