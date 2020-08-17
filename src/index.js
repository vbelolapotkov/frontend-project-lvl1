import { requestInput, print } from './cli.js';
import { toString } from './utils.js';

export function greetUser() {
  print('Welcome to the Brain Games!');
  const name = requestInput('May I have your name? ');
  print(`Hello, ${name}!`);
  return name;
}

function playGame(createRound) {
  const ANSWERS_TO_WIN_QTY = 3;
  let correctAnswersCount = 0;
  while (correctAnswersCount < ANSWERS_TO_WIN_QTY) {
    const { question, correctAnswer } = createRound();

    print(`Question: ${question}`);
    const userAnswer = requestInput('Your answer: ');

    if (userAnswer !== correctAnswer) {
      print(
        `"${userAnswer}" is wrong answer ;(. Correct answer was "${correctAnswer}".`
      );

      // FAILED!
      return false;
    }

    print('Correct!');
    correctAnswersCount += 1;
  }

  // VICTORY!
  return true;
}

function validateGameConfig(config) {
  if (typeof config !== 'object') {
    throw new Error(`Game config must be an object. Received: ${toString(config)}`);
  }

  const { description, createRound } = config;

  if (typeof description !== 'string' && description.length ) {
    throw new Error(`description property is missing in game config. Received: ${description}`);
  }

  if (typeof createRound !== 'function') {
    throw new Error(`createRound method is missing in game config. Received: ${toString(createRound)}`);
  }
}

export * from './utils.js';

export default function createGame(gameConfig = {}) {
  validateGameConfig(gameConfig);
  return () => {
    const name = greetUser();
    print(gameConfig.description);
    const isWon = playGame(gameConfig.createRound);
    if (isWon) {
      print(`Congratulations, ${name}!`);
    } else {
      print(`Let's try again, ${name}!`);
    }
  }
}
