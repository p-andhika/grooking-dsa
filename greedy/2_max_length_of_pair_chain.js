/*
Given a collection of pairs where each pair contains two elements [a, b] and a < b, find the maximum length of a chain you can form using pairs.

A pair [a, b] can follow another pair [c, d] in the chain if b < c.

You can select pairs in any order and don't need to use all the given pairs.

Examples
Example 1:

Input: [[1,2], [3,4], [2,3]]
Expected Output: 2
Justification: The longest chain is [1,2] -> [3,4]. The chain [1,2] -> [2,3] is invalid because 2 is not smaller than 2.
Example 2:

Input: [[5,6], [1,2], [8,9], [2,3]]
Expected Output: 3
Justification: The chain can be [1,2] -> [5,6] -> [8,9] or [2,3] -> [5,6] -> [8, 9].
Example 3:

Input: [[7,8], [5,6], [1,2], [3,5], [4,5], [2,3]]
Expected Output: 3
Justification: The longest possible chain is formed by chaining [1,2] -> [3,5] -> [7,8].
*/

class Solution {
  // Function to find the maximum length of a pair chain
  findLongestChain(pairs) {
    // sort pairs based on their 2nd element in asc order
    pairs.sort((a, b) => a[1] - b[1]);

    // init variables
    let currentEnd = -Infinity;
    let chainCount = 0;

    // iterate through the sorted pairs
    for (let pair of pairs) {
      // check if the 1st element of pair is greater than the currentEnd
      if (pair[0] > currentEnd) {
        // update the currentEnd and increment the chainCount
        currentEnd = pair[1];
        chainCount++;
      }
    }

    return chainCount; // Return the maximum chain length
  }
}

let sol = new Solution();
// Example Test Cases
console.log(
  sol.findLongestChain([
    [1, 2],
    [3, 4],
    [2, 3],
  ]),
); // Expected Output: 2
console.log(
  sol.findLongestChain([
    [5, 6],
    [1, 2],
    [8, 9],
    [2, 3],
  ]),
); // Expected Output: 3
console.log(
  sol.findLongestChain([
    [7, 8],
    [5, 6],
    [1, 2],
    [3, 5],
    [4, 5],
    [2, 3],
  ]),
); // Expected Output: 3
