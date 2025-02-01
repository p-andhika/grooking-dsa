/*
Given a string, arrange its characters in descending order based on the frequency of each character. If two characters have the same frequency, their relative order in the output string can be arbitrary.

Example

Input: s = "trersesess"
Expected Output: "sssseeerrt"
Justification: The character s appears four times, e three times, r two times and t only once. All characters are sorted based on their frequnecy.
Input: s = "banana"
Expected Output: "aaannb".
Justification: The character 'a' appears three times, 'n' twice and 'b' once.
Input: s = "abb"
Expected Output: "bba"
Justification: The character b appears twice and a` only once.
*/

class Solution {
  frequencySort(s) {
    let result = "";

    //// Build the frequency map
    //const freqMap = {};
    //for (const c of s) {
    //  freqMap[c] = (freqMap[c] || 0) + 1;
    //}
    //
    //// Create an array and sort it based on the frequenc
    //const sortedChars = Object.keys(freqMap).sort(
    //  (a, b) => freqMap[b] - freqMap[a],
    //);
    //
    //// construct the result string
    //for (const char of sortedChars) {
    //  result += char.repeat(freqMap[char]);
    //}

    // alternative method
    const freqMap = new Map();
    for (const c of s) {
      freqMap.set(c, (freqMap.get(c) || 0) + 1);
    }

    const maxFreq = Math.max(...freqMap.values());

    const buckets = Array.from({ length: maxFreq + 1 }, () => []);

    for (const [char, freq] of freqMap.entries()) {
      buckets[freq].push(char);
    }

    for (let i = buckets.length - 1; i >= 1; i--) {
      for (const char of buckets[i]) {
        result += char.repeat(i);
      }
    }

    return result;
  }
}

// Test cases
const sol = new Solution();
console.log(sol.frequencySort("programming")); // Expected: gggrrmmiapo
console.log(sol.frequencySort("aab")); // Expected: aab or baa
console.log(sol.frequencySort("apple")); // Expected: pplea
