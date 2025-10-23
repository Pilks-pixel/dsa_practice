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

console.log(findShortestPath(graph, "A", "F"));

function findShortestPath(graph, start, end) {
	const visited = new Set();
	const distances = {};
	const nodes = Object.keys(graph);
	const parents = { [start]: null };

	// Set distances to Infnity if unknown
	for (const node of nodes) {
		distances[node] = Infinity;
	}
	distances[start] = 0;

	// Visit each Vetrice (Loop over), choosing the shortest distance to each neighbour each time

	while (nodes.length) {
		// sorts nodes to get shortest distance
		nodes.sort((a, b) => distances[a] - distances[b]);
		const closestNode = nodes.shift();

		visited.add(closestNode);
		if (distances[closestNode] === Infinity) break;

		for (const neighbour in graph[closestNode]) {
			// Only unvisited vertrices
			if (visited.has(neighbour)) continue;

			// update distance if new distance is smaller than current
			const newDistance =
				distances[closestNode] + graph[closestNode][neighbour];

			if (newDistance < distances[neighbour]) {
				distances[neighbour] = newDistance;
				parents[neighbour] = closestNode;
			}
		}
	}

	// backtrack to return optimal path
	const path = [end];
	getParent(end);
	console.log(path.join(" => "));

	function getParent(node) {
		const parent = parents[node];
		if (parent === null) return;
		path.unshift(parent);
		getParent(parent);
	}

	return  { 
    distances, 
    path: path.join(" => "),
    distance: distances[end]
};
}
