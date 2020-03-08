#!/usr/bin/env node

let ListNode = (val) => ({
    val: val,
    next: null,
});

let printList = (root) => {
    if (root == null) {
        return;
    }
    console.log(root.val);
    printList(root.next);
};

let reverseList = (head) => reverseListRecur(head);

let reverseListIter = (head) => {
    let newList = ListNode(head.val);    
    let node = head.next;
    while (node != null) {
        let temp = ListNode(node.val);
        temp.next = newList;
        newList = temp;
        node = node.next;
    }
    return newList;
};

let reverseListRecur = (head) => head == null ? null : reverseListRecur_(head.next, ListNode(head.val));

let reverseListRecur_ = (remainingList, newList) => {
    if (remainingList == null) {
        return newList;
    }
    let temp = ListNode(remainingList.val); // 2
    temp.next = newList;
    newList = temp;
    return reverseListRecur_(remainingList.next, newList);
};

let input = ListNode(1);
input.next = ListNode(2);
input.next.next = ListNode(3);
input.next.next.next = ListNode(4);
input.next.next.next.next = ListNode(5);

console.log("Input list: ");
printList(input);
console.log("Output list: ");
printList( reverseList( input )) ;
