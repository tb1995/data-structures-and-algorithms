class Node {
  constructor(value) {
    this.val = value;
    this.next = null;
    this.prev = null;
  }
}

class DoublyLinkedList {
  constructor() {
    this.head = null;
    this.tail = null;
    this.length = 0;
  }

  pushToFront(val) {
    let node = new Node(val);
    if (!this.head) {
      this.head = node;
      this.tail = node;
    } else {
      this.head.prev = node;
      node.next = this.head;
      this.head = node;
    }
    this.length++;
  }

  pushToEnd(val) {
    let node = new Node(val);
    if (!this.head) {
      this.pushToFront(val);
    } else {
      this.tail.next = node;
      node.prev = this.tail;
      this.tail = node;
      this.length++;
    }
  }

  removeFromFront() {
    if (this.head) {
      if (this.length === 1) {
        this.length--;
        this.head = null;
        this.tail = null;
        return;
      }
      let oldNode = this.head;
      this.head = this.head.next;
      this.head.prev = null;
      this.length--;
      oldNode.next = null;
    }
  }

  removeFromEnd() {
    if (this.head) {
      if (this.length === 1) {
        this.removeFromFront();
      } else {
        let oldNode = this.tail;
        this.tail = this.tail.prev;
        this.tail.next = null;
        this.length--;
        oldNode.prev = null;
      }
    }
  }

  get(i) {
    if (i > this.length || i < 0) return undefined;
    let node = this.head;
    for (let index = 0; index < i; index++) {
      if (node.next) {
        node = node.next;
      } else {
        return undefined;
      }
    }
    return node;
  }

  set(index, value) {
    if (index < 0 || index > this.length) return undefined;

    let node = this.get(index);
    node.val = value;
  }

  insert(index, value) {
    if (index < 0 || index > this.length) return undefined;
    if (index === 0) {
      this.pushToFront(value);
    } else if (index === this.length - 1) {
      this.pushToEnd(value);
    } else {
      let newNode = new Node(value);

      let prevNode = this.get(index - 1);
      let nextNode = this.get(index);

      newNode.next = nextNode;
      newNode.prev = prevNode;
      prevNode.next = newNode;
      nextNode.prev = newNode;
      this.length++;
    }
  }

  remove(index) {
    if (index < 0 || index > this.length) return undefined;
    if (index === 0) {
      this.removeFromFront();
    } else if (index === this.length - 1) {
      this.removeFromEnd();
    } else {
      let prevNode = this.get(index - 1);
      let currentNode = prevNode.next;
      let nextNode = prevNode.next.next;

      prevNode.next = nextNode;
      nextNode.prev = prevNode;
      currentNode.next = null;
      currentNode.prev = null;
      this.length--;
    }
  }

  reverse() {
    if (this.length > 1) {
      let newHead = this.tail;
      this.tail = this.head;
      this.head = newHead;

      for (let i = 0; i < this.length; i++) {
        let currentNode = this.get(i);
        let prev = currentNode.prev;
        currentNode.prev = currentNode.next;
        currentNode.next = prev;
      }
    }
  }
}
