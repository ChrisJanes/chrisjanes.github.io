---
title: Depth First Search
author: Chris Janes
layout: standard
---

# Depth First Search

Depth First Search (DFS) explores a graph without any predefined strategy for choosing the next node beyond depth-first expansion. We can use DFS as a form of exploration, by navigating an otherwise unknown graph, or we can use it to search for a specific node if we do not care about finding the shortest "path" across the graph from the start point to the target node.

This outlines the core of the DFS algorithm:

- Mark the start node as visited.
- Visit an unvisited neighbour and repeat the process.
- If no unvisited neighbours remain, backtrack.
- Continue until all reachable nodes are visited.

## Modifying Node

We can start by adding a `dfs` function to `Graph` - but we need to have a think about what it is we're using DFS for. If we are searching the graph, we want to have something to search for - which usually means either a data value or some other form of identifying the a node. That needs us to go back to `Node` and add something extra; for now, we'll add a name.

### `node.h` <!-- omit from toc -->
```cpp
#include <string>
// ...
class Node {
public:
  Node(const std::string& name) : _name{name} {}
  // ...
  std::string getName() const;

private:
  std::string _name;
}
```

Add a definition for `getName` in `node.cpp` to return the `_name` property. This change has also added a constructor to `Node`, requiring us to provide a name for any Node object we instantiate (as we have specified a constructor, the compiler will no longer generate a default one for us) - so we have to account for that in `Graph`:

### `graph.h` <!-- omit from toc -->
```cpp
#include <string>
// ...
class Graph {
public:
  // ..
  int addNode(const std::string& name);

private:
  // .. 
}
```

### `graph.cpp` <!-- omit from toc -->
```cpp
int Graph::addNode(const std::string& name) {
  _nodes.push_back(new Node(name)); // pass the name into the new node
  return (int)_nodes.size() - 1;
}
```

## Implementing DFS

and with those changes made, we can now implement DFS in `Graph`:

### `graph.h` <!-- omit from toc -->
```cpp
class Graph {
public:
  // ..
  Node* dfs(int startIndex, const std::string& target);

private:
  // .. 
}
```

### `graph.cpp` <!-- omit from toc -->
```cpp
Node* Graph::dfs(int startIndex, const std::string& target) {
  // Mark the start node as visited.
  // Visit an unvisited neighbour and repeat the process.
  // If no unvisited neighbours remain, backtrack.
  // Continue until all reachable nodes are visited.
}
```

To perform a DFS, we need to be able to track our progress through the graph in a way that allows us to "backtrack" easily while not exploring nodes we've already explored. With that in mind, we need a couple of containers; a `stack` to track progress and a `set` to identify which nodes have been *visited*. [std::set](https://en.cppreference.com/w/cpp/container/set) represents a collection of unique objects, they are the code equivalent of a [mathematical set](https://en.wikipedia.org/wiki/Set_(mathematics)) and so are ideal for our needs here.

With those, we can fill out the function:

### `graph.cpp` <!-- omit from toc -->
```cpp
#include <stack>
#include <set>
// ...
Node* Graph::dfs(int startIndex, const std::string& target) {
  std::stack<Node*> frontier;
  std::set<Node*> visited;

  // add the start node to the stack
  auto start = _nodes[startIndex];
  frontier.push(start);

  while(!frontier.empty()) {
    // top() gets us the top element of the stack, pop() then removes it.
    auto current = frontier.top();
    frontier.pop();

    // check if we've found the node we're looking for
    if (current->getName() == target)
      return current;

    if(!visited.contains(current)) {
      visited.insert(current);
      auto connections = current->getConnections();
      
      // iterate over all the connections, adding any unvisited nodes to the stack
      for(auto edge : connections) {
        if(!visited.contains(edge->to)) {
          frontier.push(edge->to);
        }
      }
    }
  }

  // target does not exist in the graph
  return nullptr;
}
```

## Recursive DFS

With that first version of DFS, we are using an explicit stack and iterating over edges - there is an alternative that has a lower space requirement because it does not require the extra stack storage. Instead, it makes use of a recursive function, which give an implicit stack (via the call stack) - both approaches are valid; they will do the same job though probably while visiting graph nodes in differing orders.

However, on a large graph the recursive approach risks overflowing the stack memory (a risk with any recursive approach) and so the iterative approach is often considered to be "safer". With that said, let's add the recursive version - we need to have a way of "starting" the search so we will re-work our `Graph` API quickly:

### `graph.h` <!-- omit from toc -->
```cpp
class Graph {
public:
  // ..
  Node* dfs(int startIndex, const std::string& target, bool useRecursive);

private:
  // .. 
  Node* dfs_iterative(int startIndex, const std::string& target);
  Node* dfs_recursive(Node* node, std::set<Node*>& visited, const std::string& target);
}
```

To maintain encapsulation and abstraction, we've provided a single public interface to both the dfs functions - a "user" of `Graph` just calls `dfs` and they can specify if it should be a recursive search or not with the boolean. We need to move what was in `dfs` into `dfs_iterative` in `graph.cpp` and we'll replace that with the new `dfs` function:


### `graph.cpp` <!-- omit from toc -->
```cpp
// ...
Node* Graph::dfs(int startIndex, const std::string& target, bool useRecursive) {
  if(useRecursive) {
    auto start = _nodes[startIndex];
    std::set<Node*> visited;
    return dfs_recursive(start, visited, target);
  } 

  return dfs_iterative(startIndex, target);
}

Node* Graph::dfs_iterative(int startIndex, const std::string& target) {
  std::stack<Node*> frontier;
  std::set<Node*> visited;

  // ...

  // target does not exist in the graph
  return nullptr;
}
```

The recursive function is actually quite simple; though it can be a little hard to conceptualise how it works (also true of many recursive functions, sadly!).

### `graph.cpp` <!-- omit from toc -->
```cpp
Node* Graph::dfs_recursive(Node* node, std::set<Node*>& visited, const std::string& target)
{
  // found the target so return the node pointer
  if (node->getName() == target)
    return node;

  visited.insert(node);

  auto connections = node->getConnections();

  // iterate over all the connections
  for (auto edge : connections) {
    if (!visited.contains(edge->to)) {
      // recursively call the function with the node this edge points to
      Node* result = dfs_recursive(edge->to, visited, target);

      // if this returns a non-null value, the entire recursive stack "unrolls".
      if (result != nullptr)
        return result;
    }
  }

  // catch the case where the target does not exist in the graph.
  return nullptr;
}
```

## Testing

To see if this works, we need a graph - we can build one in `main.cpp`:

### `main.cpp`
```cpp
int main() {
  Graph graph;

  int a = graph.addNode("A");
  int b = graph.addNode("B");
  int c = graph.addNode("C");
  int d = graph.addNode("D");

  graph.connectNodes(a, b, 1); // 0 to 1
  graph.connectNodes(b, d, 1); // 1 to 3
  graph.connectNodes(d, d, 1); // 3 to 3
  graph.connectNodes(a, c, 1); // 0 to 2
  graph.connectNodes(b, c, 1); // 1 to 2
  graph.connectNodes(c, a, 1); // 2 to 0

  auto result = graph.dfs(0, "D", true);
}
```

**Task:** Get the Graph and Node classes implemented and once the project compiles, use the debugger to work through the recursive search - use pen and paper to sketch the graph out and plot how the nodes are visited. Try a bigger graph with more nodes.

**Task:** Try a variety of different graph setups, what happens if the graph is disconnected (i.e. there are two separate "islands" of nodes)? What happens if the target node is not in the graph? What if there are cycles present? Think ahead and see if the code will handle these cases, if not, consider how to modify it to do so.