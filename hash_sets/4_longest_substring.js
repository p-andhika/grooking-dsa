/*
Given a string, identify the length of its longest segment that contains distinct characters. In other words, find the maximum length of a substring that has no repeating characters.

Example

Example 1:

Input: "abcdaef"
Expected Output: 6
Justification: The longest segment with distinct characters is "bcdaef", which has a length of 6.
Example 2:

Input: "aaaaa"
Expected Output: 1
Justification: The entire string consists of the same character. Thus, the longest segment with unique characters is just "a", with a length of 1.
Example 3:

Input: "abrkaabcdefghijjxxx"
Expected Output: 10
Justification: The longest segment with distinct characters is "abcdefghij", which has a length of 10.
*/

class Solution {
  lengthOfLongestSubstring(s) {
    let char_set = new Set();
    let maxLength = 0,
      start = 0,
      end = 0;

    // traverse the string with the end pointer
    while (end < s.length) {
      // if character is not in the set, it's a unique character
      if (!char_set.has(s[end])) {
        char_set.add(s[end]);
        maxLength = Math.max(maxLength, end - start + 1);
        end++;
      } else {
        // if we find a repeating character, remove character at the start pointer & move the start pointer
        char_set.delete(s[start]);
        start++;
      }
    }

    return maxLength;
  }
}

const sol = new Solution();
console.log(sol.lengthOfLongestSubstring("abcdaef")); // Expected: 6
console.log(sol.lengthOfLongestSubstring("aaaaa")); // Expected: 1
console.log(sol.lengthOfLongestSubstring("abrkaabcdefghijjxxx")); // Expected: 10
