class Node {
  constructor(value) {
    this.value = value;
    this.left = null;
    this.right = null;
  }
}

class BST {
  constructor() {
    this.root = null;
  }

  inOrderHelper(p) {}

  preOrderHelper(p) {}

  postOrderHelper(p) {}

  findMin(node) {
    if (node.left == null) {
      return node;
    }

    return this.findMin(node.left);
  }

  deleteNode(root, value) {
    if (root == null) {
      return root;
    }

    if (value < root.value) {
      root.left = this.deleteNode(root.left, value);
    } else if (value > root.value) {
      root.right = this.deleteNode(root.right, value);
    } else {
      if (root.left == null) {
        return root.right;
      } else if (root.right == null) {
        return root.left;
      } else {
        const temp = this.findMin(root.right);
        root.value = temp.value;
        root.right = this.deleteNode(root.right, temp.value);
      }
    }

    return root;
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

  deleteMethod(value) {
    this.root = this.deleteNode(this.root, value);
  }
  search(value) {
    let current = this.root;

    while (current != null) {
      if (value < current.value) {
        current = current.left;
      } else if (value > current.value) {
        current = current.right;
      } else {
        return true;
      }
    }

    return false;
  }

  inOrder() {}

  preOrder() {}

  postOrder() {}
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
console.dir(bst, { depth: null });

bst.deleteMethod(8);
console.dir(bst, { depth: null });

console.log(bst.search(7));
