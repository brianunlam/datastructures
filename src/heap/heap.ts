export default class Heap<T> {
  protected memory: T[] = [];

  constructor(protected CompareFunction: (a: T, b: T) => number) {
  }

  public insert(element : T): void {
    this.memory.push(element);
  }

  protected up(placeInArray: number, typeOfHeap: 'min' | 'max'): void {
    const elementToUp = this.memory[placeInArray];
    const placeInArrayOfParentNode = this.parent(placeInArray);
    const isRoot = this.CompareFunction(elementToUp, this.memory[0]) === 0;
    const comparer = typeOfHeap === 'min'
      ? this.CompareFunction(elementToUp, this.memory[placeInArrayOfParentNode]) < 0
      : this.CompareFunction(elementToUp, this.memory[placeInArrayOfParentNode]) > 0;
    if (!isRoot && comparer) {
      const aux = this.memory[placeInArrayOfParentNode];
      this.memory[placeInArrayOfParentNode] = elementToUp;
      this.memory[placeInArray] = aux;
      this.up(placeInArrayOfParentNode, typeOfHeap);
    }
  }

  public delete(placeOfElementToDelete: number): void {
    const aux = this.memory[placeOfElementToDelete];
    this.memory[placeOfElementToDelete] = this.memory[this.memory.length - 1];
    this.memory[this.memory.length - 1] = aux;
  }

  protected down(placeInArray: number, typeOfHeap: 'min' | 'max'): void {
    const leftChild = this.child(placeInArray, 'left');
    const rightChild = this.child(placeInArray, 'right');
    const valueOfPlaceInArray = this.memory[placeInArray];
    let select : number;
    if (placeInArray < this.memory.length / 2) {
      select = placeInArray;
      const compareRight = typeOfHeap === 'min'
        ? this.CompareFunction(this.memory[rightChild], valueOfPlaceInArray) < 0
        : this.CompareFunction(this.memory[rightChild], valueOfPlaceInArray) > 0;
      if (this.memory[rightChild]
          && compareRight) {
        select = rightChild;
      }
      const compareLeft = typeOfHeap === 'min'
        ? this.CompareFunction(this.memory[leftChild], this.memory[select]) < 0
        : this.CompareFunction(this.memory[leftChild], this.memory[select]) > 0;
      if (compareLeft) {
        select = leftChild;
      } const isEqual = this.CompareFunction(this.memory[select], valueOfPlaceInArray) === 0;
      if (!isEqual) {
        this.memory[placeInArray] = this.memory[select];
        this.memory[select] = valueOfPlaceInArray;
        this.down(select, typeOfHeap);
      }
    }
  }

  // eslint-disable-next-line class-methods-use-this
  protected child(parent: number, side: 'left' | 'right'): number {
    if (side === 'left') {
      return 2 * parent + 1;
    }
    return 2 * parent + 2;
  }

  // eslint-disable-next-line class-methods-use-this
  protected parent(child: number): number {
    return Math.trunc(child - 1 / 2);
  }

  get length() {
    return this.memory.length;
  }
}
