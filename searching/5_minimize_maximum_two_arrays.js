/*
Given divisor1, divisor2, uniqueCnt1, and uniqueCnt2 integers, find the smallest possible maximum integer that could be present in either array after they are filled according to the below conditions.

You can take two arrays arr1 and arr2 which are initially empty.
arr1 contains total uniqueCnt1 different positive integers, each of them is not divisible by divisor1.
arr2 contains total uniqueCnt2 different positive integers, each of them is not divisible by divisor2.
There are no common integers in both arrays.

Example

Example 1:

Input: uniqueCnt1 = 2, divisor1 = 2, uniqueCnt2 = 2, divisor2 = 3
Expected Output: 4
Explanation: The optimal arrays could be arr1 = [1, 3] (numbers not divisible by 2) and arr2 = [2, 4] (numbers not divisible by 3). The maximum number among both arrays is 4.
Example 2:

Input: uniqueCnt1 = 3, divisor1 = 3, uniqueCnt2 = 4, divisor2 = 4
Expected Output: 7
Explanation: Possible arrays are arr1 = [1, 2, 4] and arr2 = [3, 5, 6, 7]. The highest integer used is 7.
Example 3:

Input: uniqueCnt1 = 1, divisor1 = 7, uniqueCnt2 = 1, divisor2 = 10
Expected Output: 2
Explanation: We can use arr1 = [1] (since it's not divisible by 7) and arr2 = [2] (since it's not divisible by 10). The highest integer here is 2.
*/

class Solution {
  // calculate the gcd (greatest common divisor)
  gcd(a, b) {
    if (b == 0) return a;

    return this.gcd(b, a % b);
  }

  // Function to minimize the maximum value in the two sets based on given conditions
  minimizeSet(divisor1, divisor2, uniqueCnt1, uniqueCnt2) {
    // setting initial search bound
    let low = uniqueCnt1 + uniqueCnt2;
    let high = divisor1 * divisor2 * uniqueCnt1 * uniqueCnt2;

    // calculate the LCM (least common multiple)
    let lcm = (divisor1 * divisor2) / this.gcd(divisor1, divisor2);

    // binary seach
    while (low <= high) {
      let mid = Math.floor((low + high) / 2);
      let countBoth = Math.floor(mid / lcm); // number divisible by both divisor1 and divisor2

      // check if current mid satisfy conditions
      if (
        mid - countBoth >= uniqueCnt1 + uniqueCnt2 &&
        mid - mid / divisor1 >= uniqueCnt1 &&
        mid - mid / divisor2 >= uniqueCnt2
      ) {
        high = mid - 1; // adjust high to find smaller max
      } else {
        low = mid + 1; // adjust low to find feasible max
      }
    }

    return low;
  }
}

let solution = new Solution();

// Test Example 1
console.log("Output for Example 1:", solution.minimizeSet(2, 3, 2, 2)); // Expected Output: 4

// Test Example 2
console.log("Output for Example 2:", solution.minimizeSet(3, 4, 3, 4)); // Expected Output: 7

// Test Example 3
console.log("Output for Example 3:", solution.minimizeSet(7, 10, 1, 1)); // Expected Output: 2
