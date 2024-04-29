/**
 * @param {number[]} arr
 */
function reverseArray(arr) {
  // 여기에 코드를 작성하세요.
  const answer =[];

  for(let i =0; i< arr.length; i++){
    if(Array.isArray(arr[i])){
      answer.push(reverseArray(arr[i]));
    }
    
    else{
      answer.push(arr[i]);
    }
  }

  return answer.reverse();
}

module.exports = reverseArray;