class Node {
  constructor(value) {
    this.val = value;
    this.next = null;
  }
}

class Queue {
  constructor() {
    this.first = null;
    this.last = null;
    this.size = 0;
  }

  push(value) {
    let newNode = new Node(value);
    if (this.size === 0) {
      this.first = newNode;
      this.last = newNode;
      this.size++;
      return this.size;
    }
    this.last.next = newNode;
    this.last = newNode;
    this.size++;
    return this.size;
  }

  pop() {
    if (this.size === 0) {
      return null;
    } else if (this.size === 1) {
      let node = this.first;
      this.first = null;
      this.last = null;
      this.size--;
      return node;
    }
    let oldFirst = this.first;
    let newFirst = oldFirst.next;
    oldFirst.next = null;
    this.first = newFirst;
    this.size--;
    return oldFirst;
  }
}
