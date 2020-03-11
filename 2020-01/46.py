#!/usr/bin/env python

from typing import List


class Solution:
    def permute(self, nums: List[int]) -> List[List[int]]:
        if len(nums) == 0:
            return []
        if len(nums) == 1:
            return [nums]
            # return [[nums]]
        answer = []
        for i, elem in enumerate(nums):
            without_elem = nums[:i] + nums[i + 1 :]
            first = [elem]
            rest = self.permute(without_elem)
            for r in rest:
                answer.append(first + r)
        return answer


if __name__ == "__main__":
    S = Solution()
    print(S.permute([1, 2, 3]))
