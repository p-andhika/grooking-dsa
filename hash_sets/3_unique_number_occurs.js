/*
Given an array of integers, determine if the number of times each distinct integer appears in the array is unique.

In other words, the occurrences of each integer in the array should be distinct from the occurrences of every other integer.

Example

Input: [4, 5, 4, 6, 6, 6]
Expected Output: true
Justification: The number 4 appears 2 times, 5 appears 1 time, and 6 appears 3 times. All these occurrences (1, 2, 3) are unique.
Input: [7, 8, 8, 9, 9, 9, 10, 10]
Expected Output: false
Justification: The number 7 appears 1 time, 8 appears 2 times, 9 appears 3 times, and 10 appears 2 times. The occurrences are not unique since the number 2 appears twice.
Input: [11, 12, 13, 14, 14, 15, 15, 15]
Expected Output: false
Justification: The number 11 appears 1 time, 12 appears 1 time, 13 appears 1 time, 14 appears 2 times, and 15 appears 3 times. These occurrences are not unique.
*/

class Solution {
  uniqueOccurrences(arr) {
    // count occurrences of each number
    const countNum = {};
    for (const n of arr) {
      countNum[n] = (countNum[n] || 0) + 1;
    }

    // check if the occurrences are unique
    const uniqueNum = new Set();

    for (const n in countNum) {
      if (uniqueNum.has(countNum[n])) return false;

      uniqueNum.add(countNum[n]);
    }

    return true;
  }
}

// Test the function
const sol = new Solution();
console.log(sol.uniqueOccurrences([4, 5, 4, 6, 6, 6]));
console.log(sol.uniqueOccurrences([7, 8, 8, 9, 9, 9, 10, 10]));
console.log(sol.uniqueOccurrences([11, 12, 13, 14, 14, 15, 15, 15]));
