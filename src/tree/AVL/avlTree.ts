import Stack from '../../stack/stack';
import BinarySearchTree from '../BST/binarySearchTree';
import TreeNode from '../BST/treeNode';

interface CompareFunction<T> {
  (a: T, b: T): number;
}

export default class AvlTree<T> extends BinarySearchTree<T> {
  public length: number = 0;

  public stackOfNodesToBalance = new Stack<number>();

  static fromArray<R>(array: R[], sortFunction: CompareFunction<R>): AvlTree<R> {
    const tree = new AvlTree<R>(sortFunction);
    array.forEach((element: R) => {
      tree.add(element);
    });
    return tree;
  }

  public add(element: T): boolean {
    if (!this.root) {
      const newNode = new TreeNode(element);
      this.root = this.memory.save(newNode);
      this.length += 1;
      return true;
    }
    const parentNode = this.memory.get(this.root);
    this.stackOfNodesToBalance.push(this.root);
    if (this.recursiveAdd(parentNode, element)) {
      this.length += 1;

      return true;
    }
    return false;
  }

  public delete(element: T):T | null {
    if (!this.root) {
      return null;
    }
    this.stackOfNodesToBalance.push(this.root);
    const result = this.recursiveDelete(
      this.memory.get(this.root),
      this.memory.get(this.root),
      element,
    );
    if (result) {
      this.emptyStackForBalancing();
      this.length -= 1;
    }
    return result;
  }

  private getHeight(root: number, initHeight = 0):number {
    let height = initHeight;
    const rootNode = this.memory.get(root);
    if (!rootNode) {
      return 0;
    }
    if (!rootNode.right && !rootNode.left) {
      return height;
    }
    const lHeight = (!rootNode.left)
      ? height
      : this.getHeight(rootNode.left, height + 1);
    const rHeight = (!rootNode.right)
      ? height
      : this.getHeight(rootNode.right, height + 1);
    height = Math.max(lHeight, rHeight);
    return height;
  }

  private getBF(root: number):number {
    const rootNode = this.memory.get(root);
    if (!rootNode) {
      return 0;
    }
    const lHeight = (rootNode.left)
      ? this.getHeight(rootNode.left) + 1
      : 0;
    const rHeight = (rootNode.right)
      ? this.getHeight(rootNode.right) + 1
      : 0;
    return rHeight - lHeight;
  }

  private simpleRotation(root: number, direction: 'left' | 'right' | null):boolean {
    const rootNode = this.memory.get(root);
    if (!direction) {
      return false;
    }
    const oppositeDirection = direction === 'left' ? 'left' : 'right';
    const child = rootNode[direction] && this.memory.get(rootNode[direction] as number);
    if (!child) {
      return false;
    }
    const auxIdNode = rootNode[direction];
    rootNode[direction] = child[oppositeDirection];
    child[oppositeDirection] = root;
    this.root = auxIdNode;
    return true;
  }

  private doubleRotation(root: number, direction: 'left' | 'right' | null):boolean {
    const rootNode = this.memory.get(root);
    if (!direction) {
      return false;
    }
    const oppositeDirection = direction === 'left' ? 'left' : 'right';
    const child = (rootNode[direction]) && this.memory.get(rootNode[direction] as number);
    if (!child) {
      return false;
    }
    const grandChild = (child[oppositeDirection])
    && this.memory.get(child[oppositeDirection] as number);
    if (!grandChild) {
      return false;
    }
    // primera parte
    const auxIdNode = child[oppositeDirection];
    child[oppositeDirection] = grandChild[direction];
    grandChild[direction] = rootNode[direction];
    rootNode[direction] = child[oppositeDirection];
    // segunda parte
    rootNode[direction] = grandChild[oppositeDirection];
    grandChild[oppositeDirection] = root;
    this.root = auxIdNode;
    return true;
  }

  public recursiveTravelPreOrder(callback: (content:T)=> void,
    rootNode: number = (this.root as number)):void {
    const parentNode = this.memory.get(rootNode);
    if (parentNode.content) {
      callback(parentNode.content);
    }
    if (parentNode.left) {
      this.recursiveTravelPreOrder(callback, parentNode.left);
    }
    if (parentNode.right) {
      this.recursiveTravelPreOrder(callback, parentNode.right);
    }
  }

  private emptyStackForBalancing() {
    let node = !this.stackOfNodesToBalance.isEmpty
      ? null
      : this.stackOfNodesToBalance.pop();
    let exit = false;
    while (node && !exit) {
      if (this.getBF(node) <= -2) {
        if (this.memory.get(node).left) {
          if (this.getBF(this.memory.get(node).left as number) >= 1) {
            this.doubleRotation(node, 'left');
            exit = true;
          } else {
            this.simpleRotation(node, 'left');
            exit = true;
          }
        }
      } else if (this.getBF(node) >= 2) {
        if (this.memory.get(node).right) {
          if (this.getBF(this.memory.get(node).right as number) <= -1) {
            this.doubleRotation(node, 'right');
            exit = true;
          } else {
            this.simpleRotation(node, 'right');
            exit = true;
          }
        }
      }
      node = !this.stackOfNodesToBalance.isEmpty
        ? this.stackOfNodesToBalance.pop()
        : null;
    }
  }
}
