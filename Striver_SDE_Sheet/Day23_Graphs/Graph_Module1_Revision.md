# 🕸️ Graph Module 1: Revision Notes

### 1. Undirected Cycle (BFS/DFS)
- **Key**: Always track the `parent`.
- **Logic**: If we reach a `visited` node that is **NOT** the parent of the current node, then a cycle exists.

### 2. Directed Cycle (DFS)
- **Key**: `visited` (global) + `pathVisited` (current recursion stack).
- **Logic**: If we hit a node that is already in `pathVisited`, it's a cycle.
- **Backtrack**: Always set `pathVisited[node] = false` when returning.

### 3. Number of Islands
- **Key**: Grid traversal.
- **Optimization**: Set `grid[r][c] = '0'` after visiting to save space ($O(1)$ extra space).

### 4. Kahn's Algorithm (Topo Sort BFS)
- **Key**: `inDegree` (incoming arrows).
- **Steps**: 
  1. Add all nodes with `inDegree == 0` to Queue.
  2. While Queue not empty:
     - Pop `u`, add to `ans`.
     - For each neighbor `v`: `inDegree[v]--`.
     - If `inDegree[v] == 0`, push `v` to Queue.

### 5. Cycle Detection (Directed BFS)
- **Key**: Use Kahn's Algorithm.
- **Logic**: If `ans.length < V`, there is a cycle (because cycle nodes never reach `inDegree == 0`).
