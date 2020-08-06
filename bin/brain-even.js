#!/usr/bin/env node
import { requestInput, print } from '../src/cli.js';
import greetUser from '../src/games.js';

function printRules() {
  print('Answer "yes" if the number is even, otherwise answer "no".');
}

function generateNumber(MAX_NUMBER = 100) {
  return Math.floor(Math.random() *  MAX_NUMBER);
}

function getCorrectAnswer(number) {
  return number % 2 === 0 ? 'yes' : 'no';
}

function askQuestion(number) {
  print(`Question: ${number}`);
  return requestInput('Your answer: ');
}

function printWrongAnswer(userAnswer, correctAnswer) {
  print(`"${userAnswer}" is wrong answer ;(. Correct answer was "${correctAnswer}".`);
}

function printCorrectAnswer() {
  print('Correct!');
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
  print(`Congratulations, ${name}!`);
}

function letsTryAgain(name = '') {
  print(`Let's try again, ${name}!`);
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

