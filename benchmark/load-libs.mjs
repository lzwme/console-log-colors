import chalk from 'chalk';
import clc from '../src/esm.js';
import ansiColors from 'ansi-colors';
import * as colorette from 'colorette';
import cliColor from 'cli-color';
import kleur from 'kleur';
import picocolors from 'picocolors';

cliColor.gray = cliColor.white;
cliColor.dim = cliColor.strike;
cliColor.hidden = cliColor.dim;
cliColor.reset = cliColor.dim;
cliColor.strikethrough = cliColor.strike;

export const libs = {
  'console-log-colors': clc,
  'ansi-colors': ansiColors,
  'cli-color': cliColor,
  picocolors,
  colorette,
  chalk,
  kleur,
};
