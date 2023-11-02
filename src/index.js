import { program } from 'commander';

const gendiff = () => {
  program.description('Compares two configuration files and shows a difference.').version('1.0.0');

  program.parse();
};

export default gendiff;
