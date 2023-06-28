import chalk from 'chalk';
import clc from '../src/esm.mjs';
import ansiColors from 'ansi-colors';
import * as colorette from 'colorette';
import cliColor from 'cli-color';
import kleur from 'kleur';
import picocolors from 'picocolors';
import * as yoctocolors from 'yoctocolors';
import * as kolorist from 'kolorist';

cliColor.gray = cliColor.white;
cliColor.dim = cliColor.strike;
cliColor.hidden = cliColor.dim;
cliColor.reset = cliColor.dim;
cliColor.strikethrough = cliColor.strike;

export const libs = {
  clc,
  'ansi-colors': ansiColors,
  'cli-color': cliColor,
  picocolors,
  colorette,
  chalk,
  kleur,
  yoctocolors,
  kolorist,
};
