/*
Given a string str, return the longest nice substring of a given string.

A substring is considered nice if for every lowercase letter in the substring, its uppercase counterpart is also present, and vice versa.

If no such string exists, return an empty string.

Examples

    Example 1:
        Input: "BbCcXxY"
        Expected Output: "BbCcXx"
        Justification: Here, "BbCcXx" is the longest substring where each letter's uppercase and lowercase forms are present.

    Example 2:
        Input: "aZAbcD"
        Expected Output: ""
        Justification: There is no contiguous substring where each character exists in both its uppercase and lowercase forms.

    Example 3:
        Input: "qQwWeErR"
        Expected Output: "qQwWeErR"
        Justification: The entire string is the longest nice substring since every letter exists in both uppercase and lowercase forms.

*/

class Solution {
  findLongestNiceSubstring(s) {
    if (s.length < 2) return "";

    // create a set to store all characters in the string
    const set = new Set(s);

    // loop through the characters in the string
    for (let i = 0; i < s.length; i++) {
      const c = s[i];

      // check if both uppercase & lowercase forms of the character exist
      if (set.has(c.toUpperCase()) && set.has(c.toLowerCase())) {
        continue; // if they exist, move to the next character
      }

      // if the character doesn't satisfy the "nice" condition, split the string
      // recursively find the longest nice substring in the left and right parts
      const sub1 = this.findLongestNiceSubstring(s.substring(0, i));
      const sub2 = this.findLongestNiceSubstring(s.substring(i + 1));

      // return the longer of the two substring
      return sub1.length >= sub2.length ? sub1 : sub2;
    }

    // if all character satisfy the "nice" condition, return the whole string
    return s;
  }
}

// Test cases
const sol = new Solution();
console.log(sol.findLongestNiceSubstring("BbCcXxY")); // Expected: "BbCcXx"
console.log(sol.findLongestNiceSubstring("aZAbcD")); // Expected: ""
console.log(sol.findLongestNiceSubstring("qQwWeErR")); // Expected: "qQwWeErR"
