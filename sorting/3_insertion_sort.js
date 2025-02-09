class Solution {
  insertionSort(arr) {
    for (let i = 1; i < arr.length; i++) {
      const key = arr[i];
      let j = i - 1;

      while (j >= 0 && arr[j] > key) {
        arr[j + 1] = arr[j];
        j--;
      }

      arr[j + 1] = key;
    }
  }
}

let solution = new Solution();
let myArray = [22, 16, 12, 15, 29, 39];
solution.insertionSort(myArray);
console.log(myArray);
