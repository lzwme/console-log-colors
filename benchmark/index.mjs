"use strict";
import benchmark from "benchmark";
import { libs } from "./load-libs.mjs";

// const names = Object.keys(libs['console-log-colors'].list);
const names = [
  "reset",
  "bold",
  "dim",
  "italic",
  "underline",
  "inverse",
  "hidden",
  "strikethrough",
  "black",
  "red",
  "green",
  "yellow",
  "blue",
  "magenta",
  "cyan",
  "white",
  "gray",
  "bgBlack",
  "bgRed",
  "bgGreen",
  "bgYellow",
  "bgBlue",
  "bgMagenta",
  "bgCyan",
];

const cycle = (e, newline) => {
  process.stdout.write("\u001b[G");
  process.stdout.write(`  ${e.target}` + (newline ? "\n" : ""));
};

function bench(desc, suiteFns, ignoreLibs = []) {
  console.log(`\n# ${desc}`);
  const suite = new benchmark.Suite();
  const helper = {
    run: suite.run.bind(suite),
    add(key, fn) {
      suite.add(libs["console-log-colors"].cyanBright(key), {
        onCycle: (e) => cycle(e),
        onComplete: (e) => cycle(e, true),
        onError: (e) => console.error(`[ERROR][${desc}][${key}]`, e.message || e),
        fn,
      });
      return this;
    },
  };

  Object.entries(libs).forEach(([name, lib]) => {
    if (!ignoreLibs.includes(name)) suiteFns.forEach((fn) => helper.add(name, () => fn(lib)));
  });

  return helper;
}

bench("All Colors", [(lib) => names.forEach((name) => lib[name]("foot"))]).run();

bench("Chained colors", [(lib) => names.forEach((name) => lib[name].bold.underline.italic("foo"))], ["colorette", "kleur", "picocolors"])
  .add("kleur", () => names.forEach((name) => libs.kleur[name]().bold().underline().italic("foo")))
  .run();

bench("Nested colors", [(lib) => fixture(lib)]).run();

function fixture(lib) {
  return lib.red(
    `a red ${lib.white("red")} red ${lib.red("red")} red ${lib.gray("red")} red ${lib.red("red")} red ${lib.red("red")} red ${lib.red(
      "red"
    )} red ${lib.red("red")} red ${lib.red("red")} red ${lib.blue("red")} red ${lib.red("red")} red ${lib.red("red")} red ${lib.red(
      "red"
    )} red ${lib.red("red")}red ${lib.red("red")} red ${lib.red("red")} red ${lib.red("red")} red ${lib.red("red")} red ${lib.red(
      "red"
    )} red ${lib.red("red")} red ${lib.red("red")} red ${lib.red("red")} red ${lib.red("red")} red ${lib.red("red")} red ${lib.red(
      "red"
    )} red ${lib.red("red")} red ${lib.red("red")}red ${lib.green("red")} red ${lib.red("red")} red ${lib.red("red")} red ${lib.red(
      "red"
    )} red ${lib.red("red")} red ${lib.red("red")} red ${lib.red("red")} red ${lib.red("red")} red ${lib.red("red")} red ${lib.red(
      "red"
    )} red ${lib.red("red")} red ${lib.magenta("red")} red ${lib.red("red")}red ${lib.red("red")} red ${lib.cyan("red")} red ${lib.red(
      "red"
    )} red ${lib.red("red")} red ${lib.yellow("red")} red ${lib.red("red")} red ${lib.red("red")} red ${lib.red("red")} red ${lib.red(
      "red"
    )} red ${lib.red("red")} red ${lib.red("red")} red ${lib.red("red")} message`
  );
}
