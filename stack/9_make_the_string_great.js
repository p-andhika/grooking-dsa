/*
Given a string of English lowercase and uppercase letters, make the string "good" by removing two adjacent characters that are the same but in different cases.

Continue to do this until there are no more adjacent characters of the same letter but in different cases. An empty string is also considered "good".

Example:

Example 1

Input: "AaBbCcDdEeff"
Output: "ff"
Explanation: In the first step, "AaBbCcDdEeff" becomes "BbcCDdEeff" because 'A' and 'a' are the same letter, but one is uppercase and the other is lowercase. Then we remove "Bb", and then "cC", "dD", and "Ee". In the end we are left with "ff" which we can't remove - although both characters are the same but with the same case.
Example 2

Input: "abBA"
Output: ""
Explanation: In the first step, "abBA" becomes "aA" because 'b' and 'B' are the same letter, but one is uppercase and the other is lowercase. Then "aA" becomes "" for the same reason. The final string is empty, which is good.
Example 1

Input: "s"
Output: "s"
Explanation: The string "s" is already good because it only contains one character.
*/

class Solution {
  makeGood(s) {

    const stack = [];

    for (const c of s) {
      const top = stack.length - 1;

      if (stack.length > 0 && stack[top].toLowerCase() === c.toLowerCase() && stack[top] !== c) {
        stack.pop();
      } else {
        stack.push(c);
      }
    }

    return stack.join("");
  }
}

let sol = new Solution();
// Testing the function with example inputs and printing the results.
console.log(sol.makeGood("AaBbCcDdEeff"));  // Output: "ff"
console.log(sol.makeGood("abBA"));  // Output: ""
console.log(sol.makeGood("s"));  // Output: "s"
