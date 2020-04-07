let merge = (l1, l2) => {
    // The first element of return list is a dummy element
    // This makes starting much easier
    let retval = new ListNode(-1);
    let cur = retval;
    ///While there are still items in either list
    while (l1 || l2) {
        // If only l2 remains, just keep putting it on
        if (!l1) {
            cur.next = new ListNode(l2.val);
            l2 = l2.next;
        }
        // If only l1 remains, just keep putting it on
        else if (!l2) {
            cur.next = new ListNode(l1.val);
            l1 = l1.next;
        }
        else {
            // Otherwise, add the minimum list element to the return list
            // then, move down that list
            cur.next = new ListNode(Math.min(l1.val, l2.val));
            (l1.val > l2.val) ? l2 = l2.next : l1 = l1.next;
        }
        // Move down the return list
        cur = cur.next;
    }
    // Since the first element is a dummy node, return the next
    return retval.next;
}