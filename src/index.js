import fs from 'fs';
import path from 'path';
import genDiffs from './genDiff.js';

const readFile = (filepath) => fs.readFileSync(path.resolve(process.cwd(), filepath));

const generateDiffs = (path1, path2) => {
  const firstPath = readFile(path1);
  const secondPath = readFile(path2);
  const result = genDiffs(firstPath, secondPath);
  return `{\n${result.join('\n')}\n}`;
};

export default generateDiffs;
