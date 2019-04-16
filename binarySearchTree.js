class Node {
  constructor(value){
    this.value = value;
    this.left = null;
    this.right = null;
  }
}

class BinarySearchTree {
  constructor(){
    this.root = null;
  }

  // iterative version of insert that uses
  // a while(true) loop and a current node variable
  insert(value) {
    let newNode = new Node(value);
    if (this.root === null) {
      this.root = newNode;
      return this;
    }
    else {
      let current = this.root;
      while(true) {
        if (value == current.value) {
          return undefined;
        }
        else if (value < current.value) {
          if (current.left) {
            current = current.left;
          }
          else {
            current.left = newNode;
            return this;
          }
        }
        else if (value >= current.value) {
          if (current.right) {
            current = current.right;
          }
          else {
            current.right = newNode;
            return this;
          }
        }
      }
    }
  }

  // find a value
  find(value) {
    if (this.root === null) return false;
    let current = this.root,
        found = false;
    while (!found && current) {
      if (value < current.value) {
        current = current.left
      }
      else if (value > current.value){
        current = current.right
      }
      else if (value === current.value) found = true
    }
    if (found) return current
    else return false
  }

  // breadth-first search
  bfs() {
    let queue = [],
      visited = [];
    queue.push(this.root)
    while (queue.length) {
      let current = queue.shift();
      visited.push(current.value);
      if (current.left) queue.push(current.left);
      if (current.right) queue.push(current.right);
    }
    return visited;
  }

  // depth-first left to right
  dfsPreOrder() {
    let visited = [];
    let current = this.root

    function traverse(node){
      visited.push(node.value);
      if (node.left) traverse(node.left);
      if (node.right) traverse(node.right);
    }

    traverse(current);
    return visited;
  }

  dfsPostOrder() {
    let visited = [];
    let current = this.root

    function traverse(node){
      if (node.left) traverse(node.left);
      if (node.right) traverse(node.right);
      visited.push(node.value);
    }

    traverse(current);
    return visited;
  }

  dfsInOrder() {
    let visited = [];
    let current = this.root

    function traverse(node){
      if (node.left) traverse(node.left);
      visited.push(node.value);
      if (node.right) traverse(node.right);
    }

    traverse(current);
    return visited;
  }
}


let bst = new BinarySearchTree();
bst.insert(10);
bst.insert(5);
bst.insert(15);
bst.insert(17);
bst.insert(12);
bst.insert(92);
bst.insert(2);
console.log(bst.dfsPreOrder());
