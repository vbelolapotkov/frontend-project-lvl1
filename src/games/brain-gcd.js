import { randomNumber, gcd, toString } from '../utils.js';

const description = 'Find the greatest common divisor of given numbers.';

function createRound() {
  const a = randomNumber();
  const b = randomNumber();
  const question = `${a} ${b}`;
  const correctAnswer = toString(gcd(a, b));
  return { question, correctAnswer };
}

export default {
  description,
  createRound,
};
