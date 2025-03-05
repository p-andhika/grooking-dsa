/*
Given a string s containing 0 to 9 digits, create the largest possible palindromic number using the string characters.

A palindromic number reads the same backward as forward.

If it's not possible to form such a number using all digits of the given string, you can skip some of them.

Examples
Input: "323211444"
Expected Output: "432141234"
Justification: This is the largest palindromic number that can be formed from the given digits.
Input: "998877"
Expected Output: "987789"
Justification: "987789" is the largest palindrome that can be formed.
Input: "54321"
Expected Output: "5"
Justification: Only "5" can form a valid palindromic number as other digits cannot be paired.
*/

class Solution {
  largestPalindromic(num) {
    // count the freq of each digit
    const freq = new Array(10).fill(0);

    // count occurences of each digit in the string
    for (const char of num) {
      freq[parseInt(char)]++;
    }

    // create the first half of the palindrome
    const firstHalf = [];
    let middle = null;

    // traverse digits from 9 to 0 to form the largest possible palindrom
    for (let i = 9; i >= 0; i--) {
      const count = Math.floor(freq[i] / 2); // number of pairs we can form
      if (count > 0) {
        firstHalf.push(i.toString().repeat(count)); // add the pairs to the frist half
      }

      // if the digit has an odd count and we haven't use middle element yet, use it
      if (freq[i] % 2 == 1 && middle == null) {
        middle = i.toString();
      }
    }

    // construct the palindrome
    const firstHalfStr = firstHalf.join("");
    const secondHalfStr = firstHalf.reverse().join("");

    // if there is a middle digit, add it in the center
    if (middle != null) {
      return firstHalfStr + middle + secondHalfStr;
    } else {
      return firstHalfStr + secondHalfStr;
    }
  }
}

const sol = new Solution();
console.log(sol.largestPalindromic("323211444"));
console.log(sol.largestPalindromic("998877"));
console.log(sol.largestPalindromic("54321"));
