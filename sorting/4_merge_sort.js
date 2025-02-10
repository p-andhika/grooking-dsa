class Solution {
    merge(arr, l, m, r) {
        /**
         * Merges two subarrays of arr[].
         * First subarray is arr[l..m]
         * Second subarray is arr[m+1..r]
         */
        // Calculate the sizes of two subarrays to be merged
        const n1 = m - l + 1;
        const n2 = r - m;

        // Create temporary arrays
        let L = arr.slice(l, m + 1);
        let R = arr.slice(m + 1, r + 1);

        // Merge the temporary arrays back into arr[l..r]
        let i = 0, j = 0, k = l;
        while (i < n1 && j < n2) {
            if (L[i] <= R[j]) {
                arr[k] = L[i];
                i++;
            } else {
                arr[k] = R[j];
                j++;
            }
            k++;
        }

        // Copy the remaining elements of L[], if any
        while (i < n1) {
            arr[k] = L[i];
            i++;
            k++;
        }

        // Copy the remaining elements of R[], if any
        while (j < n2) {
            arr[k] = R[j];
            j++;
            k++;
        }
    }

    sort(arr, l, r) {
        /**
         * Main function that sorts arr[l..r] using merge()
         */
        if (l < r) {
            // Find the middle point to divide the array into two halves
            const m = Math.floor((l + r) / 2);

            // Recursively sort the first and second halves
            this.sort(arr, l, m);
            this.sort(arr, m + 1, r);

            // Merge the sorted halves
            this.merge(arr, l, m, r);
        }
    }

    static printArray(arr) {
        /**
         * Utility function to print an array of size n
         */
        console.log(arr.join(' '));
    }
}

// Driver method to test the Merge Sort algorithm
const arr = [12, 11, 13, 5, 6, 7];
console.log("Given Array");
Solution.printArray(arr);

const ob = new Solution();
ob.sort(arr, 0, arr.length - 1);

console.log("\nSorted array");
Solution.printArray(arr);
