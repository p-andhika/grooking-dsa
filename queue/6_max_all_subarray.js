/*
Given an integer array arr and an integer k, return the result list containing the maximum for each and every contiguous subarray of size k.

In other words, result[i] = max(arr[0],..., arr[k]), result[1] = max(arr[1],...arr[k+1]), etc.

Example 1
Input: arr = [1, 2, 3, 1, 4, 5, 2, 3, 6], k = 3
Output: [3, 3, 4, 5, 5, 5, 6]
Description: Here, subarray [1,2,3] has maximum 3, [2,3,1] has maximum 3, [3,1,4] has maximum 4, [1,4,5] has maximum 5, [4,5,2] has maximum 5, [5,2,3] has maximum 5, and [2,3,6] has maximum 6.
Example 2
Input: arr = [8, 5, 10, 7, 9, 4, 15, 12, 90, 13], k = 4
Output: [10, 10, 10, 15, 15, 90, 90]
Description: Here, the maximum of each subarray of size 4 are 10, 10, 10, 15, 15, 90, 90 respectively.
Example 3
Input: arr = [12, 1, 78, 90, 57], k = 3
Output: [78, 90, 90]
Description: Here, the maximum of each subarray of size 3 are 78, 90, and 90 respectively.
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

  // Get the front element of the deque without removing it
  getFront() {
      if (this.isEmpty()) {
          throw new Error("Deque is empty");
      }
      return this.items[this.front];
  }

  // Get the rear element of the deque without removing it
  getRear() {
      if (this.isEmpty()) {
          throw new Error("Deque is empty");
      }
      return this.items[this.rear - 1];
  }

  // Check if the deque is empty
  isEmpty() {
      return this.front === this.rear;
  }

  // Get the size of the deque
  size() {
      return this.rear - this.front;
  }

  // Clear the deque
  clear() {
      this.items = [];
      this.front = 0;
      this.rear = 0;
  }
}

class Solution {
  printMax(arr, k) {
    const result = [];
    const dq = new Deque();
    const n = arr.length;

    for (let i = 0; i < n; i++) {
      while (!dq.isEmpty() && arr[i] >= arr[dq.getRear()]) {
        dq.removeRear();
      }

      dq.addRear(i);

      if (dq.getFront() < i - k + 1) {
        dq.removeFront();
      }

      if (i >= k - 1) {
        result.push(arr[dq.getFront()]);
      }
    }

    return result;
  }
}

// Create an instance of the Solution class.
let solution = new Solution();

// Call the 'printMax' method and store the result.
console.log(solution.printMax([1, 2, 3, 1, 4, 5, 2, 3, 6], 3));
