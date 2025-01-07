/*
Given two 1d vectors, implement an iterator to return their elements alternately.

Implement the Solution class:

Solution(List<int> v1, List<int> v2) is a constructor.
int next() returns the current element of the iterator and moves the iterator to the next element.
boolean hasNext() returns true if the iterator still has elements, and false otherwise.

Example 1
Input: V1 = [1,2], v2 = [3,4,5,6]
Expected Output: [1,3,2,4,5,6]
Explanation: The elements will be returned in [1,3,2,4,5,6] order when we make v1.size() + v2.size() number of calls to the next() method.
Example 2
Input: V1 = [1, 2, 3, 4], v2 = [5,6]
Expected Output: [1,5,2,6,3,4]
Explanation: The elements will be returned in [1,5,2,6,3,4] order when we make v1.size() + v2.size() number of calls to the next() method.
Example 3
Input: V1 = [1, 2], v2 = []
Expected Output: [1,2]
Explanation: The elements will be returned in [1, 2] order when we make v1.size() + v2.size() number of calls to the next() method.
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
  constructor(v1, v2) {
    this.queue = new Queue();

    if (v1.length !== 0) this.queue.enqueue([v1, 0])
    if (v2.length !== 0) this.queue.enqueue([v2, 0])
  }

  next() {
    const [arr, index] = this.queue.dequeue();
    const value = arr[index];

    if (index < arr.length - 1) {
      this.queue.enqueue([arr, index + 1]);
    }

    return value;
  }

  hasNext() {
    return !this.queue.isEmpty();
  }
}

function main() {
  // Create an instance of the Solution class with two input arrays.
  let i = new Solution([1, 2], [3, 4, 5, 6]);
  console.log(i.next());  // returns 1
  console.log(i.next());  // returns 3
  console.log(i.next());  // returns 2
  console.log(i.next());  // returns 4
  console.log(i.next());  // returns 5
  console.log(i.next());  // returns 6
  console.log(i.hasNext());  // returns False
}

main();
