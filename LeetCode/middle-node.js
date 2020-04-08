/**
 * Definition for singly-linked list.
 * function ListNode(val) {
 *     this.val = val;
 *     this.next = null;
 * }
 */
/**
 * @param {ListNode} head
 * @return {ListNode}
 */
var middleNode = function (head) {
    let map = {};
    let len = count(head, 0, map);
    let middle = len % 2 === 0 ? (len/2) : Math.floor(len/2);

    return map[middle];
};

const count =  (node, len, map) => {
    if (node) {
        map[len] = node;
        return count(node.next, ++len, map);
    } else return len;
}

function ListNode(val) {
    this.val = val;
    this.next = null;
}

var middleNode2 = function(head) {
    let fast = head, slow = head;
    
    while(fast && fast.next) {
        fast = fast.next.next;
        slow = slow.next;
    }
    
    return slow;
};



let test = new ListNode(1);
test.next = new ListNode(2);
test.next.next = new ListNode(3);
test.next.next.next = new ListNode(4);
test.next.next.next.next = new ListNode(5);
test.next.next.next.next.next = new ListNode(6);
console.log(middleNode(test));
