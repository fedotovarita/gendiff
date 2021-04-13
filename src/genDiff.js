import _ from 'lodash';
import parseData from './parsers.js';

const genDiffs = (file1, file2) => {
  const firstData = parseData(file1);
  const secondData = parseData(file2);

  const keys = _.uniq([...Object.keys(firstData), ...Object.keys(secondData)]).sort();

  const result = keys.reduce((acc, key) => {
    if (firstData[key] === secondData[key]) {
      acc.push(`    ${key}: ${firstData[key]}`);
      return acc;
    }
    if (!(secondData[key])) {
      acc.push(`  - ${key}: ${firstData[key]}`);
      return acc;
    }
    if (!(firstData[key])) {
      acc.push(`  + ${key}: ${secondData[key]}`);
      return acc;
    }

    acc.push(`  - ${key}: ${firstData[key]}`);
    acc.push(`  + ${key}: ${secondData[key]}`);
    return acc;
  }, []);
  return result;
};
export default genDiffs;
