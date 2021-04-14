import yaml from 'js-yaml';
import path from 'path';

const parseData = (filepath) => {
  let parse;
  if (path.extname(filepath) === '.json') {
    parse = JSON.parse;
  } else if (path.extname(filepath) === '.yml') {
    parse = yaml.load;
  } else if (path.extname(filepath) === '.yaml') {
    parse = yaml.load;
  }
  return parse;
};
export default parseData;
