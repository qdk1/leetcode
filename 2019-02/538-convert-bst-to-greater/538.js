#!/usr/bin/node

    /*
let TreeNode = (val) => ({
    val: val,
    left: null,
    right: null,
});
*/
function TreeNode(val) {
    this.val = val;
    this.left = this.right = null;
}

let t1 = new TreeNode(5);
t1.left = new TreeNode(2);
t1.right = new TreeNode(13);
/*
t1.right.right = new TreeNode(99);
t1.right.right.right = new TreeNode(199);
t1.right.right.left = new TreeNode(299);
*/

let convertBST = root => {
    const nodesArray = treeToArray(root);
    return convertBST_R(root, nodesArray);
};

let convertBST_R = (root, nodesArray) => {
    if (root == null) {
        return null;
    }
    let nodesLargerThanMe = nodesArray.filter(x => x > root.val);
    root.val += nodesLargerThanMe.reduce( (x, acc) => x + acc, 0)
    root.left = convertBST_R(root.left, nodesArray);
    root.right = convertBST_R(root.right, nodesArray);
    return root;
};

let treeToArray = (root) => {
    if (root == null) {
        return [];
    };
    return treeToArray(root.left).concat(
        [root.val],
        treeToArray(root.right),
    );
};

console.log(treeToArray(t1));
console.log(convertBST(t1));
