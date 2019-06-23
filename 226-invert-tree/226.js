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
var invertTree = function(t1) {
    if (t1 == null) {
        return null;
    }

    let tmp = t1.left;
    t1.left = t1.right;
    t1.right = tmp;

    t1.left = invertTree(t1.left);
    t1.right = invertTree(t1.right);
    return t1;
};


let t1 = TreeNode(4);
t1.left = TreeNode(2);
t1.left.left = TreeNode(1);
t1.left.right= TreeNode(3);
t1.right = TreeNode(7);
t1.right.left = TreeNode(6);
t1.right.right = TreeNode(9);

console.log(t1);

let actual_output = invertTree(t1);
console.log("Actual output", actual_output);
