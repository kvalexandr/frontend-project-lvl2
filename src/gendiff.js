import parse from './parse.js';

export default (filepath1, filepath2) => {
  const parseFile1 = parse(filepath1);
  const parseFile2 = parse(filepath2);

  console.log(parseFile1, parseFile2);
};
