#!/usr/bin/env node
import generateDiffs from '../src/index.js';
import * as path from 'path';
import * as process from 'process';
import { Command } from 'commander/esm.mjs';
const program = new Command();

const absolutePath = (filepath) => path.resolve(process.cwd(), filepath);


program
  .description('Compares two configuration files and shows a difference.')
  .version('1.0.0', '-V, --version')
  .option('-f, --format [type]', 'output format')
  .arguments('<filepath1> <filepath2>')

  .action((filepath1, filepath2) => {
    console.log(generateDiffs(absolutePath(filepath1), absolutePath(filepath2)));
  });
program.parse(process.argv);