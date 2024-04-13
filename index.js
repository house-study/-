/**
 * @param {number[]} arr
 */
function reverseArray(arr) {
  const reversed = [];

  for (let i = 0; i < arr.length; i++){
    reversed.push(arr[i]);
  }

  return reversed.reverse();
}

module.exports = reverseArray;