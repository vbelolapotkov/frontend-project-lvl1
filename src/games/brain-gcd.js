import createGame from '../index.js';
import { randomNatural, toString } from '../utils.js';

const description = 'Find the greatest common divisor of given numbers.';

/**
 * Calculates greatest common divisor.
 *
 * @param {Number} a
 * @param {Number} b
 *
 * @returns {Number}
 */
//
function gcd(a, b) {
  // Make sure we deal with positive numbers.
  const [x, y] = [a, b].map(Math.abs);
  let [greater, currentGcd] = x > y ? [x, y] : [y, x];

  // Use Euclidean algorithm to calculate GCD https://en.wikipedia.org/wiki/Euclidean_algorithm.
  while (currentGcd > 0) {
    const nextGcd = greater % currentGcd;
    if (nextGcd === 0) {
      break;
    }
    greater = currentGcd;
    currentGcd = nextGcd;
  }

  return currentGcd;
}

function createRound() {
  const a = randomNatural();
  const b = randomNatural();
  const question = `${a} ${b}`;
  const correctAnswer = toString(gcd(a, b));
  return { question, correctAnswer };
}

export default () => {
  const brainGcd = createGame({
    description,
    createRound,
  });

  brainGcd();
};
