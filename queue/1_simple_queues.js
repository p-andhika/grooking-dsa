class Node {
  constructor(data) {
    this.data = data;
    this.next = null;
  }
}

class Queue {
  constructor() {
    this.front = null;
    this.rear = null;
    this.size = 0;
  }

  // Add an element to the rear (back) of the queue
  enqueue(data) {
    const newNode = new Node(data);

    if (this.front === null) {
      this.front = this.rear = newNode;
    } else {
      this.rear.next = newNode;
      this.rear = newNode
    }

    this.size++;
  }

  // Remove an element from the front of the queue
  dequeu() {
    if (this.front === null) {
      return null;
    }

    const temp = this.front;
    this.front = this.front.next;

    if (this.front === null) {
      this.rear = null;
    }

    this.size--;
    return temp.data;
  }

  // Get the front element of the queue
  peek() {
    if (this.front === null) {
      return null;
    }

    return this.front.data;
  }

  // Check if the queue is empty
  isEmpty() {
    return this.size === 0;
  }

  // Get the number of elements in the queue
  getSize() {
      return this.size;
  }
}

const queue = new Queue();
console.log("🚀 ~ queue:", queue, '\n');


queue.enqueue('front');
console.log("🚀 ~ queue:", queue, '\n');

queue.enqueue('mid');
console.log("🚀 ~ queue:", queue, '\n');

queue.enqueue('rear');
console.log("🚀 ~ queue:", queue, '\n');

const dequeu = queue.dequeu();
console.log("🚀 ~ dequeu:", dequeu, '\n');
console.log("🚀 ~ dequeu:", queue, '\n');

const peek = queue.peek();
console.log("🚀 ~ peek:", peek, '\n');
console.log("🚀 ~ dequeu:", queue, '\n');
