/*
Given a Binary Search Tree (BST), you are required to find the smallest difference between the values of any two different nodes.

In a BST, the nodes are arranged in a manner where the value of nodes on the left is less than or equal to the root, and the value of nodes on the right is greater than the root.

Example

Example 1:

Input:
    4
   / \
  2   6
 / \
1   3
Expected Output: 1
Justification: The pairs (1,2), (2,3), or (3,4) have the smallest difference of 1.

Example 2:

Input:
    10
   /  \
  5   15
 / \    \
2   7    18
Expected Output: 2
Justification: The pair (5,7) has the smallest difference of 2.
*/

class TreeNode {
  constructor(val, left = null, right = null) {
    this.val = val;
    this.left = left;
    this.right = right;
  }
}

class Solution {
  constructor() {
    this.nodes = [];
  }

  inorderTraversal(node) {
    if (node == null) return;

    this.inorderTraversal(node.left); // visit left subtree recursively.
    this.nodes.push(node.val); // add current node's value.
    this.inorderTraversal(node.right); // visit left subtree recursively.
  }

  minDiffInBST(root) {
    this.nodes = [];

    this.inorderTraversal(root);

    let minDiff = Number.MAX_SAFE_INTEGER;

    for (let i = 1; i < this.nodes.length; i++) {
      minDiff = Math.min(minDiff, this.nodes[i] - this.nodes[i - 1]);
    }

    return minDiff;
  }
}

// Test cases
let example1 = new TreeNode(
  4,
  new TreeNode(2, new TreeNode(1), new TreeNode(3)),
  new TreeNode(6),
);
let example2 = new TreeNode(
  40,
  null,
  new TreeNode(70, new TreeNode(50), new TreeNode(90)),
);
let solution = new Solution();

console.log(solution.minDiffInBST(example1)); // Expected output: 1
console.log(solution.minDiffInBST(example2)); // Expected output: 10 (because difference between 40 and 50 is 10)
