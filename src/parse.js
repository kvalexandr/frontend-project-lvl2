import { cwd } from 'node:process';
import { readFileSync } from 'node:fs';
import path from 'node:path';

const getData = (filepath) => {
  const normalizePath = filepath.startsWith('/')
    ? path.resolve(filepath)
    : path.resolve(cwd(), filepath);

  return readFileSync(normalizePath, { encoding: 'utf8' });
};

const parse = (filepath) => {
  const ext = path.extname(filepath);
  const data = getData(filepath);

  if (ext === '.json') {
    return JSON.parse(data);
  }
  return data;
};

export default parse;
