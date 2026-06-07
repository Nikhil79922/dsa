
var MyStack = function() {
    this.stack1 = [];
    this.stack2 = [];
};

/** 
 * @param {number} x
 * @return {void}
 */
MyStack.prototype.push = function(x) {
    this.stack1.push(x);
};

/**
 * @return {number}
 */
MyStack.prototype.pop = function() {
    let n=this.stack1.length
    if( n > 0){
        this.stack2=[];
for(let i = 0 ; i<n -1 ; i++){
    let val = this.stack1.shift();
    this.stack2.push(val);
}
let val = this.stack1.shift();
this.stack1=this.stack2;
return val;
    }
    return null
};

/**
 * @return {number}
 */
MyStack.prototype.top = function() {
        if(this.stack1.length > 0){
            return this.stack1[this.stack1.length-1];
        }
        return null
};

/**
 * @return {boolean}
 */
MyStack.prototype.empty = function() {
         return this.stack1.length == 0
};

/** 
 * Your MyStack object will be instantiated and called as such:
 * var obj = new MyStack()
 * obj.push(x)
 * var param_2 = obj.pop()
 * var param_3 = obj.top()
 * var param_4 = obj.empty()
 */