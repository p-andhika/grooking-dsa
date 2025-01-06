/*
Given a queue containing integer elements, return the updated queue after reversing its elements.

Example:

Example 1
Input: queue = [1, 2, 3, 4, 5]
Expected Output: [5, 4, 3, 2, 1]
Explanation: The input queue elements are reversed.
Example 2
Input: queue = [10, 20, 30, 40, 50]
Expected Output: [50, 40, 30, 20, 10]
Explanation: The input queue elements are reversed.
Example 3
Input: queue = [5, 7, 12, 2, 4, 5]
Expected Output: [5, 4, 2, 12, 7, 5]
Explanation: The input queue elements are reversed.
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

    const element = this.items.shift();
    // or by using index;
    // const element = this.items[this.frontIndex];
    // this.frontIndex++;

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
  reverseQueue(queue) {
    const stack = [];

    while (!queue.isEmpty()) {
      stack.push(queue.dequeue());
    }

    while (stack.length > 0) {
      queue.enqueue(stack.pop());
    }

    return queue;
  }
}

// Create an instance of the Queue class.
let queue = new Queue();
// Add some elements to the queue.
queue.enqueue(1);
queue.enqueue(2);
queue.enqueue(3);
queue.enqueue(4);
queue.enqueue(5);

// Create an instance of the Solution class.
const solution = new Solution();

// Call the method to reverse the order of elements in the queue.
solution.reverseQueue(queue);

// Log the reversed queue to the console.
if (!queue.isEmpty()) {
  console.log(queue)
}
