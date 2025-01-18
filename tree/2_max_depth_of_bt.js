/*
Given a root node of the binary tree, return the depth (or height) of a binary tree.

The Depth of the binary tree refers to the number of nodes along the longest path from the root node to the farthest leaf node. If the tree is empty, the depth is 0.

Example:
Input: root = [1, 2, 3, 4, 5]
Expected Output: 3
Explanation: The longest path is 1->2->4 or 1->2->5 with 3 nodes.
*/

class TreeNode {
  constructor(val, left = null, right = null) {
    this.val = val;
    this.left = left;
    this.right = right;
  }
}

class Solution {
  maxDepth(root) {
    // Base case: if node is null, return 0
    if (!root) return 0;

    // Recursively calculate left subtree.
    let leftDepth = this.maxDepth(root.left);

    // Recursively calculate right subtree.
    let rightDepth = this.maxDepth(root.right);

    // Return the max of left and right subtree depth, plus 1 for the current node.
    return 1 + Math.max(leftDepth, rightDepth);
  }
}

// Testing the function
const solver = new Solution();

// Example 1
let root1 = new TreeNode(
  1,
  new TreeNode(2, new TreeNode(4), new TreeNode(5)),
  new TreeNode(3),
);
console.log(solver.maxDepth(root1)); // Expected output: 3

// Example 2
let root2 = new TreeNode(1, null, new TreeNode(2, null, new TreeNode(3)));
console.log(solver.maxDepth(root2)); // Expected output: 3
