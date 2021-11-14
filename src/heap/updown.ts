protected up(placeInArray: number, typeOfHeap: 'min' | 'max' = 'max' ) {
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
      this.up(placeInArrayOfParentNode);
    }
  }

protected down(placeInArray: number, typeOfHeap: 'min' | 'max' = 'max'){
  const leftChild = this.child(placeInArray, 'left');
    const rightChild = this.child(placeInArray, 'right');
    const valueOfPlaceInArray = this.memory[placeInArray];
    let min : number;
    if (placeInArray < this.memory.length / 2) {
      select = placeInArray;
      const compareRight = typeOfHeap === 'min' 
      ? this.CompareFunction(this.memory[rightChild], valueOfPlaceInArray) < 0 
      : this.CompareFunction(this.memory[rightChild], valueOfPlaceInArray) > 0;
      if (this.memory[rightChild]
        && compareRight) {
        min = rightChild;
      }
      const compareLeft = TypeOfHeap === 'min' 
      ? this.CompareFunction(this.memory[leftChild], this.memory[min]) < 0 
      : this.CompareFunction(this.memory[leftChild], this.memory[min]) > 0;
      if (compareLeft) {
        min = leftChild;
      }const isEqual = this.CompareFunction(this.memory[min], valueOfPlaceInArray) === 0;
      if (!isEqual) {
        this.memory[placeInArray] = this.memory[min];
        this.memory[min] = valueOfPlaceInArray;
        this.down(min);
      }
    }
}