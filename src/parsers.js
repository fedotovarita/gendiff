import yaml from 'js-yaml';
import path from 'path';
import fs from 'fs';

const parseData = (filepath) => {
  const data = fs.readFileSync(path.resolve(process.cwd(), filepath));
  let parse;
  if (path.extname(filepath) === '.json') {
    parse = JSON.parse;
  } else if (path.extname(filepath) === '.yml') {
    parse = yaml.load;
  } else if (path.extname(filepath) === '.yaml') {
    parse = yaml.load;
  }
  return parse(data);
};
export default parseData;
