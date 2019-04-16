'use strict';

class Node {
  constructor(value) {
    this.value = value;
    this.next = null;
  }
}

class Queue {
  constructor() {
    this.first = null;
    this.last = null;
    this.size = 0;
  }

  enqueue(value) {
    let node = new Node(value)
    if (!this.first) {
      this.first = node;
      this.last = node;
      this.size = 1;
    }
    else {
      this.size += 1;
      this.last.next = node;
      this.last = node;
    }
    return this.size;
  }

  dequeue() {
    if (!this.first) return null
    else if (this.size = 1) {
      let firstNode = this.first;
      this.first = null;
      this.last = null;
      this.size = 0;
      return firstNode.value;
    }
    else {
      this.size -= 1;
      let firstNode = this.first;
      this.first = this.first.next;
      return firstNode.value;
    }
  }
}

let q = new Queue()
console.log(q.enqueue('first in'));
console.log(q.enqueue('second in'));
console.log(q.enqueue('third in'));
console.log(q.dequeue());
console.log(q.dequeue());
console.log(q.dequeue());
console.log(q.dequeue());
