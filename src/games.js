import { print, requestInput } from './cli.js';

export default function greetUser() {
  print('Welcome to the Brain Games!');
  const name = requestInput('May I have your name? ');
  print(`Hello, ${name}!`);
  return name;
}
