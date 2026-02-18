class Node3 {
    constructor(value) {
        this.value = value;
        this.next = null;
    }
}

class LinkedList1 {
    constructor() {
        this.head = null;
    }

    append(value) {
        let newNode = new Node3(value);

        if (!this.head) {
            this.head = newNode;
            return;
        }

        let current = this.head;
        while (current.next !== null) {
            current = current.next;
        }
        current.next = newNode;
    }

    print() {
        let current = this.head;

        while (current !== null) {
            console.log(current.value);
            current = current.next;
        }
    }
    contain(value) {
        let current = this.head;

        while (current !== null) {
            if (current.value === value) {
                return true
            }
            current = current.next;
        }
        return false;
    }
    insert(value, index) {
        if (index < 0) return "Index is out of scope";
        let current = this.head;
        let key = 0
        let prev = this.head;
        if (key == index) {
            var newNode = new Node3(value);
            this.head = newNode;
            newNode.next = current
            return
        }

        while (current !== null) {
            if (key == index) {
                var newNode = new Node3(value);
                prev.next = newNode;
                newNode.next = current;
                return
            }
            prev = current;
            current = current.next;
            key++;
        }
        if (key == index) {
            var newNode = new Node3(value);
            prev.next= newNode;
            return
        }
        return "Index is out of scope"
    }
    delete(value){
        if (!this.head) return;
        let current = this.head;
        if(this.head.value==value){
            this.head=current.next;
            return;
        }
        let prev= current;
        while(current !== null){
            if(current.value === value){
                prev.next=current.next;
                return;
            }
            prev=current;
            current=current.next;
        }
    }
    reverse(){
        let current=this.head;
        let prev=null;
        let next;
        while(current !== null){
            next = current.next;
            current.next = prev;
            prev=current;
            current=next;
        }
        this.head=prev;

    }
}
const list = new LinkedList1();
list.append(10);
list.append(20);
list.append(30);
list.print();
console.log(list.contain(10))

//Insert In linked List 
console.log(list.insert(40, 3))
list.print();

console.log("Deleted Method ::")
list.delete(20)
list.print();

console.log("Reverse Method ::")
list.reverse()
list.print();



//Function 
/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} head
 * @return {ListNode}
 */
var reverseList = function(head) {
    let current = head;
    let prev = null;

    while (current !== null) {
        let next = current.next;
        current.next = prev;
        prev = current;
        current = next;
    }

    return prev;
};


var detectCycle = function (head) {
    let slow = head ;
   let fast = head ;
   while(fast && fast.next){
       slow = slow.next;
       fast = fast.next.next;
       if(slow ==fast){
           let pointer = head;
           while(pointer !== slow){
               slow=slow.next;
               pointer =pointer.next;
           }
           return pointer;
       }
   }
   return null ;
};

var addTwoNumbers = function (l1, l2) {
    let dummy = new ListNode(-1);
    let current = dummy;
    let h1 = l1;
    let h2 = l2;
    let sum = 0
    while (h1 !== null && h2 !== null) {
        let add = (h1.val + h2.val) + sum
        if (add >= 10) {
            current.next = new ListNode((add) % 10);
            sum = Number(add.toString()[0])
        } else {
            current.next = new ListNode(add);
            sum = 0;
        }
        h1 = h1.next;
        h2 = h2.next;
        current = current.next;
    }

    while (h1 !== null) {
        let add = (h1.val) + sum
        if (add >= 10) {
            current.next = new ListNode((add) % 10);
            sum = Number(add.toString()[0])
        } else {
            current.next = new ListNode(add);
            sum = 0;
        }
        h1 = h1.next;
        current = current.next;
    }

    while (h2 !== null) {
        let add = (h2.val) + sum
        if (add >= 10) {
            current.next = new ListNode((add) % 10);
            sum = Number(add.toString()[0])
        } else {
            current.next = new ListNode(add);
            sum = 0;
        }
        h2 = h2.next;
        current = current.next;
    }

    if (sum !== 0) {
        current.next = new ListNode(sum);
        current = current.next;
    }

    return dummy.next;
};