#!/usr/bin/env node

import program from 'commander';
import generateDiffs from '../src/index.js';

program
  .description('Compares two configuration files and shows a difference.')
  .version('1.0.0', '-V, --version')
  .option('-f, --format [type]', 'output format')
  .arguments('<filepath1> <filepath2>')

  .action((filepath1, filepath2) => {
    console.log(generateDiffs(filepath1, filepath2));
  });

program.parse(process.argv);
