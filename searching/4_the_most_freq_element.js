/*
You are given an nums array containing n integers and an integer k. In a single operation, you can choose any index i and increment the nums[i] by 1.

Return the maximum possible frequency of any element of nums after performing at most k operations.

Example

Example 1:

Input: nums = [1, 2, 3], k = 3
Expected Output: 3
Explanation: We can increment the number 1 two times and 2 one time. The final array will be [3, 3, 3]. Now, the number 3 appears 3 times in the array [3, 3, 3].
Example 2:

Input: nums = [4, 4, 4, 1], k = 2
Expected Output: 3
Explanation: We can increment the number 1 two times (1 -> 2 -> 3). Now, the number 4 still appears 3 times, which is the maximum frequency that can be achieved with 2 operations.
Example 3:

Input: nums = [10, 9, 9, 4, 8], k = 5
Expected Output: 4
Explanation: We can increment the number 9 one time and the number 8 two times (9 -> 10, 9 -> 10; 8 -> 9 -> 10). The number 10 will then appear 4 times in the array [10, 10, 10, 4, 10].
*/

class Solution {
  // Method to calculate the maximum frequency of any element after at most `maxOperations` increments.
  maxFrequency(elements, maxOperations) {
    // sort from smaller to bigger

    elements.sort((a, b) => a - b);

    // use two pointer
    let left = 0; // left pointer
    let sum = 0; // running sum of numbers in our window
    let maxFreq = 0; // the best answer we've found so far

    // right pointer, moves along the array
    for (let right = 0; right < elements.length; right++) {
      sum += elements[right];

      // check if we can make all numbers in window equal to nums[right]
      while ((right - left + 1) * elements[right] - sum > maxOperations) {
        sum -= elements[left];
        left++;
      }

      maxFreq = Math.max(maxFreq, right - left + 1);
    }

    return maxFreq;
  }
}

const solution = new Solution();
// Test cases
console.log("Example 1: Output:", solution.maxFrequency([1, 2, 3], 3)); // Expected output is 3
console.log("Example 2: Output:", solution.maxFrequency([4, 4, 4, 1], 2)); // Expected output is 3
console.log("Example 3: Output:", solution.maxFrequency([10, 9, 9, 4, 8], 5)); // Expected output is 4
