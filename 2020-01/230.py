#!/usr/bin/env python


# Definition for a binary tree node.
class TreeNode:
    def __init__(self, x):
        self.val = x
        self.left = None
        self.right = None


class Solution:
    def kthSmallest(self, root: TreeNode, k: int) -> int:

        x = []

        def helper(root: TreeNode):
            if root is None:
                return

            helper(root.left)
            if len(x) >= k:
                return
            x.append(root.val)
            if len(x) >= k:
                return
            helper(root.right)

        helper(root)
        return x[-1]


if __name__ == "__main__":
    print("hi")
    root = TreeNode(50)
    root.left = TreeNode(25)
    root.left.left = TreeNode(10)
    root.left.right = TreeNode(30)
    root.right = TreeNode(75)
    root.right.right = TreeNode(95)

    S = Solution()
    print("Expect 25")
    print(S.kthSmallest(root, 2))
    print("Expect 30")
    print(S.kthSmallest(root, 3))
    print("Expect 50")
    print(S.kthSmallest(root, 4))
