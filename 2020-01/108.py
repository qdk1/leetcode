#!/usr/bin/env python

# Definition for a binary tree node.
class TreeNode:
    def __init__(self, x):
        self.val = x
        self.left = None
        self.right = None


from typing import List


class Solution:
    def sortedArrayToBST(self, nums: List[int]) -> TreeNode:
        a = 0
        b = len(nums) - 1

        def helper(i, j):
            # print(f"{i} {j}")
            if i > j or i >= len(nums) or j < 0:
                # print("   returning none")
                return None

            mid = (i + j + 1) // 2
            # print(f"  continuing {nums[mid]}")
            node = TreeNode(nums[mid])
            node.left = helper(i, mid - 1)
            node.right = helper(mid + 1, j)
            return node

        return helper(a, b)


if __name__ == "__main__":
    nums = [-10, -3, 0, 5, 9]
    root = Solution().sortedArrayToBST(nums)
    print("Root should be 0")
    print(root.val)
    print("Left should be -3")
    print(root.left.val)
    print("Right should be 9")
    print(root.right.val)
