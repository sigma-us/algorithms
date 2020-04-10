/**
 * initialize your data structure here.
 */
var MinStack = function() {
    this.stack = [];
    this.mins = [];
};

/** 
 * @param {number} x
 * @return {void}
 */
MinStack.prototype.push = function(x) {
    let len = this.mins.length;
    this.stack.push(x);
    this.mins.push(len === 0 ? x : (this.mins[len-1] > x ? x : this.mins[len-1]));
};

/**
 * @return {void}
 */
MinStack.prototype.pop = function() {
    this.stack.pop();
    this.mins.pop();
};

/**
 * @return {number}
 */
MinStack.prototype.top = function() {
    return this.stack[this.stack.length-1];
};

/**
 * @return {number}
 */
MinStack.prototype.getMin = function() {
    return this.mins[this.mins.length-1];
};

/** 
 * Your MinStack object will be instantiated and called as such:
 * var obj = new MinStack()
 * obj.push(x)
 * obj.pop()
 * var param_3 = obj.top()
 * var param_4 = obj.getMin()
 */

// var obj = new MinStack()
// obj.push(x)
// obj.pop()
// var param_3 = obj.top()
// var param_4 = obj.getMin()



let minStack = new MinStack();
console.log(minStack)
minStack.push(-2);
minStack.push(0);
minStack.push(-3);
let min = minStack.getMin();   // --> Returns -3.
console.log(min);
minStack.pop();
let top = minStack.top();      // --> Returns 0.
console.log(top);
min = minStack.getMin();   // --> Returns -2.
console.log(min);