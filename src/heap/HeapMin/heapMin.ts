import Heap from '../heap';

interface CompareFunction<T> {
  (a: T, b: T): number;
}

enum TypeOfHeap {
  min = 'min',
  max = 'max',
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
    this.up(this.memory.length - 1, TypeOfHeap.min);
  }

  public remove(element: T): void {
    const compare = (node: T) => this.compareFunction(node, element) === 0;
    const placeOfElementToDelete = this.memory.findIndex((compare));
    super.delete(placeOfElementToDelete);
    this.down(placeOfElementToDelete, TypeOfHeap.min);
    this.memory.pop();
  }

  public removeMin():T {
    const min = this.memory[0];
    this.remove(min);
    return min;
  }

  get length() {
    return this.memory.length;
  }
}
