/*
Given a Binary Search Tree (BST) and a range defined by two integers, L and R, calculate the sum of all the values of nodes that fall within this range. The node's value is inclusive within the range if and only if L <= node's value <= R.

Example

Example 1:

Input:

Tree: 
   10
  /  \
 5   15
/ \   \
3   7   18
Range: [7, 15]
Expected Output: 32

Justification: The values that fall within the range [7, 15] are 7, 10, and 15. Their sum is 7 + 10 + 15 = 32.

Example 2:

Input:

Tree:
   20
  /  \
 5   25
/ \   
3   10
Range: [3, 10]
Expected Output: 18

Justification: The values within the range [3, 10] are 3, 5, and 10. Their sum is 3 + 5 + 10 = 18.
*/

class TreeNode {
  constructor(val) {
    this.val = val;
    this.left = null;
    this.right = null;
  }
}

class Solution {
  rangeSumBST(root, L, R) {
    // base case
    if (!root) return 0;

    // if the current node value is out of the range on the higher side
    if (root.val > R) {
      return this.rangeSumBST(root.left, L, R);
    }

    // if the current node value is out of the range on the lower side
    if (root.val < L) {
      return this.rangeSumBST(root.right, L, R);
    }

    // current node value is in the range, include it and check both children
    return (
      root.val +
      this.rangeSumBST(root.left, L, R) +
      this.rangeSumBST(root.right, L, R)
    );
  }
}

// Test using the examples provided
const example1 = new TreeNode(10);
example1.left = new TreeNode(5);
example1.left.left = new TreeNode(3);
example1.left.right = new TreeNode(7);
example1.right = new TreeNode(15);
example1.right.right = new TreeNode(18);

const solution = new Solution();
console.log(solution.rangeSumBST(example1, 7, 15)); // Expected output: 3
