import { requestInput, print } from './cli.js';
import greetUser from './games.js';

function printRules() {
  print('What is the result of the expression?');
}

function generateNumber(MAX_NUMBER = 100) {
  return Math.floor(Math.random() * MAX_NUMBER);
}

function generateNumbers() {
  return [generateNumber(), generateNumber()];
}

function getOperand() {
  const operands = ['+', '-', '*'];
  return operands[generateNumber(operands.length)];
}

function getCorrectAnswer(a, b, operand) {
  switch (operand) {
    case '+':
      return String(a + b);
    case '-':
      return String(a - b);
    case '*':
      return String(a * b);
    default: {
      const operandStr =
        typeof operand === 'object'
          ? JSON.stringify(operand, null, 2)
          : String(operand);
      throw new Error(`Unknown operand ${operandStr}`);
    }
  }
}

function askQuestion(a, b, operand) {
  print(`Question: ${a} ${operand} ${b}`);
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

function launchGame() {
  const ANSWERS_TO_WIN_QTY = 3;
  let correctAnswers = 0;
  while (correctAnswers < ANSWERS_TO_WIN_QTY) {
    const [a, b] = generateNumbers();
    const operand = getOperand();
    const correctAnswer = getCorrectAnswer(a, b, operand);
    const userAnswer = askQuestion(a, b, operand);
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

function congratulateUser(name = '') {
  print(`Congratulations, ${name}!`);
}

function letsTryAgain(name = '') {
  print(`Let's try again, ${name}!`);
}

export default function init() {
  const name = greetUser();
  printRules();
  const isWon = launchGame();
  if (isWon) {
    congratulateUser(name);
  } else {
    letsTryAgain(name);
  }
}
