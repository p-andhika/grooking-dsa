class Solution {
  bubbleSort(arr) {
    let swapped;

    for (let i = 0; i < arr.length - 1; i++) {
      swapped = false;

      for (let j = 0; j < arr.length - 1 - i; j++) {
        if (arr[j] > arr[j + 1]) {
          [arr[j], arr[j + 1]] = [arr[j + 1], arr[j]];
          swapped = true;
        }
      }

      if (!swapped) break;
    }
  }
}

let solution = new Solution();
let myArray = [34, 25, 12, 22, 11];
solution.bubbleSort(myArray);
// Print the sorted array
console.log(myArray);
