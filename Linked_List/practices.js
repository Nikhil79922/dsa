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