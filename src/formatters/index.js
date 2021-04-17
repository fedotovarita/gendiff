import plain from './plain.js';
import stylish from './stylish.js';

const getFormat = (tree, formatName) => {
  if (formatName === 'plain') {
    return plain(tree);
  }
  if (formatName === 'stylish') {
    return stylish(tree);
  }
  return '';
};
export default getFormat;
