/*
Determine if a binary tree is height-balanced.

A binary tree is considered height-balanced if, for each node, the difference in height between its left and right subtrees is no more than one.

Example:

Input:
    3
   / \
  9  20
     / \
    15  7
Expected Output: true
Justification: Every node in the tree has a left and right subtree depth difference of either 0 or 1.

Input:
        1
      /   \
     2     2
    / \   / \
   3   3 3   3
  / \       / \
 4   4     4   4
Expected Output: true
Justification: Each node in the tree has a left and right subtree depth difference of either 0 or 1.
*/

class TreeNode {
  constructor(val, left = null, right = null) {
    this.val = val;
    this.left = left;
    this.right = right;
  }
}

class Solution {
  depth(root) {
    if (!root) return 0;

    // calculate depth of left child
    const leftDepth = this.depth(root.left);
    if (leftDepth == -1) return -1;

    // calculate depth of right child
    const rightDepth = this.depth(root.right);
    if (rightDepth == -1) return -1;

    // check if current node is unbalanced
    if (Math.abs(leftDepth - rightDepth) > 1) return -1;

    return Math.max(leftDepth, rightDepth) + 1;
  }

  isBalanced(root) {
    return this.depth(root) !== -1;
  }
}

// Test example 1
const example1 = new TreeNode(3);
example1.left = new TreeNode(9);
example1.right = new TreeNode(20);
example1.right.left = new TreeNode(15);
example1.right.right = new TreeNode(7);

// Test example 2
const example2 = new TreeNode(1);
example2.left = new TreeNode(2);
example2.left.left = new TreeNode(3);
example2.left.left.left = new TreeNode(4);
example2.right = new TreeNode(5);

const solution = new Solution();

console.log(solution.isBalanced(example1)); // Expected output: true
console.log(solution.isBalanced(example2)); // Expected output: fals
