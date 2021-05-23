class Node {
  constructor(val) {
    this.val = val;
    this.next = null;
  }
}
class Stack {
  constructor() {
    this.first = null;
    this.last = null;
    this.size = 0;
  }
  push(val) {
    var newNode = new Node(val);
    if (!this.first) {
      this.first = newNode;
      this.last = newNode;
    } else {
      var temp = this.first;
      this.first = newNode;
      newNode.next = temp;
    }
    return ++this.size;
  }
  pop() {
    if(!this.first) return null;
    var temp = this.first;
    if(this.first === this.last){
        this.last = null;
    }
    this.first = this.first.next;
    this.size--;
    return temp.val;
  }
}

let stack = new Stack();
console.log(stack.push(7));
console.log(stack.push(8));
console.log(stack.push(9));
console.log(stack.pop());
console.log(stack);
console.log(stack.pop());
console.log(stack);