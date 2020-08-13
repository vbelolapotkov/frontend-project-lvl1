import createGame, { randomNumber, gcd } from '../index.js';

const description = 'Find the greatest common divisor of given numbers.';

function createRound() {
  const a = randomNumber();
  const b = randomNumber();
  const question = `${a} ${b}`;
  const correctAnswer = String(gcd(a, b));
  return { question, correctAnswer };
}

export default createGame({
  description,
  createRound,
});
