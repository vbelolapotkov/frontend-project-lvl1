/**
 *  Generates random integer within range.
 *
 * @param {Number} min Min number, including max itself.
 * @param {Number} max Max number, NOT including max itself.
 *
 * @returns {Number}
 */
export function randomNumber(min = 1, max = 100) {
  return Math.floor(min + Math.random() * (max - min));
}

/**
 *  Generates random natural number.
 *
 * @param {Number} max Max natural number, NOT including max itself.
 *
 * @returns {Number}
 */
export function randomNatural(max = 100) {
  return randomNumber(1, max);
}

export function pickRandom(array) {
  return array[randomNumber(0, array.length)];
}

export function toString(variable) {
  return typeof variable === 'object' ? JSON.stringify(variable, null, 2) : String(variable);
}
