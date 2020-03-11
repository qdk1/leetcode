#!/usr/bin/env python
from typing import List


# NUMS 1 2 3 4
#        ^
# LEFT 1 1
# LEFT 1 1 2
# LEFT 1 1 2 6

# i = 3
# NUMS[i] = 4
# NUMS[i - 1] = 3
# LEFT[i - 1] = 2

# RIGHT       4 1
# RIGHT    12 4 1
# RIGHT 24 12 4 1
class Solution:
    def productExceptSelf(self, nums: List[int]) -> List[int]:
        lefts = [1] * len(nums)
        rights = [1] * len(nums)
        for i in range(1, len(nums)):
            lefts[i] = lefts[i - 1] * nums[i - 1]
        for j in reversed(range(0, len(nums) - 1)):
            rights[j] = rights[j + 1] * nums[j + 1]
        for i, _ in enumerate(nums):
            nums[i] = lefts[i] * rights[i]
        return nums


if __name__ == "__main__":
    S = Solution()
    got = S.productExceptSelf([1, 2, 3, 4])
    print("Expect [24, 12, 8, 6]")
    print(got)
