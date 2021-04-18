import yaml from 'js-yaml';
import path from 'path';

const parseData = (filepath) => {
  if (path.extname(filepath) === '.json') {
    return JSON.parse;
  }
  if (path.extname(filepath) === '.yml') {
    return yaml.load;
  }
  if (path.extname(filepath) === '.yaml') {
    return yaml.load;
  }
  return '';
};
export default parseData;
