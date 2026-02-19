class DLL {
    constructor(val){
      this.val=val;
      this.prev=null;
      this.next=null;
    }
  }
  class DLLOPS{
    constructor(){
      this.head=null;
    }
    //Head
    insertHead(val){
     let newNode=new DLL(val)
     if(!this.head) {
      this.head=newNode;
      return;
    }
      newNode.next=this.head;
      this.head.prev=newNode;
      this.head=newNode;
    }
    //Tail
    insertTail(val){
      let newNode=new DLL(val)
      if(!this.head) {
        this.head=newNode;
        return;
      }
        let current =this.head;
     while(current.next !== null){
      current=current.next;
     }
     newNode.prev=current
     current.next=newNode;
    }

    // Delete 
    deleteNode(val){
      if(!this.head) {
        return;
      }
      if(this.head.val == val){
        this.head=this.head.next;
        if(!this.head) {
          return;
        }
        this.head.prev=null;
        return;
      }
      let current= this.head;
      while(current !== null){
        if(current.val==val){
          let next= current.next;
         if(next==null){
current.prev.next=next
         }else{
          next.prev=current.prev;
          current.prev.next=next
         }
         break;
        }
        current=current.next;
      }
    }

    // Print Forward
    printForward(){
      if(!this.head) {
        return;
      }
      let current=this.head;
      while(current !== null){
        console.log(current.val);
        current=current.next;
      }
    }

    reverse(){
      if(!this.head) {
        return;
      }

    let current=this.head;
    let previous=null;
    while(current !== null ){
      let next= current.next;
      current.next=previous;
      previous=current;
      previous.prev=null
      current=next;
    }
    while(previous !== null){
      console.log(previous.val);
      previous=previous.next;
    }
    }
  }

const Doubly=new DLLOPS()
Doubly.insertHead(10)
Doubly.insertHead(20)
Doubly.insertHead(30)
Doubly.insertHead(40)

Doubly.insertTail(50)
Doubly.insertTail(60)
Doubly.insertTail(70)

Doubly.deleteNode(10)
Doubly.deleteNode(60)

console.log('Print Forward')
Doubly.printForward()

console.log('Print Backward')
Doubly.reverse()




