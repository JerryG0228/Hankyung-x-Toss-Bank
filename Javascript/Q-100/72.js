let graph = {
  E: ["D", "A"],
  F: ["D"],
  A: ["E", "C", "B"],
  B: ["A"],
  C: ["A"],
  D: ["E", "F"],
};

function bfs(gp, root) {
  let visited = [];
  let queue = [root];

  while (queue.length) {
    let n = queue.shift();

    if (!visited.includes(n)) {
      visited.push(n);
      queue.push(...gp[n].filter((v) => !visited.includes(v)));
    }
  }

  return visited;
}

const res = bfs(graph, "E");
console.log(res);
