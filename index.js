/**
 * @param {number[]} arr
 */
function reverseArray(arr) {
  let resultArray = [];
  for(let i=0; i< arr.length; i++) {
    if(Array.isArray(arr[i])){
      resultArray.push(reverseArray(arr[i]));
    }
    else{
      resultArray.push(arr[i]);
    }
  }
  return resultArray.reverse();
}
module.exports = reverseArray;
