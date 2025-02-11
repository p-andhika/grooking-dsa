class Solution {
  // Function to perform the partition
  partition(arr, low, high) {
      let pivot = arr[high];
      let i = low - 1; // Index of smaller element

      for (let j = low; j < high; j++) {
          // If current element is smaller than or equal to pivot
          if (arr[j] <= pivot) {
              i++;

              // Swap arr[i] and arr[j]
              [arr[i], arr[j]] = [arr[j], arr[i]];
          }
      }

      // Swap arr[i+1] and arr[high] (or pivot)
      [arr[i + 1], arr[high]] = [arr[high], arr[i + 1]];

      return i + 1;
  }

  // The main function that implements QuickSort
  quickSort(arr, low, high) {
      if (low < high) {
          // pi is partitioning index, arr[pi] is now at right place
          let pi = this.partition(arr, low, high);

          // Recursively sort elements before partition and after partition
          this.quickSort(arr, low, pi - 1);
          this.quickSort(arr, pi + 1, high);
      }
  }
}

let solution = new Solution();
let myArray = [10, 80, 30, 90, 40, 50, 70];
solution.quickSort(myArray, 0, myArray.length - 1);
console.log("Sorted array:", myArray);
