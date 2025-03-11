/*
Given an array nums having an n elements, identify the element that appears the majority of the time, meaning more than n/2 times.

Examples
Example 1:

Input: [1, 2, 2, 3, 2]
Expected Output: 2
Justification: Here, '2' appears 3 times in a 5-element array, making it the majority element.
Example 2:

Input: [4, 4, 4, 4, 7, 4, 4]
Expected Output: 4
Justification: '4' is the majority element as it appears 5 out of 7 times.
Example 3:

Input: [9, 9, 1, 1, 9, 1, 9, 9]
Expected Output: 9
Justification: '9' is the majority element, appearing 5 times in an 8-element array.
*/

class Solution {
  // Function to initiate the divide and conquer algorithm
  findMajority(arr) {
    let candidate = null;
    let count = 0;

    // find majority candidate
    for (let num of arr) {
      if (count == 0) {
        candidate = num;
      }

      count += num == candidate ? 1 : -1;
    }

    // verify the candidate by counting its occurences
    let occurences = 0;

    for (let num of arr) {
      if (num == candidate) {
        occurences++;
      }
    }

    // if the candidate appear more than n/2 times, return
    if (occurences > arr.length / 2) {
      return candidate;
    }

    return null;
  }
}

// Test the algorithm with three different inputs
const solution = new Solution();
console.log(solution.findMajority([1, 2, 2, 3, 2])); // Expect 2
console.log(solution.findMajority([4, 4, 4, 4, 7, 4, 4])); // Expect 4
console.log(solution.findMajority([9, 9, 1, 1, 9, 1, 9, 9])); // Expect 9
