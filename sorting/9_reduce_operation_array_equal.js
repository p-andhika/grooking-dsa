/*
Given an array of integers nums, return the number of operations required to make all elements in nums equal. To perform one operation, you can follow the below steps:

Select the maximum element of nums. If there are multiple occurrences of the maximum element, choose the element which has lowest index i.
Select the second largest element of nums.
Replace the element at index i with the second largest element.

Example

Example 1:

Input: [3, 5, 5, 2]
Expected output: 5
Justification:
The largest element is 5. Reducing both 5s to 3 requires two operations.
Update array will be [3, 3, 3, 2].
Three more operations are needed to reduce the 3 to 2. The updated array will be [2, 2, 2, 2].
A total five operations make all elements equal to 2.

Example 2:

Input: [11, 9, 7, 5, 3]
Expected output: 10
Justification:
Each number needs to be reduced stepwise to the next smaller number until all are equal to the smallest number 3.
1 operation is required to convert 11 to 9. The updated array will be [9, 9, 7, 5, 3].
2 operations are required to convert 9 to 7. The updated array will be [7, 7, 7, 5, 3].
3 operations are required to convert 7 to 5. The updated array will be [5, 5, 5, 5, 3].
4 operations are required to convert 5 to 3. The updated array will be [3, 3, 3, 3, 3].
Tota numbers of operations: 1 + 2 + 3 + 4 = 10.

Example 3:

Input: [8, 8, 8, 8]
Expected output: 0
Justification: All elements are already equal, so no operations are needed.
*/

class Solution {
  // Method to calculate the minimum number of operations to reduce the array
  reductionOperations(nums) {
    nums.sort((a, b) => a - b); // sort the array in ascending order
    let operations = 0, count = 1;

    for (let i = nums.length - 1; i > 0; i--) { // loop from the end of array
      if (nums[i] !== nums[i - 1]) {
        operations += count;
      }

      count++;
    }

    return operations;
  }
}

const solution = new Solution();
// Test cases
console.log(solution.reductionOperations([3, 5, 5, 2])); // 5
console.log(solution.reductionOperations([11, 9, 7, 5, 3])); // 10
console.log(solution.reductionOperations([8, 8, 8, 8])); // 0
