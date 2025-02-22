/*
Given a non-negative integer x, return the square root of x rounded down to the nearest integer. The returned integer should be non-negative as well.

You must not use any built-in exponent function or operator.

For example, do not use pow(x, 0.5) in c++ or x ** 0.5 in python.

Input: x = 8
Output: 2
Explanation: The square root of 8 is 2.8284, and since we need to return the floor of the square root (integer), hence we returned 2.  
Example 2:

Input: x = 4
Output: 2
Explanation: The square root of 4 is 2.
Example 3:

Input: x = 2
Output: 1
Explanation: The square root of 2 is 1.414, and since we need to return the floor of the square root (integer), hence we returned 1.
*/

class Solution {
  mySqrt(x) {
    if (x < 2) return x;

    let left = 0,
      right = x;

    while (left <= right) {
      const mid = Math.floor((left + right) / 2);
      const midSquared = mid * mid;

      if (midSquared == x) {
        return mid; // perfect square
      } else if (midSquared < x) {
        left = mid + 1; // try higher numbers
      } else {
        right = mid - 1; // try smaller numbers
      }
    }

    return right;
  }
}

const sol = new Solution();
// test cases
console.log(sol.mySqrt(4) === 2); // expected output: true
console.log(sol.mySqrt(8) === 2); // expected output: true
console.log(sol.mySqrt(2) === 1); // expected output: true
console.log(sol.mySqrt(3) === 1); // expected output: true
console.log(sol.mySqrt(15) === 3); // expected output: true
