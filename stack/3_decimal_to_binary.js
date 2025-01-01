/*
Given a positive integer n, write a function that returns its binary equivalent as a string. The function should not use any in-built binary conversion function.

Example:
Input: 2
Output: "10"
Explanation: The binary equivalent of 2 is 10.
*/

class Solution {
  decimalToBinary(num) {
    const stack = [];

    while (num > 0) {
      stack.push(num % 2);

      num = Math.floor(num / 2);
    }

    return stack.reverse().join("");
  }
}

// Test cases
let sol = new Solution();
console.log(sol.decimalToBinary(2));    // Output: "10"
console.log(sol.decimalToBinary(7));    // Output: "111"
console.log(sol.decimalToBinary(18));   // Output: "10010
