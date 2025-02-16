class Solution {
  binarySearch(array, target) {
    let left = 0;
    let right = array.length - 1;

    while (left <= right) {
      const middle = Math.floor(left + (right - left) / 2);

      if (array[middle] == target) {
        return middle;
      } else if (array[middle] < target) {
        left = middle + 1;
      } else {
        right = middle - 1;
      }
    }

    return -1;
  }
}

let solution = new Solution();
let myArray = [1, 3, 5, 7, 9];
let target = 7;
let result = solution.binarySearch(myArray, target);
console.log("Element found at index:", result);
