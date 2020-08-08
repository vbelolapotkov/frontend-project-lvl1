export function randomNumber(MAX_NUMBER = 100) {
  return Math.floor(Math.random() * MAX_NUMBER);
}

export function pickRandom(array) {
  return array[randomNumber(array.length)];
}

export function toString(variable) {
  return typeof variable === 'object' ? JSON.stringify(variable, null, 2) : String(variable);
}