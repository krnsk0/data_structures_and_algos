class MaxBinaryHeap {
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

  insert(val) {
    this.values.push(val) // push it
    this.bubbleUp(this.values.length - 1) // call bubble up with last value
  }

  bubbleUp(childIndex) {
    if (childIndex !== 0) {
      let parentIndex = this.getParentIndex(childIndex)
      let parentValue = this.values[parentIndex]
      let childValue = this.values[childIndex]
      if (childValue > parentValue){
        this.swap(childIndex, parentIndex)
        this.bubbleUp(parentIndex)
      }
    }
  }

  extractMax() {
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
    let biggestChildIndex

    // get index of biggest child
    if (rightChildIndex >= length) {
      if (leftChildIndex >= length) {
        return
      }
      else biggestChildIndex = leftChildIndex
    }
    else {
      if (this.values[leftChildIndex] >= this.values[rightChildIndex]) {
        biggestChildIndex = leftChildIndex // left is biggest
      }
      else {
        biggestChildIndex = rightChildIndex
      }
    }

    // do the swapping
    if (this.values[parentIndex] < this.values[biggestChildIndex]) {
      this.swap(biggestChildIndex, parentIndex)
      this.bubbleDown(leftChildIndex)
    }
  }

}


m = new MaxBinaryHeap()
m.insert(41)
m.insert(39)
m.insert(33)
m.insert(18)
m.insert(27)
m.insert(12)
m.insert(55)
console.log(m.extractMax());
console.log(m.extractMax());
console.log(m.extractMax());
console.log(m.extractMax());
console.log(m.extractMax());
console.log(m.extractMax());
console.log(m.extractMax());


console.log(m.values);
