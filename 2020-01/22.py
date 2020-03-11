#!/usr/bin/env python

from typing import List


class Solution:
    def generateParenthesis(self, n: int) -> List[str]:
        remain = n
        level = 0

        def helper(remain, level, string):
            if level == 0 and remain == 0:
                return [string]

            answer = []
            if level > 0:
                answer += helper(remain, level - 1, string + ")")
            if remain > 0:
                answer += helper(remain - 1, level + 1, string + "(")
            return answer

        return helper(n, 0, "")


# Level:  ( Increases by One   ) Decreases by One
# Level must always be >= 0

# Remain: ( Decreases remain    ) Does not affect remain
# Remain must be >= 0

# We're done when level = 0 and remain is =0

# (        level = 1
# ()        level = 0
# BAD: ())        level = -1

# ((( )))

#      Level 0 Remain 3
# ()   LEvel 0 Remain 2
# ()()  Level 0 Remain 1
# () ()() Level 0 Remain 0

# (((  Level 3 Remain 0

if __name__ == "__main__":
    S = Solution()
    print(S.generateParenthesis(3))
