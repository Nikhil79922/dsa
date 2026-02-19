   reverse(){
      if(!this.head) {
        return;
      }
      let current=this.head;
      let temp =null;
      while(current!==null){
        if(current.next==null){
          this.head=current
        }
        temp=current.next;
        current.next=current.prev;
        current.prev=temp;

        //Now forward
        current=current.prev;
      } 
      let curr=this.head
      while(curr !== null){
        console.log(curr.val);
        curr=curr.next;
      }
    }