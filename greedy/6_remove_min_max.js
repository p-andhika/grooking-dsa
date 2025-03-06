/*
Determine the minimum number of deletions required to remove the smallest and the largest elements from an array of integers.

In each deletion, you are allowed to remove either the first (leftmost) or the last (rightmost) element of the array.

Examples
Example 1:

Input: [3, 2, 5, 1, 4]
Expected Output: 3
Justification: The smallest element is 1 and the largest is 5. Removing 4, 1, and then 5 (or 5, 4, and then 1) in three moves is the most efficient strategy.
Example 2:

Input: [7, 5, 6, 8, 1]
Expected Output: 2
Justification: Here, 1 is the smallest, and 8 is the largest. Removing 1 and then 8 in two moves is the optimal strategy.
Example 3:

Input: [2, 4, 10, 1, 3, 5]
Expected Output: 4
Justification: The smallest is 1 and the largest is 10. One strategy is to remove 2, 4, 10, and then 1 in four moves.
*/

class Solution {
  minMoves(nums) {
    const n = nums.length;

    // find indexes of the min and max elements
    const min = nums.indexOf(Math.min(...nums));
    const max = nums.indexOf(Math.max(...nums));

    // calculate distances from both ends
    const minDistStart = min + 1;
    const minDistEnd = n - min;
    const maxDistStart = max + 1;
    const maxDistEnd = n - max;

    // determine the most efficient sequence of moves
    const totalMoves = Math.min(
      Math.max(minDistStart, maxDistStart),
      Math.max(minDistEnd, maxDistEnd),
      Math.min(minDistStart + maxDistEnd, minDistEnd + maxDistStart),
    );

    return totalMoves;
  }
}

// Testing the algorithm with example inputs
const sol = new Solution();
console.log(sol.minMoves([3, 2, 5, 1, 4])); // Output: 3
console.log(sol.minMoves([7, 5, 6, 8, 1])); // Output: 2
console.log(sol.minMoves([2, 4, 10, 1, 3, 5])); // Output: 4
console.log(sol.minMoves([1, 2, 3, 4, 5, 6, 7, 8, 9, 10])); // Output: 2
