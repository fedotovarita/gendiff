#!/usr/bin/env node

import { Command } from 'commander/esm.mjs';
const program = new Command();

program
  .description('Compares two configuration files and shows a difference.')
  .version('1.0.0', '-V, --version')
  .option('-f, --format [type]', 'output format')
  .arguments('<filepath1> <filepath2>')

  .action(() => {
    console.log('Usage: gendiff <filepath1> <filepath2>');
  });
program.parse(process.argv);
