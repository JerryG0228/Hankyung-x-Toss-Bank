const graph = {
  A: ["E", "C", "B"],
  B: ["A"],
  C: ["A"],
  D: ["E", "F"],
  E: ["D", "A"],
  F: ["D"],
};

function dfs(graph, start, visited = new Set()) {
  visited.add(start);

  for (const neighbor of graph[start]) {
    if (!visited.has(neighbor)) {
      dfs(graph, neighbor, visited);
    }
  }
  
  if (visited.size === Object.keys(graph).length) return visited;
}

const res = dfs(graph, "E");
console.log(...res);
