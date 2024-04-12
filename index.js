/**
 * @param {number[]} arr
 */
function reverseArray(arr) {
  // 여기에 코드를 작성하세요.
  return arr
    .map((item) => (Array.isArray(item) ? reverseArray(item) : item))
    .reverse();
}

module.exports = reverseArray;
