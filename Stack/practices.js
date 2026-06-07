
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


/**
 * @param {number[]} nums1
 * @param {number[]} nums2
 * @return {number[]}
 */
var nextGreaterElement = function (nums1, nums2) {
    let stack = [];
    let map = new Map();
    for (let i = nums2.length - 1; i >= 0; i--) {
        while (stack.length && nums2[stack[stack.length - 1]] <= nums2[i]) {
            stack.pop();
        }
        map.set(nums2[i], stack.length ? nums2[stack[stack.length - 1]] : -1);
        stack.push(i)
    }

    return nums1.map(num => map.get(num));
};

/**
 * @param {string} s
 * @return {boolean}
 */
var isValid = function (s) {
    let stack = [];
    for (let i = 0; i < s.length; i++) {
        if (s[i] == '(' || s[i] == '{' || s[i] == '[') {
            stack.push(s[i]);
        }
        else if (s[i] == ')') {
            if (stack[stack.length - 1] !== '(') {
                return false
            } else {
                stack.pop()
            }
        }
        else if (s[i] == '}') {
            if (stack[stack.length - 1] !== '{') {
                return false
            } else {
                stack.pop()
            }
        }
        else if (s[i] == ']') {
            if (stack[stack.length - 1] !== '[') {
                return false
            } else {
                stack.pop()
            }
        }


    }
  return stack.length == 0;
};


/**
 * @param {string} s
 * @return {number}
 */
var firstUniqChar = function(s) {
    let map = new Map();
    for(let i = 0 ; i<s.length ; i++){
      map.set(s[i] , (map.get(s[i]) || 0)+1)
    }
    for(let i = 0 ; i<s.length ; i++){
        if(map.get(s[i])==1){
            return i;
        }
    }
    return -1;
};


class Solution {
	reverseFirstK(q, k) {
		let stack = [];
		let stack2 = [];
		let index = 0
		if (k > q.length) return q
		while (q.length && index !== k) {
			index++;
			stack.push(q.shift());
		}
		
		while (stack.length !== 0) {
			let val = stack.pop();
			stack2.push(val);
		}
		
		return [...stack2,...q];
	}
}   

const sol = new Solution();
console.log("checl===>",sol.reverseFirstK([7 ,7, 5, 6, 5, 10],4))