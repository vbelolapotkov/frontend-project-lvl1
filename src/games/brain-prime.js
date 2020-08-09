import createGame, { randomNumber, isPrime } from '../index.js';

function getRules() {
  return 'Answer "yes" if given number is prime. Otherwise answer "no".';
}

function createRound() {
  const number = randomNumber();
  const correctAnswer = isPrime(number) ? 'yes' : 'no';
  const question = String(number);
  return { question, correctAnswer };
}

export default createGame({
  getRules,
  createRound,
});
