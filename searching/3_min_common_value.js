/*
Given two sorted arrays nums1 and nums2 containing integers only, return the smallest integer that appears in both arrays. If there isn't any integer that exists in both arrays, the function should return -1.

Example

Example 1:

input: nums1 = [1, 3, 5, 7], nums2 = [3, 4, 5, 6, 8, 10]
expectedOutput: 3
Justification: Both arrays share the integers 3 and 5, but the smallest common integer is 3.
Example 2:

input: nums1 = [2, 4, 6], nums2 = [1, 3, 5]
expectedOutput: -1
Justification: There are no integers common to both nums1 and nums2, hence the output is -1.
Example 3:

input: nums1 = [1, 2, 2, 3], nums2 = [2, 2, 4]
expectedOutput: 2
Justification: The integer 2 is the only common number between nums1 and nums2, appearing multiple times in both, and it is the smallest.
*/

class Solution {
  findMinimumCommonValue(nums1, nums2) {
    let i = 0;
    let j = 0;

    while (i < nums1.length && j < nums2.length) {
      if (nums1[i] == nums2[j]) {
        return nums1[i];
      } else if (nums1[i] < nums2[j]) {
        i++;
      } else {
        j++;
      }
    }

    return -1;
  }
}

const solution = new Solution();
// Test cases
console.log(solution.findMinimumCommonValue([1, 3, 5, 7], [3, 4, 5, 6, 8, 10])); // Expected Output: 3
console.log(solution.findMinimumCommonValue([2, 4, 6], [1, 3, 5])); // Expected Output: -1
console.log(solution.findMinimumCommonValue([1, 2, 2, 3], [2, 2, 4])); // Expected Output: 2
