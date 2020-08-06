#!/usr/bin/env node
import { greetUser, requestInput } from '../src/cli.js';

function printRules() {
  console.log('Answer "yes" if the number is even, otherwise answer "no".');
}

function generateNumber(MAX_NUMBER = 100) {
  return Math.floor(Math.random() *  MAX_NUMBER);
}

function getCorrectAnswer(number) {
  return number % 2 === 0 ? 'yes' : 'no';
}

function askQuestion(number) {
  console.log(`Question: ${number}`);
  return requestInput('Your answer: ');
}

function printWrongAnswer(userAnswer, correctAnswer) {
  console.log(`"${userAnswer}" is wrong answer ;(. Correct answer was "${correctAnswer}".`);
}

function printCorrectAnswer() {
  console.log('Correct!');
}

function launchGame() {
  const ANSWERS_TO_WIN_QTY = 3;
  let correctAnswers = 0;
  while ( correctAnswers < ANSWERS_TO_WIN_QTY ) {
    const number = generateNumber();
    const correctAnswer = getCorrectAnswer(number);
    const userAnswer = askQuestion(number);
    if ( userAnswer !== correctAnswer ) {
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
  console.log(`Congratulations, ${name}!`);
}

function letsTryAgain(name = '') {
  console.log(`Let's try again, ${name}!`);
}


function init() {
  const name = greetUser();
  printRules();
  const isWon = launchGame();
  if ( isWon ) {
    congratulateUser(name);
  } else {
    letsTryAgain(name);
  }
}

init();

