#!/usr/bin/env node
import { greetUser } from '../src/cli.js';

function printRules() {
  console.log('Answer "yes" if the number is even, otherwise answer "no".');
}

function launchGame() {
  return false;
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

