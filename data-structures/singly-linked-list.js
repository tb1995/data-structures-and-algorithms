class Node {
  constructor(val) {
    this.val = val;
    this.next = null;
  }
}

class LinkedList {
  constructor() {
    this.head = null;
    this.tail = null;
    this.length = 0;
  }

  pushToFront(val) {
    if (this.length > 0) {
      let tempNode = this.head;
      this.head = new Node(val);

      this.head.next = tempNode;
      this.length++;
    } else {
      this.head = new Node(val);
      this.tail = this.head;
      this.length++;
    }
  }

  pushToEnd(val) {
    let newNode = new Node(val);
    if (this.length > 0) {
      this.tail.next = newNode;
      this.tail = newNode;
    } else {
      this.head = new Node(val);
      this.tail = this.head;
    }
    this.length++;
  }

  removeFromEnd() {
    if (this.head) {
      let penultimateNode = this.head;
      for (let i = 0; i < this.length - 2; i++) {
        penultimateNode = penultimateNode.next;
        // console.log("PenultimateNode", penultimateNode)
      }
      this.tail = penultimateNode;
      this.tail.next = null;
      this.length--;
      if (length === 0) {
        this.head = null;
        this.tail = null;
      }
    }
  }

  removeFromFront() {
    if (this.head) {
      let newHead = this.head.next;
      this.head = newHead;
      this.length--;

      if (length === 0) {
        this.head = null;
        this.tail = null;
      }
    }
  }

  get(index) {
    if (index < 0 || index > this.length) {
      return undefined;
    }
    let currentNode = this.head;

    for (let i = 0; i < index; i++) {
      if (currentNode.next) {
        currentNode = currentNode.next;
      } else {
        return undefined;
      }
    }
    return currentNode;
  }

  set(index, value) {
    let nodeToUpdate = this.get(index);
    nodeToUpdate.val = value;
    console.log(this);
  }

  insert(index, value) {
    let newNode = new Node(value);
    if (index < 0 || index > this.length) {
      return false;
    }

    if (index === 0) {
      newNode.next = this.head;
      this.head = newNode;
    }
    if (index === this.length) {
      pushToEnd(value);
    } else {
      let previousNode = this.get(index - 1);
      let nextNode = previousNode.next;
      previousNode.next = newNode;
      newNode.next = nextNode;
    }
    this.length++;
  }

  remove(index) {
    if (index < 0 || index > this.length) {
      return false;
    }
    if (index === 0) {
      this.removeFromFront();
    } else if (index === this.length) {
      this.removeFromEnd();
    } else {
      let previousNode = this.get(index - 1);
      previousNode.next = previousNode.next.next;
      this.length--;
    }
  }

  reverse() {
    var node = this.head;
    this.head = this.tail;
    this.tail = node;
    var next;
    var prev = null;
    for (let i = 0; i < this.length; i++) {
      next = node.next;
      node.next = prev;

      prev = node;
      node = next;
    }
  }
}

let originalNode = new Node(5);
let newList = new LinkedList(originalNode);

newList.pushToFront(4);
newList.pushToFront(3);
newList.pushToFront(2);
newList.pushToFront(1);
newList.pushToEnd(5);
// console.log(newList.set(1, "HelloWorld"))

console.log(newList);
