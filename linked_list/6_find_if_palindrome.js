/*
Given a doubly linked list, determine whether it is a palindrome.

A doubly linked list is a palindrome if it reads the same backward as forward, utilizing the previous and next pointers of the nodes.

Example:

Input: 1 <-> 2 <-> 3 <-> 2 <-> 1
Output: true
Justification: The list reads the same backward as forward.
*/

class DLNode {
  constructor(val, next = null, prev = null) {
    this.val = val;
    this.next = next;
    this.prev = prev;
  }
}

class Solution {
  isPalindrome(head) {
    //If the head of the doubly linked list is null or if there is only one node (head's next is null), return true.
    if (!head || !head.next) return true;

    //Start with the head node and traverse to the end of the list to find the tail node. This is achieved by iterating through the nodes using next pointers until you reach a node where next is null
    let tail = head;
    while (tail.next) tail = tail.next;

    let start = head;
    let end = tail;

    while (start !== end && start.prev !== end) {
      if (start.val !== end.val) return false;
      start = start.next;
      end = end.prev;
    }

    return true;
  }
}

const solution = new Solution();

const head1 = new DLNode(1);
head1.next = new DLNode(2);
head1.next.prev = head1;
head1.next.next = new DLNode(1);
head1.next.next.prev = head1.next;
console.log(solution.isPalindrome(head1)); // Expected: true
