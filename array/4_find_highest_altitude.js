/*
A bike rider is going on a ride. The road contains n + 1 points at different altitudes. The rider starts from point 0 at an altitude of 0.

Given an array of integers gain of length n, where gain[i] represents the net gain in altitude between points i and i + 1 for all (0 <= i < n), return the highest altitude of a point.

Example:
Input: gain = [-5, 1, 5, 0, -7]
Expected Output: 1
Justification: The altitude changes are [-5, -4, 1, 1, -6], where 1 is the highest altitude reached.
*/

class Solution {
  largestAltitude(gain) {
    let maxAltitude = 0;  // To store the maximum altitude encountered
    let currentAltitude = 0;

    for (const num of gain) {
      currentAltitude += num;
      maxAltitude = Math.max(maxAltitude, currentAltitude);
    }

    return maxAltitude;
  }
}

const solution = new Solution();

// Example 1
console.log(solution.largestAltitude([-5, 1, 5, 0, -7]));  // Expected: 1

// Example 2
console.log(solution.largestAltitude([4, -3, 2, -1, -2]));  // Expected: 4

// Example 3
console.log(solution.largestAltitude([2, 2, -3, -1, 2, 1, -5]));  // Expected: 4
