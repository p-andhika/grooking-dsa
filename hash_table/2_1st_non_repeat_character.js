/*
Given a string, identify the position of the first character that appears only once in the string. If no such character exists, return -1.

Example

Example 1:

Input: "apple"
Expected Output: 0
Justification: The first character 'a' appears only once in the string and is the first character.
Example 2:

Input: "abcab"
Expected Output: 2
Justification: The first character that appears only once is 'c' and its position is 2.
Example 3:

Input: "abab"
Expected Output: -1
Justification: There is no character in the string that appears only once.
*/

class Solution {
  firstUniqChar(s) {
    // create a hashmap to store the frequency of each character
    const freq = {};

    // traverse the string to populate the hashmap with character frequencies
    for (const c of s) {
      if (!(c in freq)) {
        freq[c] = 0;
      }

      freq[c] = freq[c] + 1;
    }

    // traverse again to find the first unique character
    for (let i = 0; i < s.length; i++) {
      if (freq[s[i]] == 1) {
        return i;
      }
    }

    return -1;
  }
}

let sol = new Solution();
console.log(sol.firstUniqChar("apple")); // Expected: 0
console.log(sol.firstUniqChar("abcab")); // Expected: 2
console.log(sol.firstUniqChar("abab")); // Expected: -1
