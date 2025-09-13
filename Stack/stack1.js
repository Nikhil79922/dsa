class Stack {
    constructor(a, b) {
        this.stack = [];
        console.log(a + b);
    }

    push(element) {
        return this.stack.push(element);
    }

    pop() {
        return this.stack.pop();
    }

    peek() {
        if (this.stack.length === 0) {
            console.log("Stack is empty");
            return;
        }
        return this.stack[this.stack.length - 1];
    }

    isEmpty() {
        return this.stack.length === 0;
    }

    stackLen() {
        return this.stack.length;
    }

    stackPrintAll() {
        for (let i = 0; i < this.stack.length; i++) {
            console.log(this.stack[i]);
        }
    }
}

const stack = new Stack(1, 2);
stack.push(2);
stack.push(9);
stack.push(6);
stack.push(12);
stack.push(8);
stack.pop();
console.log("Peek:", stack.peek());
console.log("Is empty:", stack.isEmpty());
console.log("Stack contents:");
stack.stackPrintAll();


// Problem 1 :--- leetcode 151
const reverse = (str) => {
    const arr = str.split(" ")
    const stack = [];
    for (let a of arr) {
        stack.push(a)
    }
    console.log(stack)
    let finalString = "";
    while (stack.length) {
        const current = stack.pop();
        if (current) {
            finalString += " " + current;
        }

    }
    return finalString.trim()
}
console.log(reverse("sky is blue   and black at night"))


// Problem 2 :--- leetcode 21
const bracesCheck = (s) => {
    const stack = []
    for (let a = 0; a < s.length; a++) {
        const char = s[a]
        if (char === '(' || char === '{' || char === '[') {
            stack.push(char)
        }else if (char === ')' || char === '}' || char === ']') {
            if(stack.length==0){
                return false;
            }
            const top= stack.pop();
            if((char ===")" && top!== "(" )|| (char ==="}" && top!== "{" )|| (char ==="]" && top!== "[" )){
                return false
            }
        }
    }
    return stack.length==0;
}
console.log(bracesCheck("(]"));
