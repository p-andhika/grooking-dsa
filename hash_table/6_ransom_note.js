/*
Given two strings, one representing a ransom note and the other representing the available letters from a magazine, determine if it's possible to construct the ransom note using only the letters from the magazine. Each letter from the magazine can be used only once.

Example

Example 1:

Input: Ransom Note = "hello", Magazine = "hellworld"
Expected Output: true
Justification: The word "hello" can be constructed from the letters in "hellworld".
Example 2:

Input: Ransom Note = "notes", Magazine = "stoned"
Expected Output: true
Justification: The word "notes" can be fully constructed from "stoned" from its first 5 letters.
Example 3:

Input: Ransom Note = "apple", Magazine = "pale"
Expected Output: false
Justification: The word "apple" cannot be constructed from "pale" as we are missing one 'p'.
*/

class Solution {
  canConstruct(ransomNote, magazine) {
    // create an object to store character frequencies from the magazine
    const charFreq = {};

    // populate the object with character frequencies from the Magazine
    for (const c of magazine) {
      charFreq[c] = (charFreq[c] || 0) + 1;
    }

    // check if ransom note can be constructed
    for (const c of ransomNote) {
      if (!charFreq[c] || charFreq[c] == 0) {
        return false;
      }

      charFreq[c]--;
    }

    return true;
  }
}

let sol = new Solution();
console.log(sol.canConstruct("hello", "hellworld")); // Expected: true
console.log(sol.canConstruct("notes", "stoned")); // Expected: true
console.log(sol.canConstruct("apple", "pale")); // Expected: false
