/*
 Given a string s, remove all duplicate letters from the input string while maintaining the original order of the letters.

Additionally, the returned string should be the smallest in lexicographical order among all possible results.

A string is in the smallest lexicographical order if it appears first in a dictionary. For example, "abc" is smaller than "acb" because "abc" comes first alphabetically.

Examples:

Input: "babac"
Expected Output: "abc"
Justification:
After removing 1 b and 1 a from the input string, we can get bac, and abc strings. The final answer is 'abc', which is the smallest lexicographical string without duplicate letters.
Input: "zabccde"
Expected Output: "zabcde"
Justification: Removing one of the 'c's forms 'zabcde', the smallest string in lexicographical order without duplicates.
Input: "mnopmn"
Expected Output: "mnop"
Justification: Removing the second 'm' and 'n' gives 'mnop', which is the smallest possible string without duplicate characters.
 */

class Solution {
  removeDuplicateLetters(s) {
    const count = {};
    const present = new Set();
    const result = [];

    // count the freq of each char
    for (const c of s) {
      count[c] = (count[c] || 0) + 1;
    }

    for (const c of s) {
      if (!present.has(c)) {
        // ensure smallest lexicographical order
        while (
          result.length > 0 &&
          c < result[result.length - 1] &&
          count[result[result.length - 1]] > 0
        ) {
          present.delete(result.pop());
        }
        result.push(c);
        present.add(c);
      }
      count[c]--; // decrease the freq
    }

    return result.join("");
  }
}

const sol = new Solution();
sol.removeDuplicateLetters("helloworld");
console.log(sol.removeDuplicateLetters("babac")); // Output: "abc"
console.log(sol.removeDuplicateLetters("zabccde")); // Output: "zabcde"
console.log(sol.removeDuplicateLetters("mnopmn")); // Output: "mnop
