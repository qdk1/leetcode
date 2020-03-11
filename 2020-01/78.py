#!/usr/bin/env python

from typing import List


class Solution:
    def subsets2(self, nums: List[int]) -> List[List[int]]:
        result = []
        for i in range(2 ** len(nums)):
            print(f"{i} {i:03b}")
            # 0 000
            # 1 001
            # 2 010
            # 3 011
            # etc.
            subset = []
            for k in range(len(nums)):
                if (i >> k) & 1:
                    subset.append(nums[k])
            result.append(subset)
        return result

    def subsets(self, nums: List[int]) -> List[List[int]]:
        if len(nums) == 1:
            return [[nums[0]], []]

        # without = [s for s in self.subsets(nums[1:])]
        # with_ = [[nums[0]] + s for s in self.subsets(nums[1:])]
        # return without + with_
        answers = []
        for s in self.subsets(nums[1:]):
            answers.append(s)
            answers.append([nums[0]] + s)
        return answers


if __name__ == "__main__":
    A = [1, 2, 3]
    S = Solution()
    got = S.subsets(A)
    print(got)
    got = S.subsets2(A)
    print(got)
