class Solution {
  // method to perform selection sort

  selectionSort(arr) {
    for (let i = 0; i < arr.length - 1; i++) {
      let minIndex = i;

      for (let j = i + 1; j < arr.length; j++) {
        if (arr[j] < arr[minIndex]) {
          minIndex = j;
        }
      }

      const temp = arr[minIndex];
      arr[minIndex] = arr[i];
      arr[i] = temp;
    }
  }
}

const solution = new Solution();
const myArray = [64, 25, 12, 22, 11];
// Call the selection sort method
solution.selectionSort(myArray);
// Print the sorted array
console.log(myArray);
