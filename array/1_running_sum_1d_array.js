/*
Given a one-dimensional array of integers, create a new array that represents the running sum of the original array.

The running sum at position i in the new array is calculated as the sum of all the numbers in the original array from the 0th index up to the i-th index (inclusive). Formally, the resulting array should be computed as follows: result[i] = sum(nums[0] + nums[1] + ... + nums[i]) for each i from 0 to the length of the array minus one.

Example:
Input: [2, 3, 5, 1, 6]
Expected Output: [2, 5, 10, 11, 17]
Justification:
For i=0: 2
For i=1: 2 + 3 = 5
For i=2: 2 + 3 + 5 = 10
For i=3: 2 + 3 + 5 + 1 = 11
For i=4: 2 + 3 + 5 + 1 + 6 = 17
*/

class Solution {
  runningSum(nums) {

    // Check if array is null
    if (nums.length === 0 || !nums) {
      return []
    }

    // =====================================
    // 1st variation answer
    // const result = new Array(nums.length);
    // let sum = 0;

    // for (let i = 0; i < nums.length; i++) {
    //   sum = sum + nums[i]
    //   result.push(sum)
    // }

    // ======================================
    // 2nd variation answer
    const result = new Array(nums.length);
    result[0] = nums[0];

    for (let i = 1; i < nums.length; i++) {
      result[i] = result[i - 1] + nums[i];
    }

    return result;
  }
}

const test = new Solution();
console.log(test.runningSum([2, 3, 5, 1, 6]));
