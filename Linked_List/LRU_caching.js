/**
 * @param {number} capacity
 */
class Node {
    constructor(key, value) {
        this.key = key;
        this.value = value || null;
        this.prev = null;
        this.next = null;
    }
}
var LRUCache = function (capacity) {
    this.limit = capacity
    this.head = new Node(-1, -1);
    this.tail = new Node(-1, -1);

    this.head.next = this.tail;
    this.tail.prev = this.head;

    this.map = new Map();
};

LRUCache.prototype.add = function (node) {
    let nextNode = this.head.next;

    this.head.next = node;
    node.prev = this.head;

    node.next = nextNode;
    nextNode.prev = node;
}

LRUCache.prototype.delete = function (node) {
    node.prev.next = node.next;
    node.next.prev = node.prev;
}

/** 
 * @param {number} key
 * @return {number}
 */
LRUCache.prototype.get = function (key) {

};

/** 
 * @param {number} key 
 * @param {number} value
 * @return {void}
 */
LRUCache.prototype.put = function (key, value) {
if(this.map.has(key)){
    let node = this.map.key(key);
        this.delete(newNode);
        this.map.delete(key)
}

if(this.map.size == this.limit){
    this.delete(this.tail.prev);
    this.map.delete(this.tail.prev.key)
}

    let newNode = new Node(key, value)
    this.map.set(key, newNode);
    this.add(newNode);
};

/** 
 * Your LRUCache object will be instantiated and called as such:
 * var obj = new LRUCache(capacity)
 * var param_1 = obj.get(key)
 * obj.put(key,value)
 */