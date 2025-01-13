/*
Given the head of two sorted linked lists, l1 and l2.

Return a new sorted list created by merging together the nodes of the first two lists.

Example 1:

Input:
[1, 3, 5]
[2, 4, 6]
Expected Output:
[1, 2, 3, 4, 5, 6]
Justification: Merging the two sorted linked lists, node by node, results in a single sorted linked list containing all elements from both input lists.
*/

class Node {
    constructor(val, next = null) {
        this.val = val;
        this.next = next;
    }
}

class Solution {
  mergeTwoLists(l1, l2) {
    const dummy = new Node(-1);
    let current = dummy;

    while (l1 && l2) {
      if (l1.val < l2.val) {
        current.next = l1;
        l1 = l1.next;
      } else {
        current.next = l2;
        l2 = l2.next;
      }

      current = current.next;
    }

    current.next = l1 || l2;

    return dummy.next;
  }
}

const solution = new Solution();

// Create the first example Node instances
const list1 = new Node(1, new Node(3, new Node(5)));
const list2 = new Node(2, new Node(4, new Node(6)))

const result = solution.mergeTwoLists(list1, list2);

console.log(result);
