import createGame from '../index.js';
import { randomNumber, randomNatural, toString } from '../utils.js';

const description = 'What number is missing in the progression?';

function createRound() {
  const SEQ_LENGTH = 10;
  const MAX_SHIFT = 10; // For the sake of simplicity.
  const shift = randomNatural(MAX_SHIFT);
  const step = randomNumber(2, 10); // Start from 2 to avoid dumb sequences and limit by 10 for simplicity.
  const sequence = new Array(SEQ_LENGTH)
    .fill(0)
    .map((_, index) => toString(index * step + shift));

  // Avoid hiding first and last element.
  const hiddenElementIndex = randomNumber(1, sequence.length - 1);
  const correctAnswer = sequence[hiddenElementIndex];
  sequence[hiddenElementIndex] = '..';
  const question = sequence.join(' ');
  return { question, correctAnswer };
}

export default () => {
  const brainProgression = createGame({
    description,
    createRound,
  });

  brainProgression();
};