import Nodee from '../list/node';
import randomIntFromInterval from './randomIntFromInterval';

const MAX_STORAGE_SIZE = Number.MAX_SAFE_INTEGER;

export default class Storage <T> {
  private storage = new Map();

  public save(node: Nodee<T>): number {
    const freePosition = this.getFreePosition();
    this.storage.set(freePosition, node);
    return freePosition;
  }

  public get(ix: number): Nodee<T> {
    return this.storage.get(ix);
  }

  public delete(ix: number) {
    const deleted = this.storage.get(ix);
    this.storage.delete(ix);
    return deleted;
  }

  private getFreePosition(): number {
    const newRandomNumber = randomIntFromInterval(1, MAX_STORAGE_SIZE);
    if (this.storage.has(newRandomNumber)) {
      return this.getFreePosition();
    }
    return newRandomNumber;
  }
}
