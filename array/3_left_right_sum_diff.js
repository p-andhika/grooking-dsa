/*
Given an input array of integers nums, find an integer array, let's call it differenceArray, of the same length as an input integer array.

Each element of differenceArray, i.e., differenceArray[i], should be calculated as follows: take the sum of all elements to the left of index i in array nums (let's call it leftSumi), and subtract it from the sum of all elements to the right of index i in array nums (let's call it rightSumi), taking the absolute value of the result:

differenceArray[i] = | leftSum^i - rightSum^i |

If there are no elements to the left or right of i, the corresponding sum should be taken as 0.

Example:
Input: nums = [2, 5, 1, 6, 1]
Expected Output: [13, 6, 0, 7, 14]
Explanation:
For i=0: |(0) - (5+1+6+1)| = |0 - 13| = 13
For i=1: |(2) - (1+6+1)| = |2 - 8| = 6
For i=2: |(2+5) - (6+1)| = |7 - 7| = 0
For i=3: |(2+5+1) - (1)| = |8 - 1| = 7
For i=4: |(2+5+1+6) - (0)| = |14 - 0| = 14
*/

class Solution {
  findDifferenceArray(nums) {
    const n = nums.length;
    const differenceArray = new Array(n).fill(0);
    let leftSum = 0;
    let rightSum = nums.reduce((acc, num)=> acc + num, 0);

    for (let i = 0; i < n; i++) {
      rightSum -= nums[i];
      differenceArray[i] = Math.abs(rightSum - leftSum);
      leftSum += nums[i];
    }

      return differenceArray;
  }
}

const solution = new Solution();

const example1 = [2, 5, 1, 6, 1];
const example2 = [3, 3, 3];
const example3 = [1, 2, 3, 4, 5];

console.log(solution.findDifferenceArray(example1)); // Output: [13, 6, 0, 7, 14]
console.log(solution.findDifferenceArray(example2)); // Output: [6, 0, 6]
console.log(solution.findDifferenceArray(example3)); // Output: [14, 11, 6, 1, 10]
