/*
Given a string, determine the maximum number of times the word "balloon" can be formed using the characters from the string. Each character in the string can be used only once.

Example

Example 1:

Input: "balloonballoon"
Expected Output: 2
Justification: The word "balloon" can be formed twice from the given string.
Example 2:

Input: "bbaall"
Expected Output: 0
Justification: The word "balloon" cannot be formed from the given string as we are missing the character 'o' twice.
Example 3:

Input: "balloonballoooon"
Expected Output: 2
Justification: The word "balloon" can be formed twice, even though there are extra 'o' characters.
*/

class Solution {
  maxNumberOfBalloons(text) {
    let minCount = Number.POSITIVE_INFINITY;

    const charCount = {};

    for (const c of text) {
      charCount[c] = (charCount[c] || 0) + 1;
    }

    minCount = Math.min(charCount["b"] || 0, minCount);
    minCount = Math.min(charCount["a"] || 0, minCount);
    minCount = Math.min((charCount["l"] || 0) / 2, minCount);
    minCount = Math.min((charCount["o"] || 0) / 2, minCount);
    minCount = Math.min(charCount["n"] || 0, minCount);

    return Math.floor(minCount);
  }
}

let sol = new Solution();
console.log(sol.maxNumberOfBalloons("balloonballoon")); // Expected: 2
console.log(sol.maxNumberOfBalloons("bbaall")); // Expected: 0
console.log(sol.maxNumberOfBalloons("balloonballoooon")); // Expected: 2
