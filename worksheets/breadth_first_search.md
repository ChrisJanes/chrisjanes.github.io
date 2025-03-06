---
title: Breadth First Search
author: Chris Janes
layout: standard
---

# Breadth First Search

BFS is similar to Depth First Search but rather than going as far into a branch as it can, it checks against all the nodes adjacent to the current node first. By using a queue, it maintains the order of nodes to ensure it completely explores one "level" of the graph before going deeper (so further away from the starting node). It will find the path with the fewest edges to every node in the graph from a given start point; this may not be the "cheapest" path to that node as BFS does not factor in edge weights / costs.

## Modifying Node

To get a path out of a traversal we need to be able to represent the backlinks between nodes. We do that by adding a parent property to the `Node` class and a pair of get and set functions to manage it:

### `node.h` <!-- omit from toc -->
```cpp
#include <string>
// ...
class Node {
public:
  // ...
  void setParent(Node* parent);
  Node* getParent() const;

private:
  Node* _parent{nullptr};
  // ...
}
```

These new functions need to be given suitable definitions in `node.cpp`:

### `node.cpp` <!-- omit from toc -->
```cpp
void Node::setParent(Node* parent) {
  _parent = parent;
}

Node* Node::getParent() const {
  return _parent;
}
```

## Implementing BFS

With `Node` modified suitably, we can add a `bfs` function to `Graph`:

### `graph.h` <!-- omit from toc -->
```cpp
class Graph {
public:
  // ...
  Node* bfs(int startIndex, const std::string& target);
  // ...
};
```

Which we can then implement in `graph.cpp`:

### `graph.cpp` <!-- omit from toc -->
```cpp
#include <queue>
// ... 
Node* Graph::bfs(int startIndex, const std::string& target) {
  std::queue<Node*> frontier;
  std::set<Node*> visited;

  // find the start node and add it to the frontier queue
  Node* start = _nodes[startIndex];
  frontier.push(start);

  while (!frontier.empty()) {
    auto current = frontier.front();
    frontier.pop();

    // return the node if it's the target
    if (current->getName() == target)
      return current;

    // add any unvisited connections to the queue
    auto connections = current->getConnections();
    for (auto connection : connections)
    {
      auto next = connection->to;
      if (!visited.contains(next))
      {
        visited.insert(next);
        // set the parent to current so we can trace the path back
        next->setParent(current);
        frontier.push(next);
      }
    }
  }

  return nullptr;
}
```

We have to be a little careful if our algorithm sets a value on a node; we need to ensure that it is reset before we run the algorithm again. This is because the parent value is used to trace the path back to the start node, so if we don't reset it, we will get the path from the last search rather than the current one. To reset it (or any other values) we can add a `reset` function to the `Node` class:

### `node.h` <!-- omit from toc -->
```cpp
class Node {
public:
  // ...
  void reset();
  // ...
};
```

And implement it in `node.cpp`:

### `node.cpp` <!-- omit from toc -->
```cpp
void Node::reset() {
  _parent = nullptr;
}
```

We can then call this function on all nodes in the graph before running the BFS algorithm:

### `graph.cpp` <!-- omit from toc -->
```cpp
Node* Graph::bfs(int startIndex, const std::string& target) {
  std::queue<Node*> frontier;
  std::set<Node*> visited;

  for (auto node : _nodes) {
    node->reset();
  }
  // ...
}
```

## Testing BFS

We can test this function by adding to `main.cpp` and calling it:

### `main.cpp` <!-- omit from toc -->
```cpp
int main() {
  // ...

  result = graph.bfs(c, "B");

  if (result != nullptr) {
    std::cout << "found node: " << result->getName() << '\n';
  }
  else {
    std::cout << "failed to find specified node with bfs\n";
  }
}
```

**Task:** Implement a function to print the path from the target node back to the start node in `main`. You will have to make use of `getParent()` to do this. It will come out in reverse order, consider how you could reverse it to get the path from start to target.

**Task:** Try testing the BFS function with a larger graph - try doubling the number of nodes and increasing connections. Check it works in the same way as you did with DFS. What about other edge cases like disconnected nodes? 

**Task:** For both DFS and BFS, what happens if you provide an invalid start node index? How could you handle this? Try it out and see what happens - then try to fix it!