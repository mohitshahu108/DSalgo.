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
  enQueue(value) {
    var newNode = new Node(value);
    if (!this.first) {
      this.first = newNode;
      this.last = newNode;
    } else {
      var current = this.last;
      current.next = newNode;
      this.last = newNode;
    }
    ++this.size;
    return this;
  }
  deQueue() {
    if (this.size === 0) return null;
    if (this.size === 1) {
      this.first = null;
      this.last = null;
    }
    if (!this.first) return null;
    var current = this.first;
    this.first = current.next;
    current.next = null;
    --this.size;
    return this;
  }
}

let q = new Queue();
console.log(q.enQueue(7));
console.log(q.enQueue(8));
console.log(q.enQueue(9));
console.log(q.deQueue());
