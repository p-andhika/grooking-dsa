/*
Given a string s, where * represents a star. We can remove a star along with its closest non-star character to its left in a single operation.

The task is to perform as many such operations as possible until all stars have been removed and return the resultant string.

Example:
Example 1

Input: "abc*de*f"
Expected Output: "abdf"
Description: We remove c along with * to get "abde*f", then remove e along with * to get "abdf"
Example 2

Input: "a*b*c*d"
Expected Output: "d"
Description: We remove a along with * to get "b*c*d", then remove b with * to get "c*d", then remove c with * to get "d".
Example 3

Input: "abcd"
Expected Output: "abcd"
Description: As there is no *, the string remains the same.
*/

class Solution {
  removeStars(s) {
    const stack = [];

    for (const c of s) {
      if (stack.length > 0 && c == '*') {
        stack.pop();
      } else if (c != '*') {
        stack.push(c);
      }
    }

    return stack.join("");
  }
}

// Testing the Solution class
const solution = new Solution();
console.log(solution.removeStars("abc*de*f"));  // Output: "abdf"
console.log(solution.removeStars("a*b*c*d"));  // Output: "d"
console.log(solution.removeStars("abcd"));     // Output: "abcd
