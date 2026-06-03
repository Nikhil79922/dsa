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


 /**
 * Definition for singly-linked list.
 * function ListNode(val) {
 *     this.val = val;
 *     this.next = null;
 * }
 */

/**
 * @param {ListNode} head
 * @return {boolean}
 */
var hasCycle = function(head) {
    let slow=head;
    let fast=head;
  
  while(fast && fast.next){
      fast= fast.next.next;
      if(fast == slow){
          return true;
      }
      slow= slow.next;
  }
  return false;
  };


  /**
 * Definition for singly-linked list.
 * function ListNode(val) {
 *     this.val = val;
 *     this.next = null;
 * }
 */

/**
 * @param {ListNode} head
 * @return {ListNode}
 */
var detectCycle = function (head) {
    let slow = head;
    let fast = head;
    while (fast && fast.next) {
        slow = slow.next;
        fast = fast.next.next;
        if (slow == fast) {
            let pointer = head;
            while (slow !== pointer) {
                pointer = pointer.next;
                slow = slow.next;
            }
            return pointer;
        }
    }
    return null;
};


/**
 * // Definition for a _Node.
 * function _Node(val, next, random) {
 *    this.val = val;
 *    this.next = next;
 *    this.random = random;
 * };
 */

/**
 * @param {_Node} head
 * @return {_Node}
 */
var copyRandomList = function (head) {
    if (!head) return head;
    let current = head;
    let map = structuredClone(head);
    return map;
    // while (current !== null) {
    //     map.set(current, new _Node(current.val, null, null));
    //     current = current.next;
    // }
    // current = head;
    // while (current !== null) {
    //     let copy = map.get(current);
    //     copy.next = map.get(current.next) || null;
    //     copy.random = map.get(current.random) || null;
    //     current = current.next;
    // }
    // return map.get(head);

};

// Flattern singly listed list 
var flatten = function(head) {
    if (head === null || head.next === null) {
        return head;
    }

    head.next = flatten(head.next);

    return merge(head, head.next);
};

var merge = function(l1, l2) {
    let dummy = new _Node(-1);
    let curr = dummy;

    while (l1 && l2) {
        if (l1.val < l2.val) {
            curr.child = l1;
            l1 = l1.child;
        } else {
            curr.child = l2;
            l2 = l2.child;
        }

        curr = curr.child;
        curr.next = null;
    }

    curr.child = l1 ? l1 : l2;

    return dummy.child;
};


/**
 * // Definition for a _Node.
 * function _Node(val,prev,next,child) {
 *    this.val = val;
 *    this.prev = prev;
 *    this.next = next;
 *    this.child = child;
 * };
 */

/**
 * @param {_Node} head
 * @return {_Node}
 */
var flatten = function (head) {
    if (head == null) return head;
     dfs(head);
    return head;
};

var dfs = function (head) {
    let curr = head;


    while (curr != null) {
        let next = curr.next;
        if (curr.child) {
            let childHead = curr.child
             let childTail =  dfs(curr.child);
            curr.next = childHead;
            childHead.prev = curr;
            curr.child = null;
            if (next) {
                childTail.next = next;
                next.prev = childTail;
            }
        }
        if(curr.next == null){
            break;
        }
        curr = curr.next;
    }
    return curr;
}


/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} l1
 * @param {ListNode} l2
 * @return {ListNode}
 */
var addTwoNumbers = function (l1, l2) {
    let dummy = new ListNode(-1);
    let current = dummy;
    let h1 = l1;
    let h2 = l2;
    let sum = 0
    while (h1 !== null && h2 !== null) {
        let add = (h1.val + h2.val) + sum;
        if (add >= 10) {
            current.next = new ListNode((add % 10));
            current = current.next;
            sum = Math.floor(add / 10);
        } else {
            current.next = new ListNode(add);
            current = current.next;
            sum=0
        }
        h1 = h1.next;
        h2 = h2.next;
    }
    while (h1 !== null) {
        let add = (h1.val) + sum;
        if (add >= 10) {
            current.next = new ListNode((add % 10));
            current = current.next;
            sum = Math.floor(add / 10);
        } else {
            current.next = new ListNode((add % 10));
            current = current.next;
                        sum=0
        }
        h1 = h1.next;
    }
    while (h2 !== null) {
        let add = (h2.val) + sum;
        if (add >= 10) {
            current.next = new ListNode((add % 10));
            current = current.next;
            sum = Math.floor(add / 10);
        } else {
            current.next = new ListNode((add % 10));
            current = current.next;
                        sum=0
        }
        h2 = h2.next;
    }

    if (sum !== 0) {
        current.next = new ListNode(sum);
        current = current.next;
    }
    return dummy.next;
};