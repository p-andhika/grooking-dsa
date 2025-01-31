/*
You're presented with several piles of gifts, with each pile containing a certain number of gifts. Every second, you'll engage in the following activity:

Pick the pile that contains the highest number of gifts. If multiple piles share this distinction, you can select any of them.
Compute the square root of the number of gifts in the selected pile, and then leave behind that many gifts (rounded down). Take all the other gifts from this pile.
You'll do this for "k" seconds. The objective is to find out how many gifts would still remain after these "k" seconds.

Example

Input: gifts = [4, 9, 16], k = 2
Expected Output: 11
Justification:
Take from third pile (16 gifts): leave (  ) = 4 gifts, take 12. Remaining gifts = [4, 9, 4]
Take from second pile (9 gifts): leave (  ) = 3 gifts, take 6. Remaining gifts = [4, 3, 4]

Input: gifts = [1, 2, 3], k = 1
Expected Output: 4
Justification:
Take from third pile (3 gifts): leave (  ) = 1 gift (rounded down), take 2. Remaining gifts = [1, 2, 1]

Input: gifts = [25, 36, 49], k = 3
Expected Output: 18
Justification:
Take from third pile (49 gifts): leave (  ) = 7 gifts, take 42. Remaining gifts = [25, 36, 7]
Take from second pile (36 gifts): leave (  ) = 6 gifts, take 30. Remaining gifts = [25, 6, 7]
Take from first pile (25 gifts): leave (  ) = 5 gifts, take 20. Remaining gifts = [5, 6, 7]

*/

class Solution {
  remainingGifts(gifts, k) {
    // Convert the gifts array into a negative values array and sort in ascending order.
    // This makes the highest values be at the beginning, emulating a max heap
    //const maxHeap = gifts.map((gift) => -gift).sort((a, b) => a - b);
    const maxHeap = gifts.sort((a, b) => b - a);

    for (let i = 0; i < k; i++) {
      // Remove the first element (the highest negative value) from the array,
      // making it positive again to get the original gift count
      const current = maxHeap.shift();

      // Push the remaining number of gifts (after taking some) back into the array
      // as a negative value.
      maxHeap.push(Math.floor(Math.sqrt(current)));

      // Re-sort the array to maintain the heap property.
      maxHeap.sort((a, b) => b - a);
    }

    // Calculate the sum of the remaining gifts. The use of `-` in front of the
    // reduce function inverts the negative values while summing them up.
    return maxHeap.reduce((a, b) => a + b, 0);
  }
}

// Test cases
const sol = new Solution();
console.log(sol.remainingGifts([4, 9, 16], 2)); // Expected: 11
console.log(sol.remainingGifts([1, 2, 3], 1)); // Expected: 4
console.log(sol.remainingGifts([25, 36, 49], 3)); // Expected: 18
