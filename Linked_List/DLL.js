class DLL{
    constructor(val){
        this.val=val;
        this.next=null;
        this.prev=null;
    }
}

class DoublyLinkedListOps{
    constructor(){
        this.head=null;
    }

    InsertAtHead(val){
    let newDLLNode=new DLL(val)
        if(!this.head) this.head=newDLLNode 
        newDLLNode.next=this.head    // Move Backward
        this.head.prev=newDLLNode   // Move forward
        this.head = newDLLNode     //Move head 

        return this.head;
    }

    InsertAtTail(val){
        let newDLLNode=new DLL(val)
        if(!this.head) this.head=newDLLNode 
        let current=this.head;
        while(current.next !== null){
            current=current.next;
        }
        current.next=newDLLNode
        newDLLNode.prev=current;
    }

    deleteNode(val){
        if(!this.head) return ;
        let current= this.head;
        if(current.val == val) return null;
        while(current !== null){
            if(current.val==val){
              
            }
        }
    }
}

let DL=new DoublyLinkedListOps()
DL.InsertAtHead(10)
DL.InsertAtHead(20)
DL.InsertAtHead(30)
console.log(DL.InsertAtHead(40))
