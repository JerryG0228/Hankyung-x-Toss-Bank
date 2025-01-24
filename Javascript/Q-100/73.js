const graph = {
  A: ["B", "C"],
  B: ["A", "D", "E"],
  C: ["A", "F"],
  D: ["B"],
  E: ["B", "F"],
  F: ["C", "E"],
};

const startNode = "A";
const targetNode = "F";

function findShortestPath(graph, start, target) {
  const queue = [[start, 0]];
  const visited = new Set();

  while (queue.length) {
    const [node, distance] = queue.shift();

    if (node === target) {
      return distance;
    }

    if (!visited.has(node)) {
      visited.add(node);
      for (const v of graph[node]) {
        if (!visited.has(v)) {
          queue.push([v, distance + 1]);
        }
      }
    }
  }

  return -1;
}

console.log(findShortestPath(graph, startNode, targetNode));
