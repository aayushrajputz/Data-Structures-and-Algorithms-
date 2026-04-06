/**
 * LeetCode 1462: Course Schedule IV
 * Goal: Determine if u is a prerequisite of v (Transitive Closure)
 * Using Floyd-Warshall Logic: O(N^3)
 */

var checkIfPrerequisite = function (numCourses, prerequisites, queries) {
    let matrix = Array(numCourses).fill(0).map(() => Array(numCourses).fill(false))
    for (let [u, v] of prerequisites) {
        matrix[u][v] = true;
    }
    for (let k = 0; k < numCourses; k++) {
        for (let i = 0; i < numCourses; i++) {
            for (let j = 0; j < numCourses; j++) {
                matrix[i][j] = matrix[i][j] || (matrix[i][k] && matrix[k][j])
            }
        }
    }

    return queries.map(([u, v]) => matrix[u][v]);

};

// Example Test Case:
// let numCourses = 2;
// let prerequisites = [[1,0]];
// let queries = [[0,1],[1,0]];
// Output: [false,true]
