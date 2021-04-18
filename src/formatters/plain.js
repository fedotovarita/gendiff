import _ from 'lodash';

const renderValue = (obj) => {
  if (_.isString(obj)) {
    return `'${obj}'`;
  }
  if (_.isObject(obj)) {
    return '[complex value]';
  }
  return obj;
};

const getFullPath = (acc, prop) => [...acc, prop].join('.');

const render = {
  added: (element, iter, path) => `Property '${getFullPath(path, element.key)}' was added with value: ${renderValue(element.value)}`,
  deleted: (element, iter, path) => `Property '${getFullPath(path, element.key)}' was removed`,
  updated: (element, iter, path) => `Property '${getFullPath(path, element.key)}' was updated. From ${renderValue(element.oldValue)} to ${renderValue(element.value)}`,
  unchanged: () => [],
  nested: (element, iter, path) => iter(element.children, [...path, element.key]),
};

const plain = (tree) => {
  const iter = (node, path) => {
    const dataToString = node.flatMap((elem) => render[elem.status](elem, iter, path));
    return dataToString.join('\n');
  };
  return iter(tree, []);
};

export default plain;
