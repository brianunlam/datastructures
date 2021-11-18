enum Side {
  right = 'right',
  left = 'left',
}

enum TypeOfHeap {
  min = 'min',
  max = 'max',
}

export default class Heap<T> {
  protected memory: T[] = [];

  constructor(protected compareFunction: (a: T, b: T) => number) {
  }

  public insert(element : T): void {
    this.memory.push(element);
  }

  protected up(placeInArray: number, typeOfHeap:TypeOfHeap): void {
    const elementToUp = this.memory[placeInArray];
    const placeInArrayOfParentNode = this.getParent(placeInArray);
    const isRoot = this.compareFunction(elementToUp, this.memory[0]) === 0;
    const comparator = typeOfHeap === TypeOfHeap.min
      ? this.compareFunction(elementToUp, this.memory[placeInArrayOfParentNode]) < 0
      : this.compareFunction(elementToUp, this.memory[placeInArrayOfParentNode]) > 0;
    if (!isRoot && comparator) {
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

  protected down(placeInArray: number, typeOfHeap: TypeOfHeap): void {
    const leftChild = this.getChild(placeInArray, Side.left);
    const rightChild = this.getChild(placeInArray, Side.right);
    const valueOfPlaceInArray = this.memory[placeInArray];
    let select : number;
    if (placeInArray < this.memory.length / 2) {
      select = placeInArray;
      const compareRight = typeOfHeap === TypeOfHeap.min
        ? this.compareFunction(this.memory[rightChild], valueOfPlaceInArray) < 0
        : this.compareFunction(this.memory[rightChild], valueOfPlaceInArray) > 0;
      if (this.memory[rightChild]
          && compareRight) {
        select = rightChild;
      }
      const compareLeft = typeOfHeap === TypeOfHeap.min
        ? this.compareFunction(this.memory[leftChild], this.memory[select]) < 0
        : this.compareFunction(this.memory[leftChild], this.memory[select]) > 0;
      if (compareLeft) {
        select = leftChild;
      } const isEqual = this.compareFunction(this.memory[select], valueOfPlaceInArray) === 0;
      if (!isEqual) {
        this.memory[placeInArray] = this.memory[select];
        this.memory[select] = valueOfPlaceInArray;
        this.down(select, typeOfHeap);
      }
    }
  }

  protected getChild(parent: number, side: Side): number {
    if (side === Side.left) {
      return 2 * parent + 1;
    }
    return 2 * parent + 2;
  }

  protected getParent(child: number): number {
    return Math.trunc(child - 1 / 2);
  }

  get length() {
    return this.memory.length;
  }
}
