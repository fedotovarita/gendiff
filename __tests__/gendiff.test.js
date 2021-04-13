/* eslint-disable no-undef */
import { fileURLToPath } from 'url';
import path, { dirname } from 'path';
import generateDiffs from '../src/index.js';
import expected from '../__fixtures__/expectedFlatFilesResult.js';

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

let getFixturePath;

beforeAll(() => {
  getFixturePath = (filename) => path.join(__dirname, '..', '__fixtures__', filename);
});

test('test for json files', () => {
  expect(generateDiffs(getFixturePath('./test1.json'), getFixturePath('./test2.json'))).toBe(expected);
});

test('test for yml files', () => {
  expect(generateDiffs(getFixturePath('./data1.yml'), getFixturePath('./data2.yml'))).toBe(expected);
});
