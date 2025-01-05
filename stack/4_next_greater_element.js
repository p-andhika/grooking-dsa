/*
Given an array, print the Next Greater Element (NGE) for every element.

The Next Greater Element for an element x is the first greater element on the right side of x in the array.

Elements for which no greater element exist, consider the next greater element as -1.

Example:
 Input: [4, 5, 2, 25]
 Output: [5, 25, 25, -1]
 Explanation: The NGE for 4 is 5, 5 is 25, 2 is 25, and there is no NGE for 25.

 Input: [13, 7, 6, 12]
 Output: [-1, 12, 12, -1]
*/

class Solution {
  nextLargerElement(arr) {
    let res = new Array(arr.length).fill(-1);
    const stack = [];

    for (let i = arr.length - 1; i >= 0; i--) {
      while (stack.length && stack[stack.length - 1] <= arr[i]) {
        stack.pop();
      }

      if (stack.length) {
        res[i] = stack[stack.length - 1];
      }

      stack.push(arr[i]);
    }

    return res;
  }
 }

const solution = new Solution();
console.log(solution.nextLargerElement([4, 5, 2, 25])); // [5, 25, 25, -1]
console.log(solution.nextLargerElement([13, 7, 6, 12])); // [-1, 12, 12, -1]
console.log(solution.nextLargerElement([1, 2, 3, 4, 5])); // [2, 3, 4, 5, -1
