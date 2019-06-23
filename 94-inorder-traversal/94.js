#!/usr/bin/node
/*
*/
let TreeNode = (val) => ({
	val: val,
	left: null,
	right: null,
});

var inorderTraversal = function(root) {
    if (root == null) {
        return [];
    }
    return inorderTraversal(root.left)
        .concat(root.val)
        .concat(inorderTraversal(root.right));
};

let t1 = TreeNode(1);
t1.right = TreeNode(2);
t1.right.left = TreeNode(3);


let actual_output = inorderTraversal(t1);
let expected_output = [1, 3, 2];
console.log("Actual and expected output", actual_output, expected_output);
