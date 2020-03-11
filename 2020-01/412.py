#!/usr/bin/env python
from typing import List


class Solution:
    def fizzBuzz(self, n: int) -> List[str]:
        results = []
        for i in range(1, n + 1):
            x = i
            if i % 15 == 0:
                x = "FizzBuzz"
            elif i % 5 == 0:
                x = "Buzz"
            elif i % 3 == 0:
                x = "Fizz"
            results.append(x)
        return results


if __name__ == "__main__":
    S = Solution()
    print(S.fizzBuzz(15))
