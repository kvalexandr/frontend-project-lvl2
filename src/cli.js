import { program } from 'commander';

import genDiff from './gendiff.js';

export default () => {
  program
    .description('Compares two configuration files and shows a difference.')
    .version('1.0.0')
    .option('-f, --format <type>', 'output format')
    .arguments('<filepath1> <filepath2>')
    .action((filepath1, filepath2) => {
      genDiff(filepath1, filepath2);
    });

  program.parse();
};
