import _ from 'lodash';

const genDiffs = (obj1, obj2) => {
  const keys = _.uniq([...Object.keys(obj1), ...Object.keys(obj2)]);
  const sortedKeys = _.sortBy(keys);
  const result = sortedKeys.map((key) => {
    if (_.isPlainObject(obj1[key]) && _.isPlainObject(obj2[key])) {
      const children = genDiffs(obj1[key], obj2[key]);
      return {
        status: 'nested', key, value: obj1[key], children,
      };
    }
    if (!_.has(obj1, key) && _.has(obj2, key)) {
      return { status: 'added', key, value: obj2[key] };
    }
    if (_.has(obj1, key) && !_.has(obj2, key)) {
      return { status: 'deleted', key, value: obj1[key] };
    }
    if (obj1[key] !== obj2[key]) {
      return {
        status: 'updated', key, value: obj2[key], oldValue: obj1[key],
      };
    }
    return { status: 'unchanged', key, value: obj1[key] };
  });
  return result;
};
export default genDiffs;
