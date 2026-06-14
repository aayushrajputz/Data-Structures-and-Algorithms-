class TreeNode {
    constructor(val) {
        this.val = val;
        this.left = null;
        this.right = null;
    }
}
var rob = function (root) {
    function solve(node) {
        if (node === null) return [0, 0];

        let left = solve(node.left);
        let right = solve(node.right);

        let robbed = node.val + left[0] + right[0];
        let notRobbed = Math.max(left[0], left[1]) + Math.max(right[0], right[1]);

        return [notRobbed, robbed];
    }

    let result = solve(root);
    return Math.max(result[0], result[1]);
};
