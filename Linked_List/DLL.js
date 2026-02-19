class DLL {
    constructor(val){
      this.val=val;
      this.prev=null;
      this.next=null;
    }
  }
  class DLLOPS{
    constructor(){
      this.head=isNull;
    }
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
    deleteNode(val){
      if(!this.head) {
        return;
      }
      if(this.head.val == val){
        this.head=this.head.next;
      }
      let current= this.head;
      let prev=null;
      while(current !== null){
        if(current.val==val){
          let next= current.next;
         prev.next=next
         if(next!==null) next.prev=current.prev;
        }
        prev=current;
        current=current.next;
      }
    }
  }

  