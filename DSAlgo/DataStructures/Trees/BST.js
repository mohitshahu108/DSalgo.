class Node {
  constructor(val) {
    this.val = val;
    this.left = null;
    this.right = null;
  }
}
class BinarySearchTree {
  constructor() {
    this.root = null;
  }
  insert(val) {
    var newNode = new Node(val);
    if (!this.root) {
      this.root = newNode;
    } else {
      this.insertNode(this.root, newNode);
    }
    return newNode.val;
  }
  //helper function to help insert
  insertNode(node, newNode) {
    if (newNode.val > node.val) {
      if (node.right === null) {
        node.right = newNode;
      } else {
        this.insertNode(node.right, newNode);
      }
    }
    if (newNode.val < node.val) {
      if (node.left === null) {
        node.left = newNode;
      } else {
        this.insertNode(node.left, newNode);
      }
    }
  }

  /** Finding a Node is BST **/
  find(val) {
    if (!this.root) {
      return false;
    } else {
      return this.findNode(val, this.root);
    }
  }
  // helper method for find
  findNode(val, node) {
    if (val === node.val) return true;

    if (val > node.val) {
      if (node.right !== null) {
        node = node.right;
        return this.findNode(val, node);
      }
    } else {
      if (node.left !== null) {
        node = node.left;
        return this.findNode(val, node);
      }
    }
    return false;
  }
  BFS() {
    var queue = [];
    var data = [];
    var node = this.root;
    queue.push(this.root);
    while (queue.length) {
      node = queue.shift();
      data.push(node.val);
      if (node.left) queue.push(node.left);
      if (node.right) queue.push(node.right);
    }
    return data;
  }
  DFSPreOrder() {
    var data = [];
    var current = this.root;
    function traverse(node) {
      data.push(node.val);
      if (node.left) traverse(node.left);
      if (node.right) traverse(node.right);
    }
    traverse(current);
    return data;
  }
  DFSPostOrder() {
    var data = [];
    var current = this.root;
    function traverse(node) {
      if (node.left) traverse(node.left);
      if (node.right) traverse(node.right);

      data.push(node.val);
    }
    traverse(current);
    return data;
  }
  DFSInOrder() {
    var data = [];
    var current = this.root;
    function traverse(node) {
      if (node.left) traverse(node.left);
      data.push(node.val);
      if (node.right) traverse(node.right);

    }
    traverse(current);
    return data;
  }
}


var tree = new BinarySearchTree();
console.log(tree.insert(10));
console.log(tree.insert(6));
console.log(tree.insert(15));
console.log(tree.insert(3));
console.log(tree.insert(8));
console.log(tree.insert(20));
console.log(tree.DFSPreOrder());
console.log(tree.DFSPostOrder());
console.log(tree.DFSInOrder());
