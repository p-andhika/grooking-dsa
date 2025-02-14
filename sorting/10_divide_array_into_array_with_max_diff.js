/*
You are given an array nums containing n integers and a positive integer k.

Divide the nums into arrays of size 3 such that it satisfies the below conditions:

Each element of nums should be in exactly one array.
The difference between any two elements of a single array should be less than or equal to k.
Return a 2D array of these subarrays. If no such division is possible, return an empty array.

Example

Example 1:

Input: nums = [2, 6, 4, 9, 3, 7, 3, 4, 1], k = 3
Expected Output: [[1,2,3],[3,4,4],[6,7,9]]
Explanation: The three groups [1, 2, 3], [3, 4, 4] and [6, 7, 9] all have elements with differences ≤ k. For the group [1, 2, 3] the maximum difference between elements is 2. For the group [3, 4, 4], the maximum difference is 1, and for [6, 7, 9], it's 3, all of which satisfy the condition.

Example 2:

Input: nums = [10, 12, 15, 20, 25, 30], k = 10
Expected Output: [[10, 12, 15], [20, 25, 30]]
Explanation: Here, the two groups have maximum differences of 5 and 10 respectively, which are less than or equal to k, thus meeting the criteria perfectly.

Example 3:

Input: nums = [1, 2, 4, 5, 9, 10], k = 1
Expected Output: []
Explanation: It is not possible to divide the nums in subarrays as the value of the k is equal to 1.
*/

class Solution {
  // Method to divide the array into subarrays with max difference <= k
  divideArray(nums, k) {
    const result = [];

    nums.sort(
      (a, b) => a - b
    )

    for (let i = 0; i <= nums.length - 3; i += 3) {
      if (
        (nums[i + 2] - nums[i]) <= k
      ) {
        const subgroup = [nums[i], nums[i + 1], nums[i + 2]];
        result.push(subgroup)
      } else {
        return []
      }
    }

    return result; // Return the final grouped list
  }
}

const sol = new Solution();

// Example 1
const nums1 = [2, 6, 4, 9, 3, 7, 3, 4, 1];
const k1 = 3;
console.log("Example 1 Output:", sol.divideArray(nums1, k1));

// Example 2
const nums2 = [10, 12, 15, 20, 25, 30];
const k2 = 10;
console.log("Example 2 Output:", sol.divideArray(nums2, k2));

// Example 3
const nums3 = [1, 2, 4, 5, 9, 10];
const k3 = 2;
console.log("Example 3 Output:", sol.divideArray(nums3, k3));
