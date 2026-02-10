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