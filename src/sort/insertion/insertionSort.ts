interface CompareFunction {
  (a: number, b: number): boolean;
}

export default function insertionSort(array: number[], comparefunction: CompareFunction): number[] {
  const myArray = array;
  for (let j = 0; j < myArray.length; j += 1) {
    const key = myArray[j];
    let i = j - 1;
    while (i >= 0 && comparefunction(myArray[i], key)) {
      myArray[i + 1] = myArray[i];
      i -= 1;
    }
    myArray[i + 1] = key;
  }
  return myArray;
}
