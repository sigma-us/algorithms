def shortest_path(graph, start, end, path=[]):
    if start not in graph.keys():
        return None
    path = path + [start]
    if start == end:
        return path
    shortest = None
    for node in graph[start]:
        if node not in path:
            new_path = shortest_path(graph, node, end, path)
            if new_path:
                if not shortest or len(new_path) < len(shortest):
                    shortest = new_path
    return shortest