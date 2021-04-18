import plain from './plain.js';
import stylish from './stylish.js';
import json from './json.js';

const getFormat = (tree, formatName) => {
  if (formatName === 'plain') {
    return plain(tree);
  }
  if (formatName === 'stylish') {
    return stylish(tree);
  }
  if (formatName === 'json') {
    return json(tree);
  }
  return '';
};
export default getFormat;
