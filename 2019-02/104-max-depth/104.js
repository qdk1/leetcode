#!/usr/bin/node
/*
Given a binary tree, find its maximum depth.

The maximum depth is the number of nodes along the longest path from the root node down to the farthest leaf node.

*/
let TreeNode = (val) => ({
	val: val,
	left: null,
	right: null,
});

const maxDepth = (root) => {
    if (root == null) {
        return 0;
    }

    let leftDepth  = 1 + maxDepth(root.left);
    let rightDepth = 1 + maxDepth(root.right);
    return Math.max(leftDepth, rightDepth);
};

let t1 = TreeNode(3);
t1.left = TreeNode(9);
t1.right = TreeNode(20);
t1.right.left = TreeNode(15);
t1.right.right = TreeNode(7);

let actual_output = maxDepth(t1);
let expected_output = 3;
console.log("Actual and expected output", actual_output, expected_output);
