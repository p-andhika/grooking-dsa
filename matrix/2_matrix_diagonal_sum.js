/*
Given a square matrix (2D array), calculate the sum of its two diagonals.

The two diagonals in consideration are the primary diagonal that spans from the top-left to the bottom-right and the secondary diagonal that spans from top-right to bottom-left. If a number is part of both diagonals (which occurs only for odd-sized matrices), it should be counted only once in the sum.

Example:
Input:
[[1,2,3],
 [4,5,6],
 [7,8,9]]
Expected Output: 25
Justification: Summing up the two diagonals (1+5+9+3+7), we get 25. Please note that the element at [1][1] = 5 is counted only once.
*/

class Solution {
  diagonalSum(mat) {
    let n = mat.length;
    let totalSum = 0;  // Initialize the total sum

    for (let i = 0; i < n; i++) {
      totalSum += mat[i][i] + mat[i][n - i - 1];
    }

    if (n % 2 != 0) {
      totalSum -= mat[Math.floor(n / 2)][Math.floor(n / 2)];
    }

    return totalSum;  // Return the calculated total sum
  }
}
// Test the examples
let sol = new Solution()
console.log(sol.diagonalSum([[1,2,3],[4,5,6],[7,8,9]]));  // Output: 25
console.log(sol.diagonalSum([[1,0],[0,1]]));  // Output: 2
console.log(sol.diagonalSum([[5]]));  // Output: 5
