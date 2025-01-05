/*
Given a string s containing (, ), [, ], {, and } characters. Determine if a given string of parentheses is balanced.

A string of parentheses is considered balanced if every opening parenthesis has a corresponding closing parenthesis in the correct order.

Example:
Input: String s = "{[()]}";
Expected Output: true
Explanation: The parentheses in this string are perfectly balanced. Every opening parenthesis '{', '[', '(' has a corresponding closing parenthesis '}', ']', ')' in the correct order.
*/

class Solution {
  isValid(s) {
    const stack = [];

    for (const c of s) {
      if (c === "(" || c === "[" || c === "{") {
        stack.push(c);
      } else {
        if (stack.length === 0) return false;

        const top = stack.pop();

        if (c === ')' && top !== '(') return false;
        if (c === ']' && top !== '[') return false;
        if (c === '}' && top !== '{') return false;
      }
    }

    return stack.length === 0;
  }
}

// Test cases to verify the solution
let sol = new Solution();
let test1 = "{[()]}"; // Should be valid
let test2 = "{[}]";   // Should be invalid
let test3 = "(]";     // Should be invalid

console.log("Test 1:", sol.isValid(test1));
console.log("Test 2:", sol.isValid(test2));
console.log("Test 3:", sol.isValid(test3))
