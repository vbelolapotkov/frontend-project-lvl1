import { requestInput, print } from './cli.js';
import { toString } from './utils.js';
import greetUser from './games.js';

function printRules(gameConfig) {
  print(gameConfig.getRules());
}

function congratulateUser(name = '') {
  print(`Congratulations, ${name}!`);
}

function letsTryAgain(name = '') {
  print(`Let's try again, ${name}!`);
}

function askQuestion(question = '') {
  print(`Question: ${question}`);
  return requestInput('Your answer: ');
}

function printWrongAnswer(userAnswer, correctAnswer) {
  print(
    `"${userAnswer}" is wrong answer ;(. Correct answer was "${correctAnswer}".`
  );
}

function printCorrectAnswer() {
  print('Correct!');
}

function launchGame(gameConfig) {
  const ANSWERS_TO_WIN_QTY = 3;
  let correctAnswers = 0;
  while (correctAnswers < ANSWERS_TO_WIN_QTY) {
    const { question, correctAnswer } = gameConfig.createRound();
    const userAnswer = askQuestion(question);
    if (userAnswer !== correctAnswer) {
      printWrongAnswer(userAnswer, correctAnswer);

      // FAILED!
      return false;
    }

    printCorrectAnswer();
    correctAnswers += 1;
  }

  // VICTORY!
  return true;
}

function validateGameConfig(config) {
  if (typeof config !== 'object') {
    throw new Error(`Game config must be an object. Received: ${toString(config)}`);
  }

  const { getRules, createRound } = config;

  if (typeof getRules !== 'function') {
    throw new Error(`getRules method is missing in game config. Received: ${toString(getRules)}`);
  }

  if (typeof createRound !== 'function') {
    throw new Error(`createRound method is missing in game config. Received: ${toString(getRules)}`);
  }
}

export * from './utils.js';

export default function createGame(gameConfig = {}) {
  validateGameConfig(gameConfig);
  return () => {
    const name = greetUser();
    printRules(gameConfig);
    const isWon = launchGame(gameConfig);
    if (isWon) {
      congratulateUser(name);
    } else {
      letsTryAgain(name);
    }
  }
}
