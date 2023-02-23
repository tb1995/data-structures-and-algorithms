class Node {
  constructor(value) {
    this.value = value;
    this.right = null;
    this.left = null;
  }
}

class BinarySearchTree {
  constructor() {
    this.root = null;
  }

  insert(value) {
    let insertNode = new Node(value);
    if (!this.root) {
      this.root = insertNode;
      return this;
    }
    let currentNode = this.root;
    while (true) {
      if (insertNode.value === currentNode.value) return undefined;
      if (insertNode.value > currentNode.value) {
        if (!currentNode.right) {
          currentNode.right = insertNode;
          return this;
        }
        currentNode = currentNode.right;
      } else {
        if (!currentNode.left) {
          currentNode.left = insertNode;
          return this;
        }
        currentNode = currentNode.left;
      }
    }
  }

  search(value) {
    if (!this.root) {
      return false;
    }
    let currentNode = this.root;
    while (true) {
      if (value === currentNode.value) {
        return true;
      }

      if (value > currentNode.value) {
        if (!currentNode.right) {
          return false;
        }
        currentNode = currentNode.right;
      } else {
        if (!currentNode.left) {
          return false;
        }
        currentNode = currentNode.left;
      }
    }
    return false;
  }

  breadthFirstSearch() {
    if (!this.root) return [];

    let queue = [];
    let visited = [];
    queue.push(this.root);

    while (queue.length > 0) {
      console.log(queue);
      let currentNode = queue.shift();
      visited.push(currentNode.value);
      if (currentNode.left) {
        queue.push(currentNode.left);
      }
      if (currentNode.right) {
        queue.push(currentNode.right);
      }
    }
    return visited;
  }

  DFSPreOrder() {
    let visited = [];
    function traverse(node) {
      visited.push(node.value);
      if (node.left) traverse(node.left);
      if (node.right) traverse(node.right);
    }
    traverse(this.root);
    return visited;
  }

  DFSPostOrder() {
    let visited = [];
    function traverse(node) {
      if (node.left) traverse(node.left);
      if (node.right) traverse(node.right);
      visited.push(node.value);
    }
    traverse(this.root);
    return visited;
  }

  DFSInOrder() {
    let visited = [];
    function traverse(node) {
      if (node.left) traverse(node.left);
      visited.push(node.value);
      if (node.right) traverse(node.right);
    }
    traverse(this.root);
    return visited;
  }
}

// let tree = new BinarySearchTree();
// tree.root = new Node(10);
// tree.root.left = new Node(5);
// tree.root.right = new Node(15);
// tree.root.left.right = new Node(7);
// tree.root.left.left = new Node(3);
// tree.root.right.left = new Node(13);
// tree.root.right.right = new Node(17);
