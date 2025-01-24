let graph = {
  A: ["B", "C"],
  B: ["A", "D", "E"],
  C: ["A", "F"],
  D: ["B"],
  E: ["B", "F"],
  F: ["C", "E"],
};

function bfs(graph, root) {
  let visited = [];
  let queue = [root];

  while (queue.length) {
    let n = queue.shift();

    if (!visited.includes(n)) {
      visited.push(n);
      queue.push(...graph[n].filter((v) => !visited.includes(v)));
    }
  }

  return visited;
}

console.log(...bfs(graph, "E"));
