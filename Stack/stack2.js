class stack {
    stk = [];

    push(e) {
       return  this.stk.push(e)
    }
    pop(){
      return this.stk.pop();
    }
    peek(){
        if(this.size()) return this.stk[this.size()-1];
        return null;
    }
    size(){
        return this.stk.length;
    }
    isEmpty(){
        if(this.size()) return false;
        return true;
    }
}


let sta= new stack();
sta.push(10)
sta.push(20)
sta.push(30)
sta.push(40)
sta.pop()
console.log(sta.stk)
  class Valid_Parentheses {
    constructor(para) {
      this.para = para;
    }
    stk = [];
    peek() {
      if (this.size()!==0) return this.stk[this.size()-1];
      return null;
    }
size(){
  return this.stk.length;
}
    valid() {
      let arr = this.para.split('');
      for (let i = 0; i < arr.length; i++) {
        if (arr[i] =='{' || arr[i] == '(' || arr[i] == '[') {
          this.stk.push(arr[i])
        } else {
          if (this.size()) {
          
            if(((this.peek() == '(' )&& (arr[i] == ')' ))|| ((this.peek() == '[' )&& (arr[i] == ']' )) || ((this.peek() == '{' )&& (arr[i] == '}' )) ){
              this.stk.pop()
            }else{
              return false
            }
          } else {
            return false
          }
        }


      }
      return this.size() === 0; 
    }
  }

   class reverse{
    constructor(str){
      this.str=str;
    }
    stk=[]
    rev(){
      let arr =this.str.split('');
      for(let i=arr.length-1 ; i>=0 ; i--){
         this.stk.push(arr[i]);
      }
      return this.stk.join('');
    }  
  }


  class nextGreater{
  constructor(arr){
    this.arr=arr;
  }
  NG(){
    let stack= [];
    let result = new Array(this.arr.length).fill(-1);
    stack.push(i);
    for(let i=0; i<this.arr.length; i++){
      while(stack.length > 0 && this.arr[i] > this.arr[stack[stack.length -1]]){
        let index = stack.pop();
        result[index]=this.arr[i];
      }

    }
    return result
  }
}

/**
 * @param {number[]} nums
 * @return {number}
 */
var maxSumMinProduct = function (nums) {
  let n = nums.length;
  let prefix = new Array(n);
  let leftMin = new Array(n).fill(-1);
  let stack = [];
  let rightMin = new Array(n).fill(n);
  let stack2 = [];

  for (let i = 0; i < n; i++) {
      prefix[i] = i === 0 ? nums[i] : prefix[i - 1] + nums[i];
      while (stack.length && nums[stack[stack.length - 1]] >= nums[i]) {
          stack.pop();
      }
      leftMin[i] = stack.length ? stack[stack.length - 1] : -1;
      stack.push(i);

      while (stack2.length && nums[stack2[stack2.length - 1]] > nums[i]) {
          let idx = stack2.pop();
          rightMin[idx] = i
      }
      stack2.push(i)
  }

  let max = 0n; 

  for (let i = 0; i < n; i++) {
      let left = leftMin[i] + 1;
      let right = rightMin[i] - 1;

      let total = BigInt(prefix[right]) - BigInt(left > 0 ? prefix[left - 1] : 0);
      let curr = total * BigInt(nums[i]);

      if (curr > max) max = curr;
  }
  return Number(max % 1000000007n);
};


var canCompleteCircuit = function(gas, cost) {
  let totalGas= gas[0];
  let totalCost= cost[0];
  
  for(let i = 1 ;i<gas.length; i++){
      totalGas += gas[i];
      totalCost += cost[i];
  }
  if(totalCost > totalGas){
      return -1;
  }
  let start= 0 ;
  let curr= 0;
  
  for(let i = 0 ;i<cost.length; i++){
      curr += gas[i] - cost[i]
      if(curr < 0){
          start = i+ 1;
          curr= 0
      }
  }
  return start 
  };


  /**
 * @param {number[]} heights
 * @return {number}
 */
var largestRectangleArea = function(heights) {
  let n =heights.length;
  let left=new Array(n).fill(-1);
  let stack1 =[]
  let right = new Array(n).fill(n);
  let stack2=[];
 
 for(let i=0 ; i<heights.length; i++){
 while(stack1.length && heights[stack1[stack1.length -1]] > heights[i]){
     stack1.pop();
 }
 left[i]= stack1.length ? stack1[stack1.length -1] : -1;
 stack1.push(i);
 
 while(stack2.length && heights[stack2[stack2.length -1]] > heights[i]){
     const insert = stack2.pop();
     right[insert]= i
 }
 stack2.push(i);
 }
 let maxArea= 0 ;
 for(let i= 0 ; i<heights.length ; i++){
     let l= left[i] + 1;
     let r= right[i];
     let area= heights[i] * (r-l)
     maxArea= Math.max(maxArea , area);
 }
 return maxArea;
 };

 var stockspan = function(stock) {
  let n= stock.length;
  let s = [];
  let ans=new Array(n).fill(1);
  for(let i=0; i<n; i++){
     while(s.length && stock[s[s.length -1 ]] <= stock[i]){
       s.pop();
     }
     ans[i]= s.length ? i - s[s.length -1] : i+ 1
     s.push(i)
  }

  return ans;
 } 

 console.log("StackSpan===>", stockspan([100 ,80, 60,70,60,75,85]))


var celebritySearch= function(grid){
  let n= grid.length;
  let stack=[];
  for(let i =0 ; i<n ; i++){
  stack.push(i);
  while(stack.length > 1){
    let i = stack.pop();
    let j= stack.pop();
    if(grid[i][j] == 0){
      stack.push(i);
    }else{
      stack.push(j);
    }
  }
  }

  let celeb= stack.pop();

  for(let i=0;i<n; i++){
    if(i!=celeb && (grid[i][celeb] == 0 || grid[celeb][i]==1) ){
      return -1;
    }
  }
  return celeb;

} 

console.log("Found celebrity -======>",celebritySearch([[0,1,0] , [0,0,0] , [0,1,0]]))