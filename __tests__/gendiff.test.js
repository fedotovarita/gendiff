/* eslint-disable no-undef */
import { fileURLToPath } from 'url';
import path, { dirname } from 'path';
import generateDiffs from '../src/index.js';
import expected from '../__fixtures__/expectedFlatJsonTest.js';

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

let getFixturePath;

beforeAll(() => {
  getFixturePath = (filename) => path.join(__dirname, '..', '__fixtures__', filename);
});

test('test1', () => {
  expect(generateDiffs(getFixturePath('./test1.json'), getFixturePath('./test2.json'))).toBe(expected);
});
