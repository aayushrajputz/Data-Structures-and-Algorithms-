var findCheapestPrice = function (n, flights, src, dst, k) {
    let adj = Array.from({ length: n }, () => [])
    for (let [u, v, cost] of flights) {
        adj[u].push([v, cost])
    }
    let dist = new Array(n).fill(Infinity)
    dist[src] = 0
    let queue = [[src, 0, 0]]

    while (queue.length > 0) {
        let [node, stops, cost] = queue.shift()
        if (stops > k) continue;
        for (let [neighbor, price] of adj[node]) {
            if (cost + price < dist[neighbor]) {
                dist[neighbor] = cost + price
                queue.push([neighbor, stops + 1, dist[neighbor]])
            }
        }

    }
    return dist[dst] === Infinity ? -1 : dist[dst];
};

// --- TEST CASES ---
const n1 = 4, flights1 = [[0, 1, 100], [1, 2, 100], [2, 0, 100], [1, 3, 600], [2, 3, 200]], src1 = 0, dst1 = 3, k1 = 1;
console.log("TEST 1 (Expected 700):", findCheapestPrice(n1, flights1, src1, dst1, k1));

const n2 = 3, flights2 = [[0, 1, 100], [1, 2, 100], [0, 2, 500]], src2 = 0, dst2 = 2, k2 = 1;
console.log("TEST 2 (Expected 200):", findCheapestPrice(n2, flights2, src2, dst2, k2));



