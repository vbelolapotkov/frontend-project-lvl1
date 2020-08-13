import createGame, { randomNumber, pickRandom, toString } from '../index.js';

const description = 'What is the result of the expression?';

function calculateAnswer(a, b, operation) {
  switch (operation) {
    case '+':
      return a + b;
    case '-':
      return a - b;
    case '*':
      return a * b;
    default: throw new Error(`Unknown operation ${toString(operation)}`);
  }
}

function createRound() {
  const a = randomNumber();
  const b = randomNumber();
  const operation = pickRandom(['+', '-', '*']);
  const question = `${a} ${operation} ${b}`;
  const correctAnswer = String(calculateAnswer(a, b, operation));
  return { question, correctAnswer };
}

export default createGame({
  description,
  createRound,
});
