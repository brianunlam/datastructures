import Storage from './storage';
import Nodee from './nodeofStack';

export default class Stack<T> {
  private memory = new Storage<T>();

  private lastPosition: number | null = null;

  public length = 0;

  push(element: T): void {
    if (!this.lastPosition) {
      const newNode = new Nodee(element);
      const newIndexNode = this.memory.save(newNode);
      this.lastPosition = newIndexNode;
      this.length += 1;
    } else {
      const newNode = new Nodee(element);
      const newIndexNode = this.memory.save(newNode);
      newNode.previus = this.lastPosition;
      this.lastPosition = newIndexNode;
      this.length += 1;
    }
  }

  pop(): T | null {
    if (!this.lastPosition) {
      return null;
    }
    const nodeToRemove = this.memory.get(this.lastPosition);
    this.memory.delete(this.lastPosition);
    this.lastPosition = nodeToRemove.previus;
    return nodeToRemove.content;
  }

  peek():T | null {
    if (!this.lastPosition) {
      return null;
    }
    return this.memory.get(this.lastPosition).content;
  }

  isEmpty():boolean {
    return this.length === 0;
  }
}
