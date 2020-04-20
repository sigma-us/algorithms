/**
 * Definition for a binary tree node.
 * function TreeNode(val) {
 *     this.val = val;
 *     this.left = this.right = null;
 * }
 */
/**
 * @param {TreeNode} root
 * @return {number}
 */
var diameterOfBinaryTree = function (root) {
    if (!root) return 0;
    return Math.max(recursion(root.left) + recursion(root.right), (Math.max(diameterOfBinaryTree(root.right), diameterOfBinaryTree(root.left))))
};

let recursion = (node) => {
    if (!node) return 0;

    return (1 + Math.max(recursion(node.left), recursion(node.right)))
}




var diameterOfBinaryTree2 = function(root) {
    let count = 0
    const dfs = (root) => {
        if (root === null) return 0;
        const left = dfs(root.left);
        const right = dfs(root.right);
        count = Math.max(count, left + right);
        return Math.max(left, right) + 1;
    }
    dfs(root);
    console.log(root);
    return count;
};

function TreeNode(val) {
    this.val = val;
    this.left = null,
    this.right = null;
}


let test = new TreeNode(1);
test.left = new TreeNode(2);
test.right = new TreeNode(3);
test.left.left = new TreeNode(4);
test.left.right = new TreeNode(5);
test.left.left.right = new TreeNode(7);
test.left.left.right.left = new TreeNode(6);
test.left.right.left = new TreeNode(8);
test.left.right.right = new TreeNode(9);
test.left.right.right.right = new TreeNode(10);


console.log(diameterOfBinaryTree2(test));