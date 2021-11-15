import Nodee from '../list/node';
import Storage from '../utils/storage';

export default class Queue<T> {
  private memory = new Storage<Nodee<T>>();

  private firstPosition: number | null = null;

  private lastPosition : number | null = null;

  public length = 0;

  enQueue(element: T):boolean {
    const newNode = new Nodee(element);
    const newIndexNode = this.memory.save(newNode);
    if (!this.firstPosition) {
      this.firstPosition = newIndexNode;
      this.lastPosition = newIndexNode;
      this.length += 1;
      return true;
    }
    if (!this.lastPosition) {
      return false;
    }
    this.memory.get(this.lastPosition).next = newIndexNode;
    this.lastPosition = newIndexNode;
    this.length += 1;
    return true;
  }

  deQueue():T | null {
    if (!this.firstPosition) {
      return null;
    }
    let prevNode = this.memory.get(this.firstPosition);
    let node = this.memory.get(this.firstPosition);
    while (node) {
      const { next } = node;
      if (next === this.lastPosition) {
        const { content } = this.memory.get(next);
        this.lastPosition = prevNode.next;
        node.next = null;
        this.memory.delete(next);
        this.length -= 1;
        if (this.length === 1) {
          this.lastPosition = this.firstPosition;
        }
        return content;
      }
      prevNode = this.memory.get(node.next);
      node = this.memory.get(next);
    }
    return null;
  }

  isEmpty():boolean {
    return this.length === 0;
  }
}
