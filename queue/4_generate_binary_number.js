/*
Given an integer N, generate all binary numbers from 1 to N and return them as a list of strings.

Example 1
Input: N = 2
Output: ["1", "10"]
Explanation: The binary representation of 1 is "1", and the binary representation of 2 is "10".
Example 2
Input: N = 3
Output: ["1", "10", "11"]
Explanation: The binary representation of 1 is "1", the binary representation of 2 is "10", and the binary representation of 3 is "11".
Example 3
Input: N = 5
Output: ["1", "10", "11", "100", "101"]
Explanation: These are the binary representations of the numbers from 1 to 5
*/

class Queue {
  constructor(queue = []) {
    this.items = [...queue];
    this.frontIndex = 0;
  }

  enqueue(element) {
    this.items.push(element);
  }

  dequeue() {
    if (this.isEmpty()) {
      throw new Error('Queue is empty');
    }
    const element = this.items[this.frontIndex];
    this.frontIndex++;

    return element;
  }

  peek() {
    return this.items[this.frontIndex];
  }

  isEmpty() {
    return this.frontIndex >= this.items.length;
  }

  length() {
    return this.items.length - this.frontIndex;
  }
}

class Solution {
  generateBinaryNumbers(n) {
    const res = [];
    const queue = new Queue();
    queue.enqueue('1');

    while (n !== 0) {
      const s1 = queue.dequeue();
      res.push(s1);

      const s2 = s1;
      queue.enqueue(s1 + "0");
      queue.enqueue(s2 + "1");
      n--;
    }

    return res;
  }
}

let sol = new Solution();
// Testing
console.log(sol.generateBinaryNumbers(1));  // Test with n = 2
console.log(sol.generateBinaryNumbers(3));  // Test with n = 3
console.log(sol.generateBinaryNumbers(5));  // Test with n = 5
