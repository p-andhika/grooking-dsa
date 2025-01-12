/*
Given a sorted linked list, remove all the duplicate elements to leave only distinct numbers. The linked list should remain sorted, and the modified list should be returned.
 
Example 1:
Input: 1 -> 1 -> 2
Output: 1 -> 2
Justification: Since 1 is repeated, we remove the duplicate to leave a sorted list of unique numbers.
Example 2:
Input: 1 -> 2 -> 2 -> 3
Output: 1 -> 2 -> 3
Justification: Here, 2 is the duplicate element, and by removing it, we obtain a list containing only distinct elements.
Example 3:
Input: 3 -> 3 -> 3
Output: 3
Justification: We remove the repeated 3s to leave a single 3 in the list.
 */

class Node {
	constructor(val = 0, next = null) {
		this.val = val;
		this.next = next;
	}
}

class Solution {
	deleteDuplicates(head) {
		let current = head;

		while (current && current.next) {
			if (current.val == current.next.val) {
				current.next = current.next.next;
			} else {
				current = current.next;
			}
		}

		return head;
	}
}

const solution = new Solution();

// Test Example 1
let head1 = new Node(1, new Node(1, new Node(2)));
let result1 = solution.deleteDuplicates(head1); // Expected: 1 -> 2
console.log(result1);
