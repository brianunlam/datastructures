import TreeNode from './treeNode';
import Storage from '../../utils/storage';

export default class BinarySearchTree<T> {
  protected memory = new Storage<TreeNode<T>>();

  protected root: number | null = null;

  public length: number = 0;

  constructor(protected sortFunction: (a: T, b: T) => number) {
  }

  public add(element: T): boolean {
    if (!this.root) {
      const newNode = new TreeNode(element);
      this.root = this.memory.save(newNode);
      this.length += 1;
      return true;
    }
    const parentNode = this.memory.get(this.root);
    if (this.recursiveAdd(parentNode, element)) {
      this.length += 1;
      return true;
    }
    return false;
  }

  protected recursiveAdd(rootNode: TreeNode<T>, element: T):boolean {
    const parentNode = rootNode;
    if ((this.sortFunction(parentNode.content, element)) > 0) {
      if (!parentNode.left) {
        const newNode = new TreeNode(element);
        parentNode.left = this.memory.save(newNode);
        return true;
      }
      return this.recursiveAdd(this.memory.get(parentNode.left), element);
    } if ((this.sortFunction(parentNode.content, element)) < 0) {
      if (!parentNode.right) {
        const newNode = new TreeNode(element);
        parentNode.right = this.memory.save(newNode);
        return true;
      }
      return this.recursiveAdd(this.memory.get(parentNode.right), element);
    }
    return false;
  }

  public delete(element: T):T | null {
    if (!this.root) {
      return null;
    }
    const result = this.recursiveDelete(
      this.memory.get(this.root),
      this.memory.get(this.root),
      element,
    );
    if (result) {
      this.length -= 1;
    }
    return result;
  }

  protected recursiveDelete(oldNode: TreeNode<T>, rootNode: TreeNode<T>, element: T): T | null {
    const oldParentNode = oldNode;
    const parentNode = rootNode;
    if (this.sortFunction(parentNode.content, element) > 0) {
      if (parentNode.left) {
        return this.recursiveDelete(parentNode, this.memory.get(parentNode.left), element);
      }
    }
    if (this.sortFunction(parentNode.content, element) < 0) {
      if (parentNode.right) {
        return this.recursiveDelete(parentNode, this.memory.get(parentNode.right), element);
      }
    }
    if (this.sortFunction(parentNode.content, element) === 0) {
      if (parentNode.left === null && parentNode.right === null) {
        if (oldParentNode.left) {
          const conditionLeft = this.memory.get(oldParentNode.left).content === parentNode.content;
          if (conditionLeft) {
            const contentToreturn = parentNode.content;
            this.memory.delete(oldParentNode.left);
            oldParentNode.left = null;
            return contentToreturn;
          }
        }
        if (oldParentNode.right) {
          const conditionRight = this.memory.get(
            oldParentNode.right,
          ).content === parentNode.content;
          if (conditionRight) {
            const contentToreturn = parentNode.content;
            this.memory.delete(oldParentNode.right);
            oldParentNode.right = null;
            return contentToreturn;
          }
        }
      }
    }
    return null;
  }

  public travel(callback: (content: T) => void, PostOrder: boolean = false):void {
    if (this.root) {
      if (!PostOrder) {
        this.recursiveTravelInOrder(this.memory.get(this.root), callback);
      } else {
        this.recursiveTravelPostOrder(this.memory.get(this.root), callback);
      }
    }
  }

  private recursiveTravelInOrder(rootNode: TreeNode<T>, callback: (content:T)=> void):void {
    const parentNode = rootNode;
    if (parentNode.left) {
      this.recursiveTravelInOrder(this.memory.get(parentNode.left), callback);
    }
    if (parentNode.content) {
      callback(parentNode.content);
    }
    if (parentNode.right) {
      this.recursiveTravelInOrder(this.memory.get(parentNode.right), callback);
    }
  }

  private recursiveTravelPostOrder(rootNode: TreeNode<T>, callback: (content:T)=> void):void {
    const parentNode = rootNode;
    if (parentNode.left) {
      this.recursiveTravelPostOrder(this.memory.get(parentNode.left), callback);
    }
    if (parentNode.right) {
      this.recursiveTravelPostOrder(this.memory.get(parentNode.right), callback);
    }
    if (parentNode.content) {
      callback(parentNode.content);
    }
  }

  public search(element: T):T | null {
    if (this.root) {
      const parentNode = this.memory.get(this.root);
      return this.recursiveSearch(parentNode, element);
    }
    return null;
  }

  private recursiveSearch(rootNode: TreeNode<T>, element: T): T | null {
    const parentNode = rootNode;
    if (rootNode) {
      if (this.sortFunction(parentNode.content, element) > 0) {
        if (parentNode.left) {
          return this.recursiveSearch(this.memory.get(parentNode.left), element);
        }
      }
      if (this.sortFunction(parentNode.content, element) < 0) {
        if (parentNode.right) {
          return this.recursiveSearch(this.memory.get(parentNode.right), element);
        }
      }
      if (this.sortFunction(parentNode.content, element) === 0) {
        return element;
      }
    }
    return null;
  }

  get numberOfNodes(): number {
    return this.length;
  }
}
