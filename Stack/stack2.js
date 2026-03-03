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