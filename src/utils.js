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

/**
 * Calculates greatest common divisor.
 *
 * @param {Number} a
 * @param {Number} b
 *
 * @returns {Number}
 */
//
export function gcd(a, b) {
  // Make sure we deal with positive numbers.
  const [x, y] = [a, b].map(Math.abs);
  let [greater, currentGcd] = x > y ? [x, y] : [y, x];

  // Use Euclidean algorithm to calculate GCD https://en.wikipedia.org/wiki/Euclidean_algorithm.
  while (currentGcd > 0) {
    const nextGcd = greater % currentGcd;
    if (nextGcd === 0) {
      break;
    }
    greater = currentGcd;
    currentGcd = nextGcd;
  }

  return currentGcd;
}
