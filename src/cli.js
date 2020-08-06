import readlineSync from 'readline-sync';

export function requestInput(question = '') {
  return readlineSync.question(question);
}

export function greetUser() {
  const name = requestInput('May I have your name? ');
  console.log(`Hello, ${name}!`);
}
