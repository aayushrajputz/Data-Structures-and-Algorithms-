function shortest_distance(matrix) {
    let n = matrix.length;
    const INF = 1e9;

    // Phase 1: Pre-process
    for (let i = 0; i < n; i++) {
        for (let j = 0; j < n; j++) {
            if (matrix[i][j] === -1 || matrix[i][j] >= 1e8) {
                matrix[i][j] = INF;
            }
            if (i === j) matrix[i][j] = 0;
        }
    }

    // Phase 2: Triple Loop Engine
    for (let k = 0; k < n; k++) {
        for (let i = 0; i < n; i++) {
            for (let j = 0; j < n; j++) {
                // IMPORTANT: Addition only if path exists (Avoid INF + weight < INF logic)
                if (matrix[i][k] !== INF && matrix[k][j] !== INF) {
                    if (matrix[i][j] > matrix[i][k] + matrix[k][j]) {
                        matrix[i][j] = matrix[i][k] + matrix[k][j];
                    }
                }
            }
        }
    }

    // Phase 3: Post-process
    for (let i = 0; i < n; i++) {
        for (let j = 0; j < n; j++) {
            if (matrix[i][j] >= 1e8) { // Target any huge value including INF
                matrix[i][j] = -1;
            }
        }
    }
}

// Phase 3: Post-process (Restore -1 for GfG Format) 🏔️👑
for (let i = 0; i < n; i++) {
    for (let j = 0; j < n; j++) {
        if (matrix[i][j] >= INF) {
            matrix[i][j] = -1;
        }
    }
}

return matrix;


// TEST CASE FROM YOUR SCREENSHOT (The 4-City Monster!) 🚥🎰🎬
let matrix = [
    [0, -1, 5, 100000000],
    [6, 0, 5, 1],
    [1, 5, 0, 100000000],
    [6, 100000000, 2, 0]
];

shortest_distance(matrix);
console.log("TITAN'S MATRIX RESULT:");
console.log(matrix);
