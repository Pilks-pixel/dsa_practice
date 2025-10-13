// Define a graph
var graph = {
	A: { B: 5, C: 2 },
	B: { A: 5, C: 8, D: 4, E: 2 },
	C: { A: 2, B: 8, E: 7 },
	D: { B: 4, C: 1, E: 6, F: 3 },
	E: { B: 2, C: 1, D: 6, F: 1 },
	F: { D: 3, E: 1 },
};
console.log(graph);

console.log(findShortestPath(graph, "A"));

function findShortestPath(graph, start) {
	const nodes = Object.keys(graph);
	let distances = {};
	let visited = new Set();

	// Set all unknown distances to Infinity
	for (const node of nodes) {
		distances[node] = Infinity;
	}
	distances[start] = 0;

	while(nodes.length) {
		// get the closest node on each iteration
		nodes.sort((a,b) => distances[a] - distances[b])
		nodes.shift()
		console.log({closestNode});

		if (closestNode === Infinity) break;
		visited.add(closestNode)

		for (const neighbor in graph[closestNode]) {
			
			if (!visited.has(neighbor)) {
				const newDistance = distances[closestNode] + graph[closestNode][neighbor]
				if (newDistance < distances[neighbor]) {
				distances[neighbor] = newDistance
				}

			}
		}

	}

	return distances
}
