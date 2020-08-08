import createGame, { randomNumber, pickRandom, toString } from './index.js';

function getRules() {
  return 'What is the result of the expression?';
}

function calculateAnswer(a, b, operand) {
  switch (operand) {
    case '+':
      return a + b;
    case '-':
      return a - b;
    case '*':
      return a * b;
    default: throw new Error(`Unknown operand ${toString(operand)}`);
  }
}

function createRound() {
  const a = randomNumber();
  const b = randomNumber();
  const operand = pickRandom(['+', '-', '*']);
  const question = `${a} ${operand} ${b}`;
  const correctAnswer = String(calculateAnswer(a, b, operand));
  return { question, correctAnswer };
}

export default createGame({
  getRules,
  createRound,
});
