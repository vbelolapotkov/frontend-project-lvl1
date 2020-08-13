import createGame, { randomNumber, isPrime, toString } from '../index.js';

const description = 'Answer "yes" if given number is prime. Otherwise answer "no".';

function createRound() {
  const number = randomNumber();
  const correctAnswer = isPrime(number) ? 'yes' : 'no';
  const question = toString(number);
  return { question, correctAnswer };
}

export default createGame({
  description,
  createRound,
});
