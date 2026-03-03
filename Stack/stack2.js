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