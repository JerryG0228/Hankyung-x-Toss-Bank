const graph = {
  1: [2, 3, 4],
  2: [1, 3, 4, 5, 6],
  3: [1, 2, 7],
  4: [1, 2, 5, 6],
  5: [2, 4, 6, 7],
  6: [2, 4, 5, 7],
  7: [3, 5, 6],
};

const startNode = 1;
const targetNode = 6;

function findLongestPath(graph, start, target) {
  const visited = new Set();
  let maxLength = 0;

  function dfs(node, pathLength) {
    if (node === target) {
      maxLength = Math.max(maxLength, pathLength);
      return;
    }

    visited.add(node);

    for (const v of graph[node]) {
      if (!visited.has(v)) {
        dfs(v, pathLength + 1);
      }
    }

    visited.delete(node);
  }

  dfs(start, 0);
  return maxLength;
}

console.log(findLongestPath(graph, startNode, targetNode));
