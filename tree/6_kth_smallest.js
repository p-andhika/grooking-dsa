/*
Given a root node of the Binary Search Tree (BST) and integer 'k'. Return the Kth smallest element among all node values of the binary tree.

Example

Example 1:
Input:

    8
   / \
  3   10
 / \    \
1   6    14
   /  \  /
  4   7  13
k = 4
Expected Output: 6
Justification: The in-order traversal of the tree is [1, 3, 4, 6, 7, 8, 10, 13, 14]. The 4th element in this sequence is 6.

Example 2:
Input:

    5
   / \
  2   6
 /
1
k = 3
Expected Output: 5
Justification: The in-order traversal of the tree is [1, 2, 5, 6]. The 3rd element in this sequence is 5.
*/

class TreeNode {
  constructor(x) {
    this.val = x; // Value of the node.
    this.left = null; // Reference to the left child.
    this.right = null; // Reference to the right child.
  }
}

class Solution {
  constructor() {
    // keep track of the number of nodes we've traversed.
    this.count = 0;

    // hold our final answer.
    this.result = 0;
  }

  traverse(node, k) {
    // node is null or we've already traversed k nodes, return.
    if (!node || this.count >= k) {
      return;
    }

    // first, traverse the left subtree.
    this.traverse(node.left, k);

    // increment the counter for the current node.
    this.count++;

    // if we've traversed exactly k nodes, that's our result.
    if (this.count == k) {
      this.result = node.val;
    }

    // finally, traverse right subtree.
    this.traverse(node.right, k);
  }

  kthSmallest(root, k) {
    this.traverse(root, k);

    return this.result;
  }
}

// Testing
const example1 = new TreeNode(8);
example1.left = new TreeNode(3);
example1.left.left = new TreeNode(1);
example1.left.right = new TreeNode(6);
example1.left.right.left = new TreeNode(4);
example1.left.right.right = new TreeNode(7);
example1.right = new TreeNode(10);
example1.right.right = new TreeNode(14);
example1.right.right.left = new TreeNode(13);

const solution = new Solution();
// Test the kthSmallest method.
console.log(solution.kthSmallest(example1, 4)); // Expected output: 6
