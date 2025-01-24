/*
Given an array of integers, identify the highest value that appears only once in the array. If no such number exists, return -1.

Example

Example 1:

Input: [5, 7, 3, 7, 5, 8]
Expected Output: 8
Justification: The number 8 is the highest value that appears only once in the array.
Example 2:

Input: [1, 2, 3, 2, 1, 4, 4]
Expected Output: 3
Justification: The number 3 is the highest value that appears only once in the array.
Example 3:

Input: [9, 9, 8, 8, 7, 7]
Expected Output: -1
Justification: There is no number in the array that appears only once.
*/

class Solution {
  largestUniqueNumber(A) {
    let maxUnique = -1;

    const freq = {};

    for (const n of A) {
      freq[n] = (freq[n] || 0) + 1;
    }

    for (const n of A) {
      if (freq[n] == 1) {
        maxUnique = Math.max(maxUnique, n);
      }
    }

    return maxUnique;
  }
}

let sol = new Solution();
console.log(sol.largestUniqueNumber([5, 7, 3, 7, 5, 8])); // Expected: 8
console.log(sol.largestUniqueNumber([1, 2, 3, 2, 1, 4, 4])); // Expected: 3
console.log(sol.largestUniqueNumber([9, 9, 8, 8, 7, 7])); // Expected: -1
