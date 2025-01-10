/*

Given a string s, determine if that string is a palindrome using a queue data structure. Return true if the string is a palindrome. Otherwise, return false.

A palindrome is a word, number, phrase, or other sequence of characters that reads the same forward and backward, ignoring spaces, punctuation, and capitalization.

Example 1
Input: s = "madam"
Output: true
Explanation: The word "madam" reads the same forwards and backwards.
Example 2
Input: s = "openai"
Output: false
Explanation: The word "openai" does not read the same forwards and backwards.
Example 3
Input: s = "A man a plan a canal Panama"
Output: true
Explanation: The phrase "A man a plan a canal Panama" reads the same forwards and backwards when we ignore spaces and capitalization.

*/

class Deque {
  constructor() {
      this.items = [];
      this.front = 0;
      this.rear = 0;
  }

  // Add an element to the rear of the deque
  addRear(element) {
      this.items[this.rear++] = element;
  }

  // Remove and return the element from the front of the deque
  removeFront() {
      if (this.isEmpty()) {
          throw new Error("Deque is empty");
      }
      return this.items[this.front++];
  }

  // Remove and return the element from the rear of the deque
  removeRear() {
      if (this.isEmpty()) {
          throw new Error("Deque is empty");
      }
      return this.items[--this.rear];
  }

  // Check if the deque is empty
  isEmpty() {
      return this.front === this.rear;
  }

  // Get the size of the deque
  size() {
      return this.rear - this.front;
  }
}

class Solution {
  checkPalindrome(s) {
    s = s.replace(/[^a-zA-Z0-9]/g, '').toLowerCase();
    const dq = new Deque();

    for (let i = 0; i < s.length; i++) {
      dq.addRear(s[i]);
    }

    while (dq.size() > 1) {
      if (dq.removeFront() != dq.removeRear()) return false;
    }

    return true;
  }
}

let sol = new Solution();
console.log(sol.checkPalindrome('madam'));  // returns: true
console.log(sol.checkPalindrome('openai'));  // returns: false
console.log(sol.checkPalindrome('A man a plan a canal Panama'));  // returns: true
