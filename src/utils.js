/**
 *  Generates random integer within range.
 *
 * @param {Number|Array} maxOrRange - Max number or range of numbers. Range is [1, maxOrRange] when Number is passed.
 *
 * @returns {Number}
 */
export function randomNumber(maxOrRange = 100) {
  const [rangeStart, rangeEnd] = Array.isArray(maxOrRange) ? maxOrRange : [1, maxOrRange];
  const min = Math.min(rangeStart, rangeEnd);
  const max = Math.max(rangeStart, rangeEnd);
  return Math.floor(min + Math.random() * (max - min));
}

export function pickRandom(array) {
  return array[randomNumber(array.length)];
}

export function toString(variable) {
  return typeof variable === 'object' ? JSON.stringify(variable, null, 2) : String(variable);
}
