/*
Given an unsorted array of numbers, find the top ‘K’ frequently occurring numbers in it.

Example

Example 1:

Input: [1, 3, 5, 12, 11, 12, 11], K = 2
Output: [12, 11]
Explanation: Both '11' and '12' appeared twice.
Example 2:

Input: [5, 12, 11, 3, 11], K = 2
Output: [11, 5] or [11, 12] or [11, 3]
Explanation: Only '11' appeared twice, all other numbers appeared once.
*/

class Solution {
  findTopKFrequentNumbers(nums, k) {
    const topNumbers = [];

    // count freq each number
    const freq = new Map();
    for (let num of nums) {
      freq.set(num, (freq.get(num) || 0) + 1);
    }

    // convert freq map to an array of [number, freq] pairs
    const freqArr = Array.from(freq.entries());

    // sort the array by freq in desc order
    freqArr.sort((a, b) => b[1] - a[1]);

    // extract top k freq numbers
    for (let i = 0; i < k; i++) {
      topNumbers.push(freqArr[i][0]);
    }

    return topNumbers;
  }
}

// Example usage:
const sol = new Solution();
console.log(
  `Here are the K frequent numbers: ${sol.findTopKFrequentNumbers(
    [1, 3, 5, 12, 11, 12, 11],
    2,
  )}`,
);

console.log(
  `Here are the K frequent numbers: ${sol.findTopKFrequentNumbers(
    [5, 12, 11, 3, 11],
    2,
  )}`,
);
