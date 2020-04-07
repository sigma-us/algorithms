const levelOrderTraversal = (tree) => {
    let len = tree.length;
    let i = 1;
    let ans = [[tree[0]]];
    let x = 2;

    for (i; i < len; i += x) {
        let row = [];
        for (let j = i; tree[j]; j++) {
            row.push(tree[j]);
        }
        x *= 2;
        ans.push(row);
    }

    return ans;
}


const levelOrderTraversal2 = (tree) => {
    let len = tree.length;
    let i = 1;
    let ans = [[tree[0]]];
    let x = 2;

    for (i; i < len; i += x) {
        let row = [];
        for (let j = i; tree[j]; j++) {
            row.push(tree[j]);
        }
        x *= 2;
        ans.push(row);
    }

    return ans;
}



const t1 = [3, 9, 20, null, null, 15, 7, 10, 9, 8, 7, null, null];
const t2 = {
    val: 3,
    left: { val: 9, left: null, right: null },
    right: {
        val: 20,
        left: { val: 15, left: null, right: null },
        right: { val: 7, left: null, right: null }
    }
}

console.log(levelOrderTraversal(t1));