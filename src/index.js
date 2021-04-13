import genDiffs from './genDiff.js';

const generateDiffs = (path1, path2) => {
  const result = genDiffs(path1, path2);
  return `{\n${result.join('\n')}\n}`;
};

export default generateDiffs;
