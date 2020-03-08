#!/usr/bin/env python3
from typing import List
import heapq

class Solution:
    def topKFrequent(self, nums: List[int], k: int) -> List[int]:
        seen = { }
        for num in nums:
            if not(num in seen):
                seen[num] = 0
            seen[num] += 1

        return heapq.nlargest(k, seen.keys(), lambda x: seen[x])

s = Solution()
actual_output = s.topKFrequent( [1, 1, 1, 2, 2, 3], 2 )
expected_output = [1, 2]
print("Expecting")
print(expected_output)
print("Actual")
print(actual_output)
print("Same")
print(actual_output == expected_output)
