#!/usr/bin/env python

# from typing import ListNode

# Definition for singly-linked list.
class ListNode:
    def __init__(self, x):
        self.val = x
        self.next = None


class Solution:
    def reverseList(self, head: ListNode) -> ListNode:
        if head is None or head.next is None:
            return head

        prev = None
        current = head
        while current is not None:
            next = current.next
            current.next = prev
            prev = current
            current = next
        head = prev
        return head

        # first = head
        # #  1 -> 2 -> 3 -> None
        # #  ^    ^    ^
        # #  i    j    temp

        # #  1 <- 2 -> 3 -> None
        # #       ^    ^    ^
        # #       i    j    temp
        # i = head
        # j = head.next
        # temp = head.next.next

        # while temp is not None:
        #     j.next = i
        #     i = j
        #     j = temp
        #     temp = j.next

        # first.next = None
        # j.next = i
        # return j


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
    rl = S.reverseList(l)
    pl(rl)
