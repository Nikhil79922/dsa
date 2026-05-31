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
    let prev=null
    let current=head;
    
    while(current !== null){
        let next=current.next;
        current.next= prev;
        prev= current;
        current=next;
    }
    return prev;
    };
    


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
var middleNode = function (head) {
    let slow = head;
    let fast =head;
    while (fast && fast.next) {
   slow= slow.next;
   fast = fast.next.next;
    }
    return slow
};



/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} list1
 * @param {ListNode} list2
 * @return {ListNode}
 */
var mergeTwoLists = function (list1, list2) {
    let dummy = null;
    let dummyCurr = null
    var setDummy = function (val) {
        console.log(val)
        let node = {
            val,
            next: null
        }
        if (dummy == null) {
            dummy = node
            dummyCurr = dummy
        } else {
            dummyCurr.next = node
            dummyCurr = dummyCurr.next
        }
    }
    while (list1 != null || list2 != null) {
        if (list1 == null) {
            setDummy(list2.val)
            list2 = list2.next;
            continue;
        }
        if (list2 == null) {
            setDummy(list1.val)
            list1 = list1.next;
              continue;
        }

        if (list1.val > list2.val) {
            setDummy(list2.val)
            list2 = list2.next;
        } else {
            setDummy(list1.val)
            list1 = list1.next;
        }
    }
    return dummy
};

/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} head
 * @return {boolean}
 */
var isPalindrome = function (head) {
    let dummy= structuredClone(head);
    let current= dummy;
    let prev= null;
    while(current != null){
     let next= current.next;
     current.next=prev;
     prev= current;
     current= next;
    }
 
    current=head;
    while(current != null){
     console.log(current.val,prev.val)
     if(current.val !== prev.val){
         return false;
     }else{
         current=current.next;
         prev=prev.next;
     }
    }
    return true;
 };