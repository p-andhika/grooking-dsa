/*
Given a binary search tree (BST) and a target number, find a node value in the BST that is closest to the given target. If there are multiple answers, print the smallest.

A BST is a tree where for every node, the values in the left subtree are smaller than the node, and the values in the right subtree are greater.

Example:

Example 1:
Input: Target: 6.4, Tree:
       5
     /   \
    3     8
   / \   / \
  1   4 6   9
Expected Output: 6
Justification: The values 6 and 8 are the closest numbers to 6.4 in the tree. Among them, 6 is closer.
Example 2:
Input: Target: 25, Tree:
       20
     /    \
    10     30
Expected Output: 20
Justification: 20 and 30 are the closest numbers to 25. However, 20 is smaller than 30. So, 20 is selected as an output.
*/

class TreeNode {
  constructor(val) {
    this.val = val; // Value stored in the node.
    this.left = null; // Reference to the left child.
    this.right = null; // Reference to the right child.
  }
}

class Solution {
  closestValue(root, target) {
    let closest_val = root.val;

    while (root) {
      if (Math.abs(target - root.val) < Math.abs(target - closest_val)) {
        closest_val = root.val;
      }

      if (target < root.val) {
        root = root.left;
      } else {
        root = root.right;
      }
    }

    return closest_val;
  }
}

// Test the solution
const example1 = new TreeNode(5);
example1.left = new TreeNode(3);
example1.left.left = new TreeNode(1);
example1.left.right = new TreeNode(4);
example1.right = new TreeNode(8);
example1.right.left = new TreeNode(6);
example1.right.right = new TreeNode(9);

const solution = new Solution();

// Test the closestValue function with the target value 7.4.
console.log(solution.closestValue(example1, 6.4)); // Expected output: 6
