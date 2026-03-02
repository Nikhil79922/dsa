/**
 * @param {number} capacity
 */

class Node {
    constructor(key, value) {
        this.key = key;
        this.value = value;
        this.prev = null;
        this.next = null;
    }
}

var LRUCache = function (capacity) {
    this.limit = capacity;
    this.head = new Node(-1, -1);
    this.tail = new Node(-1, -1);
    this.head.next = this.tail;
    this.tail.prev = this.head;

    this.map = new Map();

};

LRUCache.prototype.add = function (newNode) {
    let next = this.head.next;
    this.head.next = newNode;
    newNode.next = next;
    newNode.prev = this.head
    next.prev = newNode;
}

LRUCache.prototype.delete = function (newNode) {
    let prev = newNode.prev;
    prev.next = newNode.next;
    newNode.next.prev = prev;
}


/** 
 * @param {number} key
 * @return {number}
 */
LRUCache.prototype.get = function (key) {
    if (!this.map.has(key)) return -1;

    let node = this.map.get(key);

    this.delete(node);
    this.add(node);

    return node.value;
};

/** 
 * @param {number} key 
 * @param {number} value
 * @return {void}
 */
LRUCache.prototype.put = function (key, value) {
    if (this.map.has(key)) {
        let existing = this.map.get(key);
        this.delete(existing);
        this.map.delete(key);
    }
    else if (this.map.size === this.limit) {
        let lru = this.tail.prev;
        this.delete(lru);
        this.map.delete(lru.key);
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