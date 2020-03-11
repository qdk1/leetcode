#!/usr/bin/env python


from collections import Counter


class Solution:
    def isAnagram(self, s: str, t: str) -> bool:
        return Counter(s) == Counter(t)


if __name__ == "__main__":
    print("Expect true")
    print(Solution().isAnagram("anagram", "nagaram"))
    print("Expect false")
    print(Solution().isAnagram("rat", "car"))
