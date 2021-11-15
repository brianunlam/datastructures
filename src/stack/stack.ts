import Storage from '../utils/storage';
import Nodee from './nodeofStack';

export default class Stack<T> {
  private memory = new Storage<Nodee<T>>();

  private lastPosition: number | null = null;

  public length = 0;

  push(element: T): void {
    const newNode = new Nodee(element);
    const newIndexNode = this.memory.save(newNode);
    if (!this.lastPosition) {
      this.lastPosition = newIndexNode;
      this.length += 1;
    } else {
      newNode.previous = this.lastPosition;
      this.lastPosition = newIndexNode;
      this.length += 1;
    }
  }

  pop(): T | null {
    if (!this.lastPosition) {
      return null;
    }
    const position = this.lastPosition;
    const nodeToRemove = this.memory.get(position);
    this.lastPosition = nodeToRemove.previous;
    const { content } = nodeToRemove;
    this.memory.delete(position);
    return content;
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
