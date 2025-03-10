/*
Given an array nums sorted in increasing order, return the maximum between the count of positive integers and the count of negative integers.

Note: 0 is neither positive nor negative.

Example 1:

Input: nums = [-4, -3, -1, 0, 1, 3, 5, 7]
Expected Output: 4
Justification: The array contains three negative integers (-4, -3, -1) and four positive integers (1, 3, 5, 7). The maximum count between negatives and positives is 4.
Example 2:

Input: nums = [-8, -7, -5, -4, 0, 0, 0]
Expected Output: 4
Justification: Here, there are four negative integers (-8, -7, -5, -4) and no positives. Thus, the maximum count is 4.
Example 3:

Input: nums = [0, 2, 2, 3, 3, 3, 4]
Expected Output: 6
Justification: This input array includes zero negative integers and six positives (2, 2, 3, 3, 3, 4). Hence, the maximum count is 6.
*/

class Solution {
  //maximumCount(nums) {
  //  let start = 0;
  //  let end = nums.length - 1;
  //
  //  // hold the count
  //  let maxNegatives = 0;
  //  let maxPositive = 0;
  //
  //  // find the total of negative numbers
  //  while (start <= end) {
  //    let mid = start + Math.floor((end - start) / 2);
  //    if (nums[mid] < 0) {
  //      maxNegatives = mid + 1; // update count of negatives
  //      start = mid + 1; // move to the right
  //    } else {
  //      end = mid - 1; // continue searching in the left half
  //    }
  //  }
  //
  //  start = 0;
  //  end = nums.length - 1;
  //
  //  // find the total of positive numbers
  //  while (start <= end) {
  //    let mid = start + Math.floor((end - start) / 2);
  //    if (nums[mid] > 0) {
  //      maxPositive = nums.length - mid; // update count of positives
  //      end = mid - 1; // continue searching in the left half
  //    } else {
  //      start = mid + 1; // move to the right
  //    }
  //  }
  //
  //  return Math.max(maxNegatives, maxPositive);
  //}

  // or

  binarySearch(nums, target) {
    let start = 0,
      end = nums.length;

    while (start < end) {
      const mid = Math.floor((start + end) / 2);

      if (nums[mid] < target) {
        start = mid + 1;
      } else {
        end = mid;
      }
    }

    return start;
  }

  maximumCount(nums) {
    let firstNonNegative = this.binarySearch(nums, 0);
    let firstPositive = this.binarySearch(nums, 1);

    return Math.max(firstNonNegative, nums.length - firstPositive);
  }
}

const solution = new Solution();

// Example 1
const nums1 = [-4, -3, -1, 0, 1, 3, 5, 7];
console.log("Example 1:", solution.maximumCount(nums1)); // Expected Output: 4

// Example 2
const nums2 = [-8, -7, -5, -4, 0, 0, 0];
console.log("Example 2:", solution.maximumCount(nums2)); // Expected Output: 4

// Example 3
const nums3 = [0, 2, 2, 3, 3, 3, 4];
console.log("Example 3:", solution.maximumCount(nums3)); // Expected Output: 6
