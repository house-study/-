/**
 * @param {number[]} arr
 */
function reverseArray(arr) {
  const reversed = [];

  for (let i = 0; i < arr.length; i++){
    if(Array.isArray(arr[i])){
      reversed.push(reverseArray(arr[i]));
    }
    else{
      reversed.push(arr[i]);
    } 
  }
  return reversed.reverse();
}

module.exports = reverseArray;