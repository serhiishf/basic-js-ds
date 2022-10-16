const { NotImplementedError } = require("../extensions/index.js");

const { ListNode } = require("../extensions/list-node.js");

/**
 * Implement the Queue with a given interface via linked list (use ListNode extension above).
 *
 * @example
 * const queue = new Queue();
 *
 * queue.enqueue(1); // adds the element to the queue
 * queue.enqueue(3); // adds the element to the queue
 * queue.dequeue(); // returns the top element from queue and deletes it, returns 1
 * queue.getUnderlyingList() // returns { value: 3, next: null }
 */
class Queue {
/*   constructor() {
    this.head = null;
    this.tail = null;
  }
   */
  /*     
  constructor() {
    this.queue = {};
    this.first = null;
    this.last = null;
  }
 */
  getUnderlyingList() {
    return this.head;
    //return this.queue;
    //throw new NotImplementedError("Not implemented");
    // remove line with error and write your code here
  }

  enqueue(value) {
    if (this.head) {
      let node = new ListNode(value);
      this.tail.next = node;
      this.tail = node;
    } else {
      this.head = this.tail = new ListNode(value);
    }

    /* 
    this.queue[this.last] = value;
    this.last++;
 */
    //throw new NotImplementedError("Not implemented");
    // remove line with error and write your code here
  }

  dequeue() {
    if (this.head) {
      let result = this.head.value;
      if (!this.head.next) this.tail = null;
      this.head = this.head.next;
      return result;
    }

    /*       
    const result = this.queue[this.first];
    delete this.queue[this.first];
    this.first++;
    return result;
 */
    //throw new NotImplementedError("Not implemented");
    // remove line with error and write your code here
  }
}

module.exports = {
  Queue,
};

/* 
class Queue {
    constructor(value, next = null ) {
        this.queue = {};
        this.head = null;
        this.last = 0;
    }
  
    getUnderlyingList() {
      return this.queue;
      //throw new NotImplementedError("Not implemented");
      // remove line with error and write your code here
    }
  
    enqueue(value) {
  
  
  
  
        this.queue[this.last] = value;
        this.last++;
        
      //throw new NotImplementedError("Not implemented");
      // remove line with error and write your code here
    }
  
    dequeue() {
      const result = this.queue[this.first];
      delete this.queue[this.first];
      this.first++;
      return result
      //throw new NotImplementedError("Not implemented");
      // remove line with error and write your code here
    }
  } 
*/
