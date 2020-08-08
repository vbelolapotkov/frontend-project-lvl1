import { print } from './cli.js';
import greetUser from './games.js';

function printRules() {
  print('What is the result of the expression?');
}

export default function init() {
  greetUser();
  printRules();
}
