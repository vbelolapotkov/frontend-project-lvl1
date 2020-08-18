import createGame from '../index.js';
import { randomNatural, toString } from '../utils.js';

const description = 'Answer "yes" if the number is even, otherwise answer "no".';

function createRound() {
  const number = randomNatural();
  const correctAnswer = number % 2 === 0 ? 'yes' : 'no';
  const question = toString(number);
  return { question, correctAnswer };
}

export default () => {
  const brainEven = createGame({
    description,
    createRound,
  });

  brainEven();
};