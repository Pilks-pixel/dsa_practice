// breadth-first search (BFS) implementation
// In BFS, we explore all the neighbors of a node (first degree connections) before moving on to the next level of nodes.
// Find if there is a path from node A to node B
// What is the path from node A to node B

const graph = {
	A: ["B", "C"],
	B: ["D", "E"],
	C: ["F"],
	D: [],
	E: ["F"],
	F: [],
};

console.log(findShortestPath(graph, "A", "F"));

function findShortestPath(graph, start, end) {
	// Create a queue
	const searchQueue = [start];
	const searched = new Set();
	const parents = { [start]: null };

	while (searchQueue.length) {
		const currentNode = searchQueue.shift();
		console.log(currentNode, { searchQueue: [...searchQueue] });
        
		if (currentNode === end) {
            path = [];
            let node = currentNode;
            // Backtrack through current nodes parents to build path
            while (node !== null) {
                path.unshift(node)
                node = parents[node] 
            }
            
			return `shortest path is ${path.join(" -> ")}`;
		} else {
            for (const neighbor of graph[currentNode]) {
                if (!searched.has(neighbor)) {
                    searched.add(currentNode);
                    parents[neighbor] = currentNode;
                    searchQueue.push(neighbor);
				}
			}
		}
	}
	return `no path to end node: ${end} found`;
}
