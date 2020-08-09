import createGame from '../index.js';

function getRules() {
  return 'What number is missing in the progression?';
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
