import Heap from '../heap';

interface CompareFunction<T> {
  (a: T, b: T): number;
}

export default class HeapOfMin<T> extends Heap<T> {
  static fromArray<R>(array: R[], sortFunction: CompareFunction<R>): HeapOfMin<R> {
    const heap = new HeapOfMin<R>(sortFunction);
    array.forEach((element: R) => {
      heap.insert(element);
    });
    return heap;
  }

  public insert(element : T): void {
    super.insert(element);
    this.up(this.memory.length - 1, 'min');
  }

  public remove(element: T): void {
    const compare = (node: T) => this.CompareFunction(node, element) === 0;
    const placeOfElementToDelete = this.memory.findIndex((compare));
    super.delete(placeOfElementToDelete);
    this.down(placeOfElementToDelete, 'min');
    this.memory.pop();
  }

  public extractMin():T {
    const min = this.memory[0];
    this.remove(min);
    return min;
  }

  get length() {
    return this.memory.length;
  }
}
