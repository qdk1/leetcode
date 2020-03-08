#!/usr/bin/node
/*

*/

/**
 * Definition for a binary tree node.
 * function TreeNode(val) {
 *     this.val = val;
 *     this.left = this.right = null;
 * }
 */

let TreeNode = (val) => ({
	val: val,
	left: null,
	right: null,
});

/**
 * @param {TreeNode} t1
 * @param {TreeNode} t2
 * @return {TreeNode}
 */
var mergeTrees = function(t1, t2) {
    if (t1 == null) {
        return t2;
    }
    if (t2 == null) {
        return t1;
    }
    // Modify T1 to be the merged tree
    t1.val += t2.val;
    t1.left = mergeTrees(t1.left, t2.left);
    t1.right = mergeTrees(t1.right, t2.right);
    return t1;
};


let t1 = TreeNode(1);
t1.left = TreeNode(3);
t1.left.left = TreeNode(5);
t1.right = TreeNode(2);

let t2 = TreeNode(2);
t2.left = TreeNode(1);
t2.left.right = TreeNode(4);
t2.right = TreeNode(3);
t2.right.right = TreeNode(7);

console.log(t1);
console.log(t2);

let actual_output = mergeTrees(t1, t2);
console.log("Actual output", actual_output);
