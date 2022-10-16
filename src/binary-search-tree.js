const { NotImplementedError } = require("../extensions/index.js");

const { Node } = require("../extensions/list-tree.js");

/**
 * Implement simple binary search tree according to task description
 * using Node from extensions
 */
class BinarySearchTree {
  mainRoot;
  root() {
    return this.mainRoot ? this.mainRoot : null;
  }

  add(data) {
    if (this.mainRoot) {
      let node = new Node(data);
      let parentNode = this.getParentNodeForInsert(this.mainRoot, node.data);
      if (parentNode.data >= node.data) {
        parentNode.left = node;
      } else {
        parentNode.right = node;
      }
    } else {
      this.mainRoot = new Node(data);
    }
  }

  has(data) {
    return !!this.findNodeWithData(this.mainRoot, data);
  }

  find(data) {
    return this.findNodeWithData(this.mainRoot, data);
  }

  remove(data) {
    if (!this.mainRoot) {
      return;
    }
    if (this.mainRoot.data === data) {
      this.mainRoot = null;
    }
    let parentRemoveNode = this.getParentNodeForRemove(this.mainRoot, data);
    let removeNode;
    
    /*     if (parentRemoveNode.left.data === data) {
      removeNode = parentRemoveNode.left.data;
    } else if (parentRemoveNode.right.data === data) {
      removeNode = parentRemoveNode.right.data;
    }
    console.debug('MY INFO', parentRemoveNode, removeNode, 'MY INFO')
 */
    //вверху получили parent ноду для удаления
    //проверить есть ли у удаляемого элемента правая и левая нода
    //
  }

  min() {
    if (this.mainRoot) {
      let currentNode = this.mainRoot;
      while (true) {
        if (currentNode.left) {
          currentNode = currentNode.left;
        } else {
          break;
        }
      }
      return currentNode.data;
    } else {
      return null;
    }
  }

  max() {
    if (this.mainRoot) {
      let currentNode = this.mainRoot;
      while (true) {
        if (currentNode.right) {
          currentNode = currentNode.right;
        } else {
          break;
        }
      }
      return currentNode.data;
    } else {
      return null;
    }
  }

  getParentNodeForInsert(root, data) {
    if (root.left == null && root.right == null) {
      return root;
    }
    if (root.data >= data) {
      if (root.left == null) {
        return root;
      } else {
        return this.getParentNodeForInsert(root.left, data);
      }
    }
    if (root.data < data) {
      if (root.right == null) {
        return root;
      } else {
        return this.getParentNodeForInsert(root.right, data);
      }
    }
  }

  findNodeWithData(root, data) {
    if (root.data === data) {
      return root;
    }
    if (root.data >= data && root.left != null) {
      return this.findNodeWithData(root.left, data);
    }
    if (root.data < data && root.right != null) {
      return this.findNodeWithData(root.right, data);
    } else {
      return null;
    }
  }
  getParentNodeForRemove(root, data) {
    if (root.data >= data) {
      if (root.left && root.left.data != data) {
        this.getParentNodeForRemove(root.left, data);
      } else if (root.left && root.left.data === data) {
        return root;
      }
    }
    if (root.data < data) {
      if (root.right && root.right.data != data) {
        this.getParentNodeForRemove(root.right, data);
      } else if (root.right && root.right.data === data) {
        return root;
      }
    }
  }
}

module.exports = {
  BinarySearchTree,
};
