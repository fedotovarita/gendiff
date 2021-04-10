import _ from 'lodash';

const genDiffs = (path1, path2) => {
    const firstData = JSON.parse(path1);
    const secondData = JSON.parse(path2);

    const keys = _.uniq([...Object.keys(firstData), ...Object.keys(secondData)]).sort();

    const result = keys.reduce((acc, key) => {
        if (firstData[key] === secondData[key]) {
            acc.push(`    ${key}: ${firstData[key]}`);
            return acc;
        }
        if (!firstData[key]) {
            acc.push(`  + ${key}: ${secondData[key]}`);
            return acc;
        }
        if (!secondData[key]) {
            acc.push(`  - ${key}: ${firstData[key]}`);
            return acc;
        }
        acc.push(`  - ${key}: ${firstData[key]}`);
        acc.push(`  + ${key}: ${secondData[key]}`);
        return acc;
    }, []);
    return result;
};
export default genDiffs;