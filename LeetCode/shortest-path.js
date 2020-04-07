
function calShortestPath(graph, start, end, path=[]) {
    if (!graph.hasOwnProperty(start)) {
      return [];
    }
    path = path.concat(start);
    if (start == end) {
      return path;
    }
    let shortest = [];
    for (let node of graph[start]) {
      if (path.indexOf(node) == -1) {
        let newPath = calShortestPath(graph, node, end, path);
        if (newPath.length > 0) {
          if ( shortest.length == 0 | (newPath.length < shortest.length) ) {
            shortest = newPath;
          }
        }
      }
    };
    return shortest;
  }