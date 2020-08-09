import createGame, { randomNumber } from '../index.js';

function getRules() {
  return 'Answer "yes" if the number is even, otherwise answer "no".';
}

function createRound() {
  const number = randomNumber();
  const correctAnswer = number % 2 === 0 ? 'yes' : 'no';
  const question = String(number);
  return { question, correctAnswer };
}

export default createGame({
  getRules,
  createRound,
});
