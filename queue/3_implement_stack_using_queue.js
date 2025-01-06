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
  // Constructor to initialize the queues
  constructor() {
      // ToDo: Write Your Code Here.
      this.q1 = new Queue();
      this.q2 = new Queue();
  }

  // Push element x onto the stack
  push(x) {
    this.q2.enqueue(x);

    while (!this.q1.isEmpty()) {
      this.q2.enqueue(this.q1.dequeue());
    }

    let temp = this.q1;
    this.q1 = this.q2;
    this.q2 = temp;
  }

  // Pop element from the stack
  pop() {
     return this.q1.dequeue();
  }

  // Get the top element
  top() {
      return this.q1.peek();
  }

  // Check if the stack is empty
  empty() {
      return this.q1.isEmpty();
  }
}

// Main method to test the stack implementation
const myStack = new Solution();
myStack.push(5);
myStack.push(10);
console.log(myStack.pop()); // 10
console.log(myStack.top()); // 5
console.log(myStack.pop()); // 5
console.log(myStack.empty()); // true
