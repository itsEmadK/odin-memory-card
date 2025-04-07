/**
 *
 * @param {any[]} arr
 * @returns {any[]} The new shuffled array
 */
export function shuffleArray(arr) {
  return arr.slice().sort(() => {
    if (Math.random() < 0.5) {
      return -1;
    } else {
      return 1;
    }
  });
}
