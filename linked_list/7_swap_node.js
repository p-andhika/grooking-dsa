/*
Given a singly linked list, swap every two adjacent nodes and return the head of the modified list.

If the total number of nodes in the list is odd, the last node remains in place. Every node in the linked list contains a single integer value.
Example:

Input: [1, 2, 3, 4]
Output: [2, 1, 4, 3]
Justification: Pairs (1,2) and (3,4) are swapped.
 */

class Node {
  constructor(val = 0, next = null) {
    this.val = val;
    this.next = next;
  }
}

class Solution {
  swapPairs(head) {
    let dummy = new Node(0);
    dummy.next = head;
    let previous = dummy;

    while (head && head.next) {
      let firstNode = head;
      let secondNode = head.next;

      firstNode.next = secondNode.next;
      secondNode.next = firstNode;
      previous.next = secondNode;

      head = firstNode.next;
      previous = firstNode;
    }

    return dummy.next;
  }
}
