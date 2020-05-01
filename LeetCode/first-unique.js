/**
 * @param {number[]} nums
 */
var FirstUnique = function (nums) {
    this.map = {};
    this.unique = new DoublyLinkedList();

    for (let n of nums) {
        this.map[n] = this.map[n] ? { count: this.map[n].count + 1 } : { count: 1 };
        if (this.map[n].count === 1) {
            this.unique.push(n);
            this.map[n].pointer = this.unique.length;
        } else if (this.map[n].count === 2) {
            this.unique.removeIndex(this.map[n].pointer);
        }
    }
    console.log(this.map)
};

/**
 * @return {number}
 */
FirstUnique.prototype.showFirstUnique = function () {
    console.log(this.unique.head.data)
    return this.unique.head ? this.unique.head : -1;
};

/** 
 * @param {number} value
 * @return {void}
 */
FirstUnique.prototype.add = function (value) {
    this.map[value] = this.map[value] ? { count: this.map[value].count + 1 } : { count: 1 };
    if (this.map[value].count === 1) {
        this.unique.push(value);
        this.map[value].pointer = this.unique.length;
    } else if (this.map[value].count === 2) {
        this.unique.removeIndex(this.map[value].pointer);
    }
};


class Node {

    constructor(data) {
        this.data = data; // data
        this.prev = null; // reference to the prev node
        this.next = null; // . reference to next node
    }

}

class DoublyLinkedList {

    constructor() {
        this.head = null;
        this.tail = null;
        this.length = null;
    }

    push = (data) => {

        const node = new Node(data);

        if (!this.head) {
            this.head = node;
            this.tail = node;
        } else {
            node.prev = this.tail;
            this.tail.next = node;
            this.tail = node;

        }

        this.length++;
    }

    removeIndex = (i) => {
        if (!this.head) return null;
        if (i === 1) return this.removeFirst();
        else if (i === this.length) return this.pop();

        let node = this.head;

        while (i > 1) {
            node = node.next;
            i--;
        }

        console.log(i);

        // node.next = node.next && node.next.next ? node.next.next : 

        this.length--;
    }

    pop = () => {

        if (!this.head) return null

        // tail is the last node so that we take the
        // prev property from the tail
        const prevNode = this.tail.prev

        if (prevNode) {
            prevNode.next = null;
            this.tail = prevNode; // updating the tail
        } else {
            // if  prev property is null
            // it means there is only single node
            this.head = null;
            this.tail = null;
        }
        this.length--; //decrement the length
    }

    removeFirst = () => {

        if (!this.head) return null

        // storing the second node
        const node = this.head.next;

        if (node) {
            // removing the previous node
            node.prev = null
            // updating the head
            this.head = node
        } else {
            // only single node so we update head and tail to null
            this.head = null
            this.tail = null
        }
        //decrement the length
        this.length--;

    }

}



/** 
 * Your FirstUnique object will be instantiated and called as such:
 * var obj = new FirstUnique(nums)
 * var param_1 = obj.showFirstUnique()
 * obj.add(value)
 */


let firstUnique = new FirstUnique([2, 3, 5]);
firstUnique.showFirstUnique(); // return 2
firstUnique.add(5);            // the queue is now [2,3,5,5]
firstUnique.showFirstUnique(); // return 2
firstUnique.add(2);            // the queue is now [2,3,5,5,2]
firstUnique.showFirstUnique(); // return 3
firstUnique.add(3);            // the queue is now [2,3,5,5,2,3]
firstUnique.showFirstUnique(); // return -1





firstUnique = new FirstUnique([7, 7, 7, 7, 7, 7]);
firstUnique.showFirstUnique(); // return -1
firstUnique.add(7);            // the queue is now [7,7,7,7,7,7,7]
firstUnique.add(3);            // the queue is now [7,7,7,7,7,7,7,3]
firstUnique.add(3);            // the queue is now [7,7,7,7,7,7,7,3,3]
firstUnique.add(7);            // the queue is now [7,7,7,7,7,7,7,3,3,7]
firstUnique.add(17);           // the queue is now [7,7,7,7,7,7,7,3,3,7,17]
firstUnique.showFirstUnique(); // return 17


firstUnique = new FirstUnique([809]);
firstUnique.showFirstUnique(); // return 809
firstUnique.add(809);          // the queue is now [809,809]
firstUnique.showFirstUnique(); // return -1