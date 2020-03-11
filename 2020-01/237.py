#!/usr/bin/env python

# Definition for singly-linked list.
# class ListNode:
#     def __init__(self, x):
#         self.val = x
#         self.next = None

# Definition for singly-linked list.
class ListNode:
    def __init__(self, x):
        self.val = x
        self.next = None


class Solution:
    def deleteNode(self, node):
        node.val = node.next.val
        node.next = node.next.next


def pl(l: ListNode):
    if l is None:
        return
    while l is not None:
        print(l.val, end=" ")
        l = l.next
    print("")


if __name__ == "__main__":
    l = ListNode(1)
    l.next = ListNode(2)
    l.next.next = ListNode(3)
    pl(l)

    S = Solution()
    S.deleteNode(l.next)
    pl(l)
