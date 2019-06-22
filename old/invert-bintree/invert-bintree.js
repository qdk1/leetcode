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
var invertTree = function(root) {
    if (root == null) {
        return null;
    }

    let temp = root.left;
    root.left = invertTree(root.right);
    root.right = invertTree(temp);

    return root;
};

let mid2 = TreeNode(2);
mid2.left = TreeNode(1);
mid2.right = TreeNode(3);

let mid7 = TreeNode(7);
mid7.left = TreeNode(6);
mid7.right = TreeNode(9);

let root = TreeNode(4);
root.left = mid2;
root.right = mid7;

console.log(root);
console.log(invertTree(root));
