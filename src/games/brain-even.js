import { randomNumber, toString } from '../utils.js';

const description = 'Answer "yes" if the number is even, otherwise answer "no".';

function createRound() {
  const number = randomNumber();
  const correctAnswer = number % 2 === 0 ? 'yes' : 'no';
  const question = toString(number);
  return { question, correctAnswer };
}

export default {
  description,
  createRound,
};
