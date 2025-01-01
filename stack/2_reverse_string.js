/*
Given a string, write a function that uses a stack to reverse the string. The function should return the reversed string.

Example:
Input: "Hello, World!"
Output: "!dlroW ,olleH"
*/

class Solution {
  reverseString(s) {
    const stack = [...s];
    let reversedString = '';

    while (stack.length !== 0) {
      const top = stack.pop();
      reversedString += top;
    }

    return reversedString;
  }
}

const solution = new Solution();
console.log(solution.reverseString('Hello World!'));
