/*
Given an integer array nums, return true if any value appears at least twice in the array, and return false if every element is distinct.

Example:
Input: nums= [1, 2, 3, 4]
Output: false
Explanation: There are no duplicates in the given array.

Input: nums= [1, 2, 3, 1]
Output: true
Explanation: '1' is repeating.
*/

class Solution {
  containsDuplicate(nums) {
    // const uniqueSet = new Set();
    const trackNum = {}

    for (let i = 0; i < nums.length; i++) {
      // if (uniqueSet.has(nums[i])) {
      //   return true;
      // }

      // uniqueSet.add(nums[i]);
      if (trackNum.hasOwnProperty(nums[i])) {
        return true;
      }

      trackNum[nums[i]] = nums[i];
    }

    return false;
  }
}

const solution = new Solution();
console.log(solution.containsDuplicate([1, 2, 3, 4]));
console.log(solution.containsDuplicate([1, 2, 3, 1]));
