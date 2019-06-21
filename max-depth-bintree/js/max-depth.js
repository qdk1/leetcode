#!/usr/bin/node

/**
 * Definition for a binary tree node.
 * function TreeNode(val) {
 *     this.val = val;
 *     this.left = this.right = null;
 * }
 */

function TreeNode(val) {
    return {val: val, left: null, right: null};
}

/**
 * @param {TreeNode} root
 * @return {number}
 */
var maxDepth = function(root) {
    if (root == null) {
        return 0;
    }

    let leftD  = maxDepth(root.left);
    let rightD = maxDepth(root.right);
    return 1 + Math.max(leftD, rightD);
};

let mid20 = TreeNode(20);
mid20.left = TreeNode(15);
mid20.right = TreeNode(7);

let root = TreeNode(3);
root.left = TreeNode(9);
root.right = mid20;

console.log(maxDepth(root));
