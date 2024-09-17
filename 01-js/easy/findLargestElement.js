/*
  Write a function `findLargestElement` that takes an array of numbers and returns the largest element.
  Example:
  - Input: [3, 7, 2, 9, 1]
  - Output: 9
*/

function findLargestElement(numbers) {
    let ans = -9999999;
    for(let x of numbers){
        ans= max(ans,x);
    }
    return ans;

    
}

module.exports = findLargestElement;