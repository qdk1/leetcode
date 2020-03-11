#!/usr/bin/env python

# from collections import Counter

# class Solution:
#     def containsDuplicate(self, nums: List[int]) -> bool:
#         c = Counter(nums)
#         return any(1 for (num, count) in c.items() if count > 1)


class Solution:
    def containsDuplicate(self, nums: List[int]) -> bool:
        seen = set()
        for num in nums:
            if num in seen:
                return True
            seen.add(num)
        return False
