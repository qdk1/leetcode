#!/usr/bin/env python
from typing import List


from functools import reduce
from operator import xor


class Solution:
    def singleNumber(self, nums: List[int]) -> int:
        # return reduce(lambda x, y: x ^ y, nums)
        return reduce(xor, nums)


if __name__ == "__main__":
    A = [1, 2, 3, 9, 1, 2, 3, 5, 5, 6, 6]
    S = Solution()
    want = 9
    got = S.singleNumber(A)
    assert want == got
