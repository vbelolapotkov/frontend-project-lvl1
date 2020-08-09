import createGame from '../index.js';

function getRules() {
  return 'Answer "yes" if given number is prime. Otherwise answer "no".';
}

function createRound() {
  const question = '';
  const correctAnswer = '';
  return { question, correctAnswer };
}

export default createGame({
  getRules,
  createRound,
});
