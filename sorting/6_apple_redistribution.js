class Solution {
  // Method to determine the minimum number of boxes required to store all apples
  distributeApples(apples, boxCapacities) {
    // sort box capacities
    boxCapacities.sort((a, b) => a - b);
    let totalApples = apples.reduce((acc, curr) => acc += curr, 0);

    // start from the largest box and substract its capacity from the total apples until all apples are accounted for
    let i = boxCapacities.length - 1;
    while (i >= 0 && totalApples > 0) {
      totalApples -= boxCapacities[i];
      i--
    }

    // the number of boxes used is the difference between the total number of boxes and the remaining boxes
    return boxCapacities.length - i - 1;
  }
}

let sol = new Solution();

// Example 1
let apples1 = [2, 3, 1];
let capacities1 = [4, 2 ,5, 1];
console.log("Example 1: Expected output is 1, Actual output is", sol.distributeApples(apples1, capacities1));

// Example 2
let apples2 = [4, 5, 6];
let capacities2 = [5, 10];
console.log("Example 2: Expected output is 2, Actual output is", sol.distributeApples(apples2, capacities2));

// Example 3
let apples3 = [1, 2, 5, 6];
let capacities3 = [2, 3, 7, 4, 5, 2, 4];
console.log("Example 3: Expected output is 3, Actual output is", sol.distributeApples(apples3, capacities3));
