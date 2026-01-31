/**
 * LeetCode 155: Min Stack
 * Logic: O(1) Extra Space using Mathematical Encoding
 * Pattern: Encoding/Decoding
 */

var MinStack = function () {
    this.stack = [];
    this.min = Infinity;
};

/** 
 * @param {number} val
 * @return {void}
 */
MinStack.prototype.push = function (val) {
    if (this.stack.length === 0) {
        this.min = val;
        this.stack.push(val);
    } else if (val >= this.min) {
        this.stack.push(val);
    } else {
        // ENCODE: Push a value smaller than val to indicate min change
        this.stack.push(2 * val - this.min);
        this.min = val;
    }
};

/**
 * @return {void}
 */
MinStack.prototype.pop = function () {
    if (this.stack.length === 0) return;

    let top = this.stack.pop();
    if (top < this.min) {
        // DECODE: Restore previous minimum
        this.min = 2 * this.min - top;
    }
};

/**
 * @return {number}
 */
MinStack.prototype.top = function () {
    let top = this.stack[this.stack.length - 1];
    if (top < this.min) {
        return this.min; // If encoded, current min is the actual value
    }
    return top;
};

/**
 * @return {number}
 */
MinStack.prototype.getMin = function () {
    return this.min;
};

/**
 * Your MinStack object will be instantiated and called as such:
 * var obj = new MinStack()
 * obj.push(val)
 * obj.pop()
 * var param_3 = obj.top()
 * var param_4 = obj.getMin()
 */
