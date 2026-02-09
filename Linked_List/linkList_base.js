// //Node 
// class Node {
//     constructor(value) {
//         this.value = value;
//         this.next = null;
//     }
// }
// const node1 = new Node(10);
// // console.log("Node1==>",node1)

// const node2 = new Node(20);
// node1.next = node2;
// // console.log(node1)



// // Head 
// class LinkedListHead {
//     constructor() {
//         this.head = null;
//     }
//     append(value) {
//         const newNode = new Node(value)

//         if (!this.head) {
//             this.head = newNode;
//             return;
//         }

//         let current = this.head;
//         while (current.next) {
//             current = current.next;
//         }
//         current.next = newNode;
//     }

//     print() {
//         let current = this.head;
//         let count = 0
//         while (current !== null) {
//             count++
//             console.log(current.value);
//             current = current.next;
//         }
//         return count;
//     }
// }
// const list = new LinkedListHead();

// list.append(10);
// list.append(20);
// list.append(30);
// // list.head=new Node(10);
// console.log(list)
// console.log("Node Count ::-->", list.print());


// First and Last 
class Node2 {
    constructor(value) {
        this.value = value;
        this.next = null;
    }
}

class LinkedList {
    constructor() {
        this.head = null;
    }
    append(value) {
        const newNode = new Node2(value);

        if (!this.head) {
            this.head = newNode
            return;
        }
        let current = this.head;
        while(current.next){
            current = current.next
        }
        current.next=newNode;

    }
    print(){
        let current = this.head
        if(current){
            console.log("First Node",current.value)
        }
        let lastValue;
        while(current !== null){
            console.log(current.value);
            current=current.next;
           
        }
    }

    contains(value){
        let current= this.head;
           while(current!==null){
              if(current.value==value){
                return true;
              }
              current=current.next
        }
        return false;
    }

    delete(value){
        if(!this.head){
            return;
        }
        let Head=this.head
        if(this.head.value === value){
            this.head=Head.next;
            return;
        }
        let prev=null;
        let current =this.head;
        while(current!==null){
            if(current.value == value){
                prev.next=current.next
            }
            prev=current;
            current=current.next
        }
    }
}

const list = new LinkedList();

list.append(10);
list.append(20);
list.append(30);
 list.print();
 console.log(list.contains(10))
 list.delete(10);
 list.delete(10);
 list.print();
 