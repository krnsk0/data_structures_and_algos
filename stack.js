'use strict'

class Node {
  constructor(value){
    this.value = value;
    this.next = null;
  }
}

class Stack {
  constructor(){
    this.first = null;
    this.last = null;
    this.size = 0;
  }

  push(value) {
    let node = new Node(value);
    if (!this.first) {
      this.first = node;
      this.last = node;
      this.size = 1;
    }
    else {
      let oldFirst = this.first;
      this.first = node;
      node.next = oldFirst;
      this.size += 1;
    }
    return this.size
  }

  pop() {
    if (this.size === 0) {
      return null
    }
    if (this.size === 1) {
      let firstNode = this.first
      this.first = null;
      this.last = null;
      this.size = 0;
      return firstNode.value;
    }
    else {
      let firstNode = this.first;
      this.first = this.first.next;
      this.size -= 1;
      return firstNode.value;
    }
  }
}

let s = new Stack()
console.log(s.push('one'));
console.log(s.push('two'));
console.log(s.push('three'));
console.log(s.pop());
console.log(s.pop());
console.log(s.pop());
console.log(s.pop());
