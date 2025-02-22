/*
Given string s, determine whether it's possible to make a given string palindrome by removing at most one character.

A palindrome is a word or phrase that reads the same backward as forward.

Examples
Example 1:

Input: "racecar"
Expected Output: true
Justification: The string is already a palindrome, so no removals are needed.
Example 2:

Input: "abccdba"
Expected Output: true
Justification: Removing the character 'd' forms the palindrome "abccba".
Example 3:

Input: "abcdef"
Expected Output: false
Justification: No single character removal will make this string a palindrome.
*/

class Solution {
  // helper method to check if a substring is a palindrome
  isPalindrome(s, left, right) {
    while (left < right) {
      if (s[left++] !== s[right--]) {
        return false;
      }
    }

    return true;
  }

  // Method to check if it's possible to form a palindrome
  isPalindromePossible(s) {
    let left = 0,
      right = s.length - 1;

    while (left < right) {
      if (s[left] !== s[right]) {
        // check if substring is a palindrome
        return (
          this.isPalindrome(s, left + 1, right) ||
          this.isPalindrome(s, left, right - 1)
        );
      }

      left++;
      right--;
    }

    return true;
  }
}

// Testing the algorithm with example inputs
const solution = new Solution();
console.log(solution.isPalindromePossible("racecar")); // true
console.log(solution.isPalindromePossible("abccdba")); // true
console.log(solution.isPalindromePossible("abcdef")); // false
