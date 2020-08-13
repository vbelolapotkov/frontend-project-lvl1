import createGame, { randomNumber, toString } from '../index.js';

const description = 'What number is missing in the progression?';

function createRound() {
  const SEQ_LENGTH = 10;
  const MAX_SHIFT = 10; // For the sake of simplicity.
  const STEP_RANGE = [2, 10]; // Start from 2 to avoid dumb sequences and limit by 10 for simplicity.
  const shift = randomNumber(MAX_SHIFT);
  const step = randomNumber(STEP_RANGE);
  const sequence = new Array(SEQ_LENGTH)
    .fill(0)
    .map((_, index) => toString(index * step + shift));

  // Avoid hiding first and last element.
  const hiddenIndex = randomNumber([1, sequence.length - 1]);
  const correctAnswer = sequence[hiddenIndex];
  sequence[hiddenIndex] = '..';
  const question = sequence.join(' ');
  return { question, correctAnswer };
}

export default createGame({
  description,
  createRound,
});
