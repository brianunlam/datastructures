import randomIntFromInterval from './randomIntFromInterval';

const MAX_STORAGE_SIZE = Number.MAX_SAFE_INTEGER;

export default class Storage <T> {
  private storage = new Map();

  public save(node: T): number {
    const freePosition = this.getFreePosition();
    this.storage.set(freePosition, node);
    return freePosition;
  }

  public get(ix: number): T {
    return this.storage.get(ix);
  }

  public delete(ix: number): T {
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
