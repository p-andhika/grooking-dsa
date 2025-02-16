/*

Given a list of time intervals during which meetings are scheduled, determine the minimum number of meeting rooms that are required to ensure that none of the meetings overlap in time.

Example

Example 1:

Input: [[10, 15], [20, 25], [30, 35]]
Expected Output: 1
Justification: There are no overlapping intervals in the given list. So, only 1 meeting room is enough for all the meetings.
Example 2:

Input: [[10, 20], [15, 25], [24, 30]]
Expected Output: 2
Justification: The first and second intervals overlap, and the second and third intervals overlap as well. So, we need 2 rooms.
Example 3:

Input: [[10, 20], [20, 30]]
Expected Output: 1
Justification: The end time of the first meeting is the same as the start time of the second meeting. So, one meeting can be scheduled right after the other in the same room.

*/

class Solution {
  minMeetingRooms(intervals) {
    if (intervals.length == 0) return 0;

    // sort meeting in increasing order of start time
    intervals.sort((a, b) => a[0] - b[0]);

    // initialize heap (priority queue) to store the end times of meetings
    const heap = [];

    // add end time of the first meeting
    heap.push(intervals[0][1]);

    // iterate through the rest of the meetings
    for (let i = 1; i < intervals.length; i++) {
      // if the room with the earlieat end time is free, reuse it
      if (heap[0] <= intervals[i][0]) {
        heap.shift(); // pop the smallest element (the earlieat end time)
      }

      // add current meeting's end time to the heap
      heap.push(intervals[i][1]);

      // ensure the heap is in sorted order by end times
      heap.sort((a, b) => a - b);
    }

    return heap.length;
  }
}

// Test
let sol = new Solution();
console.log(
  sol.minMeetingRooms([
    [10, 15],
    [20, 25],
    [30, 35],
  ]),
); // 1
console.log(
  sol.minMeetingRooms([
    [10, 20],
    [15, 25],
    [24, 30],
  ]),
); // 2
console.log(
  sol.minMeetingRooms([
    [10, 20],
    [20, 30],
  ]),
); // 1
