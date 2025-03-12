/*
Given a positive integer N, construct a beautiful array of size N containing the number [1, N] .

An array beautiful if it follows the conditions below.

If for any three indices i, j, k (with i < j < k), A[j] * 2 is not equal to A[i] + A[k].
Examples
Example 1
Input: 4
Expected Output: [2, 1, 4, 3]
Justification: In this array, no combination of i, j, k (where i < j < k) exists such that 2 * A[j] = A[i] + A[k].
Example 2
Input: 3
Expected Output: [1, 3, 2]
Justification: Similar to example 1, this array also satisfies the condition for a smaller size.
Example 3
Input: 8
Expected Output: [1, 5, 3, 7, 2, 6, 4, 8] (or any other permutation that satisfies the condition)
Justification: In this array, for every i, j, k (where i < j < k), 2 * A[j] is never equal to A[i] + A[k]. This output ensures that all integers from 1 to 8 are used, and the condition is met for all possible triplets.
*/

class Solution {
  // Method to construct the beautiful array
  beautifulArray(N) {
    if (N == 1) return [1];

    let odd = this.beautifulArray(Math.ceil(N / 2));
    let even = this.beautifulArray(Math.floor(N / 2));

    let result = new Array(N);

    for (let i = 0; i < odd.length; i++) {
      result[i] = 2 * odd[i] - 1;
    }

    for (let i = 0; i < even.length; i++) {
      result[odd.length + i] = 2 * even[i];
    }

    return result;
  }
}
