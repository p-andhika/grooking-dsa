/*
Given a string, determine the length of the longest palindrome that can be constructed using the characters from the string. You don't need to return the palindrome itself, just its maximum possible length.

Example

Input: "applepie"
Expected Output: 5
Justification: The longest palindrome that can be constructed from the string is "pepep", which has a length of 5. There are are other palindromes too but they all will be of length 5.
Input: "aabbcc"
Expected Output: 6
Justification: We can form the palindrome "abccba" using the characters from the string, which has a length of 6.
Input: "bananas"
Expected Output: 5
Justification: The longest palindrome that can be constructed from the string is "anana", which has a length of 5.
*/

class Solution {
  longestPalindrome(s) {
    const charFreq = {};

    // populate characters frequencies
    for (let c of s) {
      charFreq[c] = (charFreq[c] || 0) + 1;
    }

    let length = 0;
    let oddFound = false;

    // calculate the palindrom length
    for (const freq of Object.values(charFreq)) {
      if (freq % 2 == 0) {
        length += freq;
      } else {
        length += freq - 1;
        oddFound = true;
      }
    }

    // add the central character if any odd frequency was found
    if (oddFound) length += 1;

    return length;
  }
}

// Test the solution
let sol = new Solution();
console.log(sol.longestPalindrome("bananas")); // Expected output: 5
console.log(sol.longestPalindrome("applepie")); // Expected output: 5
console.log(sol.longestPalindrome("racecar")); // Expected output: 7
