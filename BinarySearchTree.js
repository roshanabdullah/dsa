class Node {
  constructor(value) {
    this.left = null;
    this.right = null;
    this.value = value;
  }
}

class BinarySearchTree {
  constructor() {
    this.root = null;
  }
// insert a new node to the tree
  insert(value) {
    var newNode = new Node(value);
    if(this.root == null) {
      this.root = newNode;
    }
    else {
      // our current root node
      let currentNode = this.root;
    
      while(true) {
        // if entered value 
        if(value < currentNode.value) {
          // checking for if the currentNode.left does not exist
          if(!currentNode.left) {
            currentNode.left = newNode;
            return this;
          }
          // if it does exist, move to the left
          currentNode = currentNode.left;
        }
        else {
          // checking for if the currentNode.right does exist
          if(!currentNode.right) {
            currentNode.right = newNode;
            return this;
          }
          // if it does exist, we move to the right
          currentNode = currentNode.right;
        }
      }
    }
  }
  
}

const tree = new BinarySearchTree()
tree.insert(10)
tree.insert(2);
tree.insert(11)
console.log(tree)
