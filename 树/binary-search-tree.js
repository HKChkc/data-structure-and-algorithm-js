const Compare = {
  LESS_THAN: -1,
  BIGGER_THAN: 1,
  EQUALS: 0,
};

const defaultCompare = (a, b) => {
  if (a === b) {
    return Compare.EQUALS;
  }
  return a < b ? Compare.LESS_THAN : Compare.BIGGER_THAN;
};

class Node {
  constructor(key) {
    this.key = key;
    this.left = undefined;
    this.right = undefined;
  }
  toString() {
    return `${this.key}`;
  }
}

class BinarySearchTree {
  constructor(compareFn = defaultCompare) {
    this.compareFn = compareFn;
    this.root = undefined;
  }

  insert(key) {
    if (this.root == null) {
      this.root = new Node(key);
    } else {
      this.insertNode(this.root, key);
    }
  }

  insertNode(node, key) {
    if (this.compareFn(key, node.key) === Compare.LESS_THAN) {
      if (node.left == null) {
        node.left = new Node(key);
      } else {
        this.insertNode(node.left, key);
      }
    } else if (node.right == null) {
      node.right = new Node(key);
    } else {
      this.insertNode(node.right, key);
    }
  }

  getRoot() {
    return this.root;
  }

  search(key) {
    return this.searchNode(this.root, key);
  }

  searchNode(node, key) {
    if (node == null) {
      return false;
    }
    if (this.compareFn(key, node.key) === Compare.LESS_THAN) {
      return this.searchNode(node.left, key);
    } else if (this.compareFn(key, node.key) === Compare.BIGGER_THAN) {
      return this.searchNode(node.right, key);
    }
    // 直到相等为止
    return true;
  }

  // 中序遍历，从小到大
  inOrderTraverse(callback) {
    this.inOrderTraverseNode(this.root, callback);
  }

  // 弄清inOrderTraverseNode何时执行完毕
  inOrderTraverseNode(node, callback) {
    if (node != null) {
      // 左边的节点执行完后执行父节点，然后执行右边的子节点，右边的子节点执行完后，当前父节点执行完，重复
      // console.log('node.key :>> ', node.key);
      this.inOrderTraverseNode(node.left, callback);
      callback(node.key);
      this.inOrderTraverseNode(node.right, callback);
    }
  }

  // 先序遍历, 先执行父节点，之后左节点执行完后执行右节点
  preOrderTraverse(callback) {
    this.preOrderTraverseNode(this.root, callback);
  }

  preOrderTraverseNode(node, callback) {
    console.log('node && node.key :>> ', node && node.key);
    if (node != null) {
      callback(node.key);
      this.preOrderTraverseNode(node.left, callback);
      this.preOrderTraverseNode(node.right, callback);
    }
  }

  // 后续遍历
  postOrderTraverse(callback) {
    this.postOrderTraverseNode(this.root, callback);
  }

  postOrderTraverseNode(node, callback) {
    if (node != null) {
      this.postOrderTraverseNode(node.left, callback);
      this.postOrderTraverseNode(node.right, callback);
      callback(node.key);
    }
  }

  remove(key) {
    this.root = this.removeNode(this.root, key);
  }
  removeNode(node, key) {
    if (node == null) {
      return undefined;
    }
    if (this.compareFn(key, node.key) === Compare.LESS_THAN) {
      node.left = this.removeNode(node.left, key);
      console.log('node && node.key -LESS_THAN:>> ', node && node.key);
      return node;
    } else if (this.compareFn(key, node.key) === Compare.BIGGER_THAN) {
      node.right = this.removeNode(node.right, key);
      console.log('node && node.key -BIGGER_THAN:>> ', node && node.key);
      return node;
    }

    if (node.left == null && node.right == null) {
      // console.log('node && node.key ===========:>> ', node && node.key);
      node = undefined;
      return node;
    }

    if (node.left == null) {
      node = node.right;
      return node;
    } else if (node.right == null) {
      node = node.left;
      return node;
    }

    const aux = this.minNode(node.right);
    node.key = aux.key;
    node.right = this.removeNode(node.right, aux.key);
    return node;
  }
}

let tree = new BinarySearchTree();

tree.insert(11);
tree.insert(7);
tree.insert(15);
tree.insert(5);
tree.insert(3);
tree.insert(9);
tree.insert(8);
tree.insert(10);
tree.insert(13);
tree.insert(12);
tree.insert(14);
tree.insert(20);
tree.insert(18);
tree.insert(25);
// tree.insert(6);

// const printNode = value => console.log(value);
// const printNode = value => {};
// tree.inOrderTraverse(printNode);
// tree.preOrderTraverse(printNode);

// tree.postOrderTraverse(printNode);

tree.remove(5);
