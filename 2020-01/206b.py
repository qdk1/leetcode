#!/usr/bin/env python3

from collections import deque


class ListNode:
    def __init__(self, val):
        self.val = val
        self.next = None


def reverse_lst(lst):
    if not lst:
        return None
    q = deque([None, lst])
    while q[-1]:
        tmp = q[-1].next
        q[-1].next = q.popleft()
        q.append(tmp)
    return q[0]


def print_lst(node):
    ret = []
    curr = node
    while curr:
        ret.append(curr.val)
        curr = curr.next
    print(ret)


if __name__ == "__main__":
    lst = [ListNode(i) for i in range(10)]
    for i in range(9):
        lst[i].next = lst[i + 1]
    print_lst(lst[0])

    rev = reverse_lst(lst[0])
    print_lst(rev)
