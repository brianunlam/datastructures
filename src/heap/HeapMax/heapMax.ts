import Heap from '../heap';

interface CompareFunction<T> {
  (a: T, b: T): number;
}

enum TypeOfHeap {
  min = 'min',
  max = 'max',
}
export default class HeapOfMax<T> extends Heap<T> {
  static fromArray<R>(array: R[], sortFunction: CompareFunction<R>): HeapOfMax<R> {
    const heap = new HeapOfMax<R>(sortFunction);
    array.forEach((element: R) => {
      heap.insert(element);
    });
    return heap;
  }

  public insert(element : T): void {
    super.insert(element);
    this.up(this.memory.length - 1, TypeOfHeap.max);
  }

  public remove(element: T): void {
    const compare = (node: T) => this.compareFunction(node, element) === 0;
    const placeOfElementToDelete = this.memory.findIndex((compare));
    super.delete(placeOfElementToDelete);
    this.down(placeOfElementToDelete, TypeOfHeap.max);
    this.memory.pop();
  }

  public removeMax():T {
    const max = this.memory[0];
    this.remove(max);
    return max;
  }

  get length() {
    return this.memory.length;
  }
}
