import genDiff from './genDiff.js';
import * as fs from 'fs';

const readFile = (filepath) => fs.readFileSync(filepath, 'utf-8');

const generateDiffs = (path1, path2) => { 
    const result = genDiff(readFile(path1), readFile(path2));
    return `{\n${result.join('\n')}\n}`;
}

export default generateDiffs;