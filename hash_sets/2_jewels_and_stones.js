/*
Given two strings. The first string represents types of jewels, where each character is a unique type of jewel. The second string represents stones you have, where each character represents a type of stone. Determine how many of the stones you have are also jewels.

Example

Example 1:

Input: Jewels = "abc", Stones = "aabbcc"
Expected Output: 6
Justification: All the stones are jewels.
Example 2:

Input: Jewels = "aA", Stones = "aAaZz"
Expected Output: 3
Justification: There are 2 'a' and 1 'A' stones that are jewels.
Example 3:

Input: Jewels = "zZ", Stones = "zZzZzZ"
Expected Output: 6
Justification: All the stones are jewels.
*/

class Solution {
  numJewelsInStones(jewels, stones) {
    let count = 0;
    const jewelSets = new Set(jewels);

    for (const c of stones) {
      if (jewelSets.has(c)) {
        count += 1;
      }
    }

    return count;
  }
}

const sol = new Solution();
console.log(sol.numJewelsInStones("abc", "aabbcc")); // Expected: 6
console.log(sol.numJewelsInStones("aA", "aAaZz")); // Expected: 3
console.log(sol.numJewelsInStones("zZ", "zZzZzZ")); // Expected: 6
