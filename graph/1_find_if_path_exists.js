/*
Given an undirected graph, represented as a list of edges. Each edge is illustrated as a pair of integers [u, v], signifying that there's a mutual connection between node u and node v.

You are also given starting node start, and a destination node end, return true if a path exists between the starting node and the destination node. Otherwise, return false.

Example

Input: n = 4, edges = [[0,1],[1,2],[2,3]], start = 0, end = 3

0 ---- 1
       |
       |
       |
3 ---- 2

Expected Output: true
Justification: There's a path from node 0 -> 1 -> 2 -> 3.
*/

class Solution {
  constructor() {
    this.visited = []; // To keep track of visited nodes
  }

  validPath(n, edges, start, end) {
    const graph = [];

    // initialize graph
    for (let i = 0; i < n; i++) {
      graph[i] = [];
    }

    // populate graph from the edges
    for (const edge of edges) {
      graph[edge[0]].push(edge[1]);
      graph[edge[1]].push(edge[0]); // because it's an undirected graph
    }

    this.visited = Array(n).fill(false);

    return this.dfs(graph, start, end);
  }

  dfs(graph, node, end) {
    if (node == end) return true;

    this.visited[node] = true;

    // traverse neighbours
    for (const neighbours of graph[node]) {
      if (!this.visited[neighbours] && this.dfs(graph, neighbours, end)) {
        return true;
      }
    }

    return false; // path not found
  }
}

const sol = new Solution();
console.log(
  sol.validPath(
    4,
    [
      [0, 1],
      [1, 2],
      [2, 3],
    ],
    0,
    3,
  ),
); // true
onsole.log(
  sol.validPath(
    4,
    [
      [0, 1],
      [2, 3],
    ],
    0,
    3,
  ),
); // false
console.log(
  sol.validPath(
    5,
    [
      [0, 1],
      [3, 4],
    ],
    0,
    4,
  ),
); // false
