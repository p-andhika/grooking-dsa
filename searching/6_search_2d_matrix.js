/*
Given a 2D grid of size m x n matrix containing integers, and integer target, return true if target value exists in the matrix. Otherwise, return false.

The matrix has the following properties:

Values in each column are sorted in non-decreasing order from top to bottom.
Values in each row are sorted in non-decreasing order from left to right.

Example 1:

Input: target = 5, matrix =
[[1,2,3],
 [4,5,6],
 [7,8,9]]
Expected Output: true
Justification: The number 5 is located in the second row and second column of the matrix, thus the output is true.
Example 2:

Input: target = 19, matrix =
[[10,11,12,13],
 [11,12,13,17],
 [14,19,22,24],
 [22,23,24,25]]
Expected Output: true
Justification: 19 is present in the third row and second column, confirming its presence in the matrix.
Example 3:

Input: target = 6, matrix =
[[1,3,5],
 [7,9,11],
 [13,15,17]]
Expected Output: false
Justification: 6 does not appear anywhere in the matrix, so the function should return false.

*/

class Solution {
  // Searches for target value in a matrix
  searchMatrix(matrix, target) {
    if (!matrix || matrix.length == 0 || matrix[0].length == 0) return false;

    let row = 0;
    let col = matrix[0].length - 1;

    while (row < matrix.length && col >= 0) {
      const current = matrix[row][col];

      if (current == target) {
        return true;
      } else if (current > target) {
        col--;
      } else {
        row++;
      }
    }

    return false;
  }
}

const solution = new Solution();

// Example 1
const matrix1 = [
  [1, 2, 3],
  [4, 5, 6],
  [7, 8, 9],
];
console.log(solution.searchMatrix(matrix1, 5)); // true

// Example 2
const matrix2 = [
  [10, 11, 12, 13],
  [11, 12, 13, 17],
  [14, 19, 22, 24],
  [22, 23, 24, 25],
];
console.log(solution.searchMatrix(matrix2, 19)); // true

// Example 3
const matrix3 = [
  [1, 3, 5],
  [7, 9, 11],
  [13, 15, 17],
];
console.log(solution.searchMatrix(matrix3, 6)); // false
