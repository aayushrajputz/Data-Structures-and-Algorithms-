// LeetCode 1311. Get Watched Videos by Your Friends
// YOUR CODE HERE - Write it yourself!

var watchedVideosByFriends = function (watchedVideos, friends, id, level) {
    let n = friends.length;
    let visited = new Array(n).fill(false)
    let queue = [id]
    visited[id] = true
    for (let i = 0; i < level; i++) {
        let nextQueue = []
        for (let node of queue) {
            for (let friend of friends[node]) {
                if (!visited[friend]) {
                    visited[friend] = true
                    nextQueue.push(friend)
                }
            }
        }
        queue = nextQueue
    }
    let count = new Map()
    for (let friendID of queue) {
        for (let videos of watchedVideos[friendID]) {
            count.set(videos, (count.get(videos) || 0) + 1)
        }
    }
    let keys = [...count.keys()]
    keys.sort((a, b) => count.get(a) - count.get(b) || a.localeCompare(b))
    return keys
}

// TEST CASES
const w1 = [["A", "B"], ["C"], ["B", "C"], ["D"]];
const f1 = [[1, 2], [0, 3], [0, 3], [1, 2]];
console.log("TEST 1 (Expected ['B','C']):", watchedVideosByFriends(w1, f1, 0, 1));
console.log("TEST 2 (Expected ['D']):", watchedVideosByFriends(w1, f1, 0, 2));
