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
    let newNode = new Node(data);
    if (this.rear === null) {
      this.front = this.rear = newNode;
    } else {
      this.rear.next = newNode;
      this.rear = newNode;
    }
    this.size++;
  }

  dequeue() {
    if (this.front === null) {
      return null
    }

    let temp = this.front;
    this.front = this.front.next;

    if (this.front === null) {
      this.rear = null;
    }

    this.size--;
    return temp.data;
  }

  peek() {
    if (this.front === null) {
      return null
    }

    return this.front.data;
  }

  isEmpty() {
    return this.size === 0;
  }

  getSize() {
    return this.size;
  }

}

const queue = new Queue();

queue.enqueue(1);
queue.enqueue(2);
queue.enqueue(3);

console.dir(queue, {depth: null});
console.log('dequeue ==> ',queue.dequeue());
console.log(queue.peek());
console.log(queue.getSize());
console.dir(queue, {depth: null});
