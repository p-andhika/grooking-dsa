class Node {
  constructor(value) {
    this.value = value;
    this.left = null;
    this.right = null;
  }
}

class BST {
  constructor() {
    this.root = null
  }

  inOrderHelper(p) {
  }

  preOrderHelper(p) {
  }

  postOrderHelper(p) {
  }

  findMin(node) {
  }

  deleteNode(root, node) {
  }

  insert(value) {
    const newNode = new Node(value);

    if (this.root == null) {
      this.root = newNode;
    } else {
      let current = this.root;
      let parent = null;

      while (current != null) {
        parent = current;

        if (value < current.value) {
          current = current.left;
        } else {
          current = current.right;
        }
      }

      if (value < parent.value) {
        parent.left = newNode;
      } else {
        parent.right = newNode;
      }
    }
  }

  deleteMethod(node) {
  }

  search(node) {
  }

  inOrder() {
  }

  preOrder() {
  }

  postOrder() {
  }
}

const bst = new BST();
console.log(bst);

bst.insert(5);
console.log(bst);

bst.insert(3);
console.log(bst);

bst.insert(7);
console.log(bst);

bst.insert(8);
console.dir(bst, {depth: null});
