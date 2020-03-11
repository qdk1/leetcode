#!/usr/bin/env python

from typing import List

from collections import Counter
import heapq


# 10
# 12
# 13
# 14

#


class Solution:
    def topKFrequent(self, nums: List[int], k: int) -> List[int]:
        h = []
        heapq.heapify(h)

        counts = Counter(nums)
        for (num, count) in counts.items():
            heapq.heappush(h, (count, num))
            if len(h) > k:
                heapq.heappop(h)

        print(f"Done processing, heap looks like {h}")
        return [num for (count, num) in h]


if __name__ == "__main__":
    nums = [1, 1, 1, 2, 2, 3]
    S = Solution()
    got = S.topKFrequent(nums, 2)
    want = [1, 2]
    print(f"got {got} want {want}")
    assert got == want
