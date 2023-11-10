import parse from './parse.js';
import _ from 'lodash';

export default (filepath1, filepath2) => {
  const parseFile1 = parse(filepath1);
  const parseFile2 = parse(filepath2);

  const keys = _.uniq([...Object.keys(parseFile1), ...Object.keys(parseFile2)]).sort();

  const result = [];
  result.push('{');
  for (let key of keys) {
    const value1 = parseFile1.hasOwnProperty(key) && String(parseFile1[key]);
    const value2 = parseFile2.hasOwnProperty(key) && String(parseFile2[key]);

    if (value1 && value2) {
      if (value1 === value2) {
        result.push(`    ${key}: ${value1}`);
      } else {
        result.push(`  - ${key}: ${value1}`);
        result.push(`  + ${key}: ${value2}`);
      }
    }

    if (value1 && !value2) {
      result.push(`  - ${key}: ${value1}`);
    }

    if (!value1 && value2) {
      result.push(`  + ${key}: ${value2}`);
    }
  }
  result.push('}');

  console.log(result.join('\n'));
  console.log(keys);
};
