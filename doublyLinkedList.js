class Node{
  constructor(val) {
    this.val = val;
    this.next = null;
    this.prev = null;
  }
}

class doublyLinkedList{
  constructor(){
    this.head = null;
    this.tail = null;
    this.length = 0;
  }

  print() {
    let current = this.head;
    let output = [];
    while (current) {
      output.push(current.val);
      current = current.next
    }
    console.log(output)
  }

  push(val) {
    let newNode = new Node(val)
    if (this.length == 0) {
      this.head = newNode;
      this.tail = newNode;
    }
    else {
      this.tail.next = newNode;
      newNode.prev = this.tail;
      this.tail = newNode;
    }
    this.length += 1;
    return this;
  }

  pop() {
    if (this.length == 0) return undefined
    else if (this.legnth == 1) {
        this.length -= 1;
        let poppedNode = this.tail;
        this.tail = null;
        this.head = null;
        return poppedNode.val;
    }
    else {
      this.length -= 1;
      let poppedNode = this.tail;
      this.tail = this.tail.prev;
      this.tail.next = null;
      return poppedNode.val;
    }
  }

  shift() {
    if (!this.head) return undefined;
    if (this.length == 1) {
      this.length -= 1;
      let firstNode = this.head;
      this.head = null;
      this.tail = null;
      return firstNode.val;
    }
    else {
      this.length -= 1
      let firstNode = this.head
      this.head = firstNode.next
      this.head.prev = null
      firstNode.next = null
      return firstNode.val
    }
  }

  unshift(val) {
    let newNode = new Node(val)
    if (!this.head) {
      this.length += 1;
      this.head = newNode;
      this.tail = newNode;
    }
    else {
      this.length += 1
      this.head.prev = newNode;
      newNode.next = this.head;
      this.head = newNode;
    }
    return this;
  }

  get(index) {
    if (index < 0 || index >= this.length) return null
    else if (index <= this.length/2) {
      let current = this.head;
      let count = 0
      while (count !== index) {
        current = current.next;
        count += 1;
      }
      return current;
    }
    else {
      let current = this.tail;
      let count = this.length - 1
      while (count !== index) {
        current = current.prev;
        count -= 1;
      }
      return current;
    }
  }

  set(index, val) {
    let foundNode = this.get(index);
    if (foundNode) {
      foundNode.val = val;
      return true;
    }
    return false;
  }

  insert(index, val) {
    if (index < 0 || index > this.length) return false;
    else if (index === this.length) return !!this.push(val);
    else if (index === 0) return !!this.unshift(value);

    let previousNode = this.get(index).prev;
    let nextNode = previousNode.next;
    let newNode = new Node(val);
    previousNode.next = newNode;
    newNode.next = nextNode;
    this.length += 1;
    return true;
  }

  remove(index) {
    if (index < 0 || index > this.length) return undefined;
    if (index === this.length - 1) return this.pop();
    if (index === 0) return this.shift();

    let removedNode = this.get(index);
    let prevNode = removedNode.prev;
    let nextNode = removedNode.next;
    prevNode.next = nextNode
    nextNode.prev = prevNode

    this.length -= 1
    return removedNode.val
  }
}

l = new doublyLinkedList()
l.push('zero')
l.push('one')
l.push('two')
l.push('three')
l.push('four')
console.log(l.get(1).val)
l.print()
