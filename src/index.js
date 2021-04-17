import genDiffs from './genDiff.js';
import getFormat from './formatters/index.js';
import parseData from './parsers.js';
import path from 'path';
import fs from 'fs';

const readFile = (filepath) => fs.readFileSync(path.resolve(process.cwd(), filepath));
const parsedFile = (filepath) => parseData(filepath);

const readyToRender = (filepath) => {
  const getExtname = parsedFile(filepath);
  const openedFile = readFile(filepath);
  return getExtname(openedFile);
};

const generateDiffs = (path1, path2, formatName) => {
  const object1 = readyToRender(path1);
  const object2 = readyToRender(path2);
  const comapareObjects = genDiffs(object1, object2, formatName);
  return getFormat(comapareObjects, formatName);
};
export default generateDiffs;
