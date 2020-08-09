import createGame from '../index.js';

function getRules() {
  return 'Find the greatest common divisor of given numbers.';
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