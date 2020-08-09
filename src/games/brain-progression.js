import createGame, { randomNumber } from '../index.js';

function getRules() {
  return 'What number is missing in the progression?';
}

function createRound() {
  const SEQ_LENGTH = 10;
  const shift = randomNumber(11);
  const step = randomNumber([2, 11]);
  const sequence = new Array(SEQ_LENGTH).fill(0).map((_, index) =>
    String(index * step + shift)
  );

  // Avoid hiding first and last element.
  const hiddenIndex = randomNumber([1, sequence.length - 1]);
  const correctAnswer = sequence[hiddenIndex];
  sequence[hiddenIndex] = '..';
  const question = sequence.join(' ');
  return { question, correctAnswer };
}

export default createGame({
  getRules,
  createRound,
});
