/*
Given an absolute file path in a Unix-style file system, simplify it by converting ".." to the previous directory and removing any "." or multiple slashes. The resulting string should represent the shortest absolute path.

Example:
1.
   Input: "/a//b////c/d//././/.."
   Output: "/a/b/c"

2.
   Input: "/../"
   Output: "/"

3.
   Input: "/home//foo/"
   Output: "/home/foo"
*/

class Solution {
  simplifyPath(path) {

    const stack = [];

    path.split('/').forEach((item) => {
      if (item === '..') {
        if (stack.length > 0) {
          stack.pop();
        }
      } else if (item && item != '.') {
        stack.push(item);
      }
    })

    return '/' + stack.join('/');
  }
}

let sol = new Solution();

// Test cases
console.log(sol.simplifyPath("/a//b////c/d//././/..")); // Expected output: "/a/b/c"
console.log(sol.simplifyPath("/../")); // Expected output: "/"
console.log(sol.simplifyPath("/home//foo/")); // Expected output: "/home/foo
