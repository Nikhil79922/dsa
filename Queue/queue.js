// Problem 1 :- leet code 225

var MyStack = function () {
    this.q1 = [];
    this.q2 = [];
};

/** 
 * @param {number} x
 * @return {void}
 */
MyStack.prototype.push = function (x) {
    if (this.q1.length == 0)  return this.q1.push(x)
    while (this.q1.length) {
        this.q2.push(this.q1.shift())
    }
    this.q1.push(x);
    while (this.q2.length) {
        this.q1.push(this.q2.shift())
    }
};

/**
 * @return {number}
 */
MyStack.prototype.pop = function () {
if(this.q1.length==0) return -1
return this.q1.shift();
};

/**
 * @return {number}
 */
MyStack.prototype.top = function () {
    if(this.q1.length==0) return -1
    return this.q1[0];
};

/**
 * @return {boolean}
 */
MyStack.prototype.empty = function () {
    if(this.q1.length==0) return true
    return false
};

var obj = new MyStack()
obj.push(2)
obj.push(3)
obj.push(4)
obj.push(5)
obj.push(6)
/** 
 * Your MyStack object will be instantiated and called as such:
 * var obj = new MyStack()
 * obj.push(x)
 * var param_2 = obj.pop()
 * var param_3 = obj.top()
 * var param_4 = obj.empty()
 */



var MyQueue = function() {
    this.q1=[];
    this.q2=[];
};

/** 
 * @param {number} x
 * @return {void}
 */
MyQueue.prototype.push = function(x) {
this.q1.push(x);
};

/**
 * @return {number}
 */
MyQueue.prototype.pop = function() {
    if (this.q1.length == 0)  return []
        while (this.q1.length>1) {
            this.q2.push(this.q1.pop())
        }
        this.var = this.q1.pop();
        while (this.q2.length) {
            this.q1.push(this.q2.pop())
        }
        return this.var;
};

/**
 * @return {number}
 */
MyQueue.prototype.peek = function() {
    if(this.q1.length==0) return []
    return this.q1[0];
};

/**
 * @return {boolean}
 */
MyQueue.prototype.empty = function() {
    if(this.q1.length==0) return true
    return false
};

/** 
 * Your MyQueue object will be instantiated and called as such:
 * var obj = new MyQueue()
 * obj.push(x)
 * var param_2 = obj.pop()
 * var param_3 = obj.peek()
 * var param_4 = obj.empty()
 */

