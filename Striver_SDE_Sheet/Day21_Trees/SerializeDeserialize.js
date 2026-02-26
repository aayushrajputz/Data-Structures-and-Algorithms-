/**
 * MISSION: Serialize and Deserialize a Binary Tree
 * STRATEGY: Level Order Traversal (BFS) 🛡️
 * TARGET: LeetCode Hard / Striver Day 21 🔥
 */

class TreeNode {
    constructor(val) {
        this.val = val;
        this.left = this.right = null;
    }
}

class Codec {
    /**
     * Encodes a tree to a single string.
     */
    serialize(root) {
        if (!root) return "";
        let q = [root];
        let res = [];

        while (q.length > 0) {
            let node = q.shift();
            if (node) {
                res.push(node.val);
                q.push(node.left);
                q.push(node.right);
            } else {
                res.push("n"); // 'n' for null to save space
            }
        }
        return res.join(",");
    }

    /**
     * Decodes your encoded data to tree.
     */
    deserialize(data) {
        if (data === "") return null;
        let vals = data.split(",");
        let root = new TreeNode(parseInt(vals[0]));
        let q = [root];
        let i = 1;

        while (q.length > 0 && i < vals.length) {
            let parent = q.shift();

            // Left Child
            if (vals[i] !== "n") {
                let left = new TreeNode(parseInt(vals[i]));
                parent.left = left;
                q.push(left);
            }
            i++;

            // Right Child
            if (i < vals.length && vals[i] !== "n") {
                let right = new TreeNode(parseInt(vals[i]));
                parent.right = right;
                q.push(right);
            }
            i++;
        }
        return root;
    }
}

// --- BATTLE TEST ---
let codec = new Codec();
let root = new TreeNode(1);
root.left = new TreeNode(2);
root.right = new TreeNode(3);
root.right.right = new TreeNode(4);

let serialized = codec.serialize(root);
console.log("Serialized String:", serialized);

let deserialized = codec.deserialize(serialized);
console.log("Deserialized Root Val:", deserialized.val);
console.log("Deserialized 3's Right Val (Should be 4):", deserialized.right.right.val);
