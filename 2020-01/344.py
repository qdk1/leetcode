#!/usr/bin/env python
from typing import List


class Solution:
    def reverseString(self, s: List[str]) -> None:
        """
        Do not return anything, modify s in-place instead.
        """
        i = 0
        j = len(s) - 1
        while i < j:
            s[i], s[j] = s[j], s[i]
            i += 1
            j -= 1


if __name__ == "__main__":
    print("344 Reverse string")
    A = ["H", "e", "l", "l", "o"]
    print(A)
    S = Solution()
    S.reverseString(A)
    print(A)
