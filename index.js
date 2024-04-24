/**
 * @param {number[]} arr
 */
function reverseArray(arr) {
  //생각 정리
  //가장 안쪽부터 배열을 정리해나가면 어떨까?
  //배열이 있는 경우에는 배열을 파고 들어간다
  //배열이 없어서 탐색이 끝난 경우 그 배열을 탈출하면서 reverse
  for (let i = 0; i < arr.length; i++) {
    if (Array.isArray(arr[i])) {
      arr[i] = reverseArray(arr[i]);
    }
  }

  return arr.reverse();
}

module.exports = reverseArray;
