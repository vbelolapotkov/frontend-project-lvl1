import createGame from '../index.js';
import { randomNatural, toString } from '../utils.js';

const description = 'Answer "yes" if given number is prime. Otherwise answer "no".';

/**
 * Checks if given number is prime.
 *
 * @param {Number} number
 *
 * @returns {Boolean} True if number is prime
 */
function isPrime(number) {
  if (!Number.isInteger(number)) {
    throw new Error(`Integer is expected, received: ${toString(number)}`);
  }

  if (number < 2) {
    return false;
  }

  for (let divisor = 2; divisor <= Math.sqrt(number); divisor += 1) {
    if (number % divisor === 0) {
      return false;
    }
  }

  return true;
}

function createRound() {
  const number = randomNatural();
  const correctAnswer = isPrime(number) ? 'yes' : 'no';
  const question = toString(number);
  return { question, correctAnswer };
}

export default () => {
  const brainPrime = createGame({
    description,
    createRound,
  });

  brainPrime();
};