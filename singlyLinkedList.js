'use strict'

class Node {
  constructor(val) {
    this.val = val
    this.next = null
  }
}

class SinglyLinkedList {
  constructor() {
    this.head = null
    this.tail = null
    this.length = 0
  }

  print() {
    let arr = []
    let current = this.head
    while (current) {
      arr.push(current.val)
      current = current.next
    }
    console.log(arr)
  }

  push(val) {
    let newNode = new Node(val)
    if (!this.head) {
      this.head = newNode
      this.tail = newNode
    } else {
      this.tail.next = newNode
      this.tail = newNode
    }
    this.length += 1
    return this
  }

  pop() {
    if (!this.head) return undefined
    else {
      let current = this.head
      let newTail = current
      while (current.next) {
        newTail = current
        current = current.next
      }
      this.tail = newTail
      this.length -= 1
      if (this.length == 0) {
        this.head = null
        this.tail = null
      }
      return current.val
    }
  }

  shift() {
    if (!this.head) return undefined
    let value = this.head.val
    this.head = this.head.next
    this.length -= 1
    if (this.length == 0) {
      this.head = null
      this.tail = null
    }
    return value
  }

  unshift(val) {
    let newHead = new Node(val)
    if (!this.head) {
      this.head = newHead
      this.tail = newHead
    } else {
      newHead.next = this.head
      this.head = newHead
      this.length += 1
      return this
    }
  }

  get(index) {
    if (index < 0 || index >= this.length) return null
    else {
      let current = this.head
      let counter = 0
      while (counter !== index) {
        current = current.next
        counter += 1
      }
      return current
    }
  }

  set(index, value) {
    let foundNode = this.get(index)
    if (foundNode) {
      foundNode.val = value
      return true
    } else return false
  }

  insert(index, value) {
    if (index < 0 || index > this.length) return false
    else if (index === this.length) return !!this.push(value)
    else if (index === 0) return !!this.unshift(value)

    let previousNode = this.get(index - 1)
    let newNode = new Node(value)
    let nextNode = previousNode.next
    previousNode.next = newNode
    newNode.next = nextNode
    this.length += 1
    return true
  }

  remove(index) {
    if (index < 0 || index > this.length) return undefined
    if (index === this.length - 1) return this.pop()
    if (index === 0) return this.shift()

    let foundNode = this.get(index - 1)
    let removed = foundNode.next
    foundNode.next = removed.next

    this.length -= 1
    return removed.val
  }

  reverse() {
    let node = this.head
    this.head = this.tail
    this.tail = node

    let prev = null
    let next
    for (let i = 0; i < this.length; i += 1) {
      next = node.next
      node.next = prev
      prev = node
      node = next
    }
    return this
  }
}

let l = new SinglyLinkedList()
l.push('one')
l.push('two')
l.push('three')
l.push('four')
l.push('five')
l.reverse()
l.print()
