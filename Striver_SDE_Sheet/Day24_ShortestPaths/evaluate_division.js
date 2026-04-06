/**
 * LeetCode 399: Evaluate Division
 * Goal: Calculate division results using transitive relationships.
 * Logic: Floyd-Warshall (Matrix Multiplication version).
 */

var calcEquation = function (equations, values, queries) {
    let map = new Map()
    let id = 0
    for (let [u, v] of equations) {
        if (!map.has(u)) map.set(u, id++)
        if (!map.has(v)) map.set(v, id++)
    }
    let n = map.size
    let matrix = Array(n).fill(0).map(() => Array(n).fill(-1.0))
    for (let i = 0; i < n; i++) matrix[i][i] = 1.0;
    for (let i = 0; i < equations.length; i++) {
        const [u, v] = equations[i];
        const uId = map.get(u), vId = map.get(v);
        matrix[uId][vId] = values[i];
        matrix[vId][uId] = 1.0 / values[i];
    }
    for (let k = 0; k < n; k++) {
        for (let i = 0; i < n; i++) {
            for (let j = 0; j < n; j++) {
                // PRECISION FIX: Only update if matrix[i][j] was unknown (-1.0)
                // This preserves direct edges and more stable paths from being overwritten.
                if (matrix[i][j] === -1.0 && matrix[i][k] !== -1.0 && matrix[k][j] !== -1.0) {
                    matrix[i][j] = matrix[i][k] * matrix[k][j];
                }
            }
        }
    }


    return queries.map(([u, v]) => {
        if (!map.has(u) || !map.has(v)) return -1.0;
        let uId = map.get(u)
        let vId = map.get(v)
        return matrix[uId][vId]
    });
};

let equations = [["a", "b"], ["b", "c"]]
let values = [2.0, 3.0]
let queries = [["a", "c"], ["b", "a"], ["a", "e"], ["a", "a"], ["x", "x"]]

console.log(calcEquation(equations, values, queries));
