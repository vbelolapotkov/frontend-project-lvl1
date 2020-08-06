/* eslint-disable no-console */
import readlineSync from 'readline-sync';

export function requestInput(question = '') {
  return readlineSync.question(question);
}

export function print(msg) {
  console.log(msg);
}
