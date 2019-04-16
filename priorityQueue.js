class Node {
  constructor(val, priority) {
    this.val = val
    this.priority = priority
  }
}

class PriorityQueue {
  constructor() {
    this.values = []
  }

  swap(i1, i2) {
    let temp = this.values[i1]
    this.values[i1] = this.values[i2]
    this.values[i2] = temp
  }

  getParentIndex(n) {
    return Math.floor((n - 1) / 2)
  }

  getLeftChildIndex(n) {
    return (n * 2) + 1
  }

  getRightChildIndex(n) {
    return (n * 2) + 2
  }

  isIndexInBounds(n) {
    return !!(n >= 0 && n <= this.values.length)
  }

  insert(val, priority) {
    let newNode = new Node(val, priority)
    this.values.push(newNode) // push it
    this.bubbleUp(this.values.length - 1) // call bubble up with last value
  }

  bubbleUp(childIndex) {
    if (childIndex !== 0) {
      let parentIndex = this.getParentIndex(childIndex)
      let parentValue = this.values[parentIndex].priority
      let childValue = this.values[childIndex].priority
      if (childValue < parentValue){
        this.swap(childIndex, parentIndex)
        this.bubbleUp(parentIndex)
      }
    }
  }

  extractMin() {
    let length = this.values.length
    if (length <= 1) return this.values.shift() // return if it's only 1 long
    this.swap(0, length - 1)
    let maxValue = this.values.pop()
    this.bubbleDown(0)
    return maxValue
  }

  bubbleDown(parentIndex) {
    let length = this.values.length
    let leftChildIndex = this.getLeftChildIndex(parentIndex)
    let rightChildIndex = this.getRightChildIndex(parentIndex)
    let minChildIndex

    // get index of smallest child
    if (rightChildIndex >= length) {
      if (leftChildIndex >= length) {
        return
      }
      else minChildIndex = leftChildIndex
    }
    else {
      if (this.values[leftChildIndex].priority <= this.values[rightChildIndex].priority) {
        minChildIndex = leftChildIndex // left is biggest
      }
      else {
        minChildIndex = rightChildIndex
      }
    }

    // do the swapping
    if (this.values[parentIndex].priority > this.values[minChildIndex].priority) {
      this.swap(minChildIndex, parentIndex)
      this.bubbleDown(leftChildIndex)
    }
  }
}

let p = new PriorityQueue()
p.insert('cold', 4)
p.insert('concussion', 2)
p.insert('flu', 3)
p.insert('gunshot', 0)
p.insert('scrape', 5)
p.insert('broken arm', 2)
console.log(p.values);
console.log(p.extractMin())
console.log(p.extractMin())
console.log(p.extractMin())
console.log(p.extractMin())
console.log(p.extractMin())
console.log(p.extractMin())
