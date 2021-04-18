import _ from 'lodash';

const indent = (depth) => '  '.repeat((depth * 2) - 2);
const renderOfObjectValue = (obj, depth) => {
  if (!_.isObject(obj)) {
    return obj;
  }
  const objectToString = Object.entries(obj, depth)
    .map(([key, value]) => `${indent(depth + 1)}    ${key}: ${renderOfObjectValue(value, depth + 1)}`);
  return `{\n${objectToString.join('\n')}\n${indent(depth + 1)}}`;
};

const render = {
  nested: (element, depth, iter) => `${indent(depth)}    ${element.key}: ${iter(element.children, depth + 1)}`,
  unchanged: (element, depth) => `${indent(depth)}    ${element.key}: ${renderOfObjectValue(element.value, depth)}`,
  deleted: (element, depth) => `${indent(depth)}  - ${element.key}: ${renderOfObjectValue(element.value, depth)}`,
  added: (element, depth) => `${indent(depth)}  + ${element.key}: ${renderOfObjectValue(element.value, depth)}`,
  updated: (element, depth) => [
    `${indent(depth)}  - ${element.key}: ${renderOfObjectValue(element.oldValue, depth)}`,
    `${indent(depth)}  + ${element.key}: ${renderOfObjectValue(element.value, depth)}`,
  ],
};

const stylish = (tree) => {
  const iter = (node, depth) => {
    const dataToString = node.flatMap((elem) => render[elem.status](elem, depth, iter));
    return `{\n${dataToString.join('\n')}\n${indent(depth)}}`;
  };
  return iter(tree, 1);
};

export default stylish;
