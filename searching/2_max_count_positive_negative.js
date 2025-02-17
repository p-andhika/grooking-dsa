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

  maximumCount(nums) {
    let start = 0,
      end = nums.length - 1;
    let firstNonNegativeIndex = nums.length; //default

    while (start <= end) {
      const mid = Math.floor((start + end) / 2);

      if (nums[mid] < 0) {
        start = mid + 1; // move right to find the first non-negative
      } else {
        firstNonNegativeIndex = mid; // found a non-negative
        end = mid - 1;
      }
    }

    // negative count is all elements before the first non-negative
    let negativeCount = firstNonNegativeIndex;

    // positive count is the remaining elements in the array after the first non-negative
    let positiveCount =
      nums.length -
      firstNonNegativeIndex -
      (nums[firstNonNegativeIndex] == 0 ? 1 : 0);

    return Math.max(negativeCount, positiveCount);
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
