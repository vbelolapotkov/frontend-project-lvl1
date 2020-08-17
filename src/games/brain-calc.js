import { randomNatural, pickRandom, toString } from '../utils.js';

const description = 'What is the result of the expression?';

function calculateAnswer(a, b, operation) {
  switch (operation) {
    case '+':
      return a + b;
    case '-':
      return a - b;
    case '*':
      return a * b;
    default:
      throw new Error(`Unknown operation ${toString(operation)}`);
  }
}

function createRound() {
  const a = randomNatural();
  const b = randomNatural();
  const operation = pickRandom(['+', '-', '*']);
  const question = `${a} ${operation} ${b}`;
  const correctAnswer = toString(calculateAnswer(a, b, operation));
  return { question, correctAnswer };
}

export default {
  description,
  createRound,
};
