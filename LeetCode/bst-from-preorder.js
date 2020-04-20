/**
 * Definition for a binary tree node.
 * function TreeNode(val) {
 *     this.val = val;
 *     this.left = this.right = null;
 * }
 */
function TreeNode(val) {
    this.val = val;
    this.left = null,
        this.right = null;
}
/**
 * @param {number[]} preorder
 * @return {TreeNode}
 */
var bstFromPreorder = function (preorder) {
    let root = new TreeNode(preorder[0]);

    const rec = (node, val, side) => {
        side = node.val > val ? 'left' : 'right';

        if (node[side]) rec(node[side], val, side);
        else node[side] = new TreeNode(val);
    }

    
    for (let i = 1; i < preorder.length; ++i) {
        rec(root, preorder[i], preorder[i] < root.val ? 'left' : 'right');
    }
    
    return root;
};


/**
 * @param {number[]} preorder
 * @return {TreeNode}
 */
var bstFromPreorder2 = function(preorder) {
    var tree = new TreeNode(preorder[0]);
    var putNode = function(val, node){
        if(!node) {
            node = new TreeNode(val);
            return node;
        }
        else{        
            if(val < node.val){
                node.left = putNode(val, node.left);
            } else {
                node.right = putNode(val, node.right);
            }
        }
        return node;
    };
    for(var i = 1; i<preorder.length; i++) {
        tree = putNode(preorder[i], tree);
    }
    
    return tree;
};



// const printLevel = (node) => {
//     if (node === null) {
//         console.log(null);
//         return;
//     }

//     console.log(node.val);
//     printLevel(node.left);
//     printLevel(node.right);
// }
// printLevel(root);



let test = [8, 5, 1, 7, 10, 12];

console.time()
bstFromPreorder2(test);
console.timeEnd()

console.time()
bstFromPreorder(test);
console.timeEnd()


console.time()
bstFromPreorder2(test);
console.timeEnd()


console.time()
bstFromPreorder(test);
console.timeEnd()