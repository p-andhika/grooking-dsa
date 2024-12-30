/*
Given a binary matrix that has dimensions , consisting of ones and zeros, determine the row that contains the highest number of ones and return two values: the zero-based index of this row and the actual count of ones it possesses.

If there is a tie, i.e., multiple rows contain the same maximum number of ones, we must select the row with the lowest index.

Example:

Example 1:

Input: [[1, 0], [1, 1], [0, 1]]
Expected Output: [1, 2]
Justification: The second row [1, 1] contains the most ones, so the output is [1, 2].

Example 2:

Input: [[0, 1, 1], [0, 1, 1], [1, 1, 1]]
Expected Output: [2, 3]
Justification: The third row [1, 1, 1] has the most ones, leading to the output [2, 3].
*/

class Solution {
  findMaxOnesRow(mat) {
    let maxOnesIdx = 0;
    let maxOnesCount = 0;

    for (let i = 0; i < mat.length; i++) {
      const totalOnes = mat[i].reduce((acc, num) => acc + num, 0);

      if (totalOnes > maxOnesCount) {
        maxOnesIdx = i;
        maxOnesCount = totalOnes;
      }
    }

    return [maxOnesIdx, maxOnesCount];
  }
}

const solution = new Solution();
console.log(solution.findMaxOnesRow([[1, 0], [1, 1], [0, 1]])); // expected [1,2]
console.log(solution.findMaxOnesRow([[0, 1, 1], [0, 1, 1], [1, 1, 1]])); //expected [2, 3]
console.log(solution.findMaxOnesRow([[1, 0, 1], [0, 0, 1], [1, 1, 0]])); //expected [0, 2]
