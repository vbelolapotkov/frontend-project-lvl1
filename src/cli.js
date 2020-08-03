import readlineSync from 'readline-sync';

export function greet(name) {
  console.log(`Hello, ${name}!`);
}

export function askName() {
  return readlineSync.question('May I have your name? ');
}
