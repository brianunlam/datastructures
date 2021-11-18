interface CompareFunction {
  (a: number, b: number): boolean;
}

function merge(a: number[], b: number[], compareFunction: CompareFunction) {
  const arrayC: number[] = [];
  while (a[0] && b[0]) {
    if (compareFunction(a[0], b[0])) {
      arrayC.push((b).shift() as number);
    } else {
      arrayC.push(a.shift() as number);
    }
  }
  while (a[0]) {
    arrayC.push(a.shift() as number);
  }
  while (b[0]) {
    arrayC.push(b.shift() as number);
  }
  return arrayC;
}

export default function mergeSort(array: number[], compareFunction:CompareFunction): number[] {
  const introducedArray = array;
  if (introducedArray.length === 1) {
    return introducedArray;
  }
  let arrayA: number[] = [];
  for (let i = 0; i < Math.trunc(introducedArray.length / 2); i += 1) {
    arrayA.push(introducedArray[i]);
  }
  arrayA = mergeSort(arrayA, compareFunction);
  let arrayB: number[] = [];
  for (let i = Math.trunc(introducedArray.length / 2); i < introducedArray.length; i += 1) {
    arrayB.push(introducedArray[i]);
  }
  arrayB = mergeSort(arrayB, compareFunction);
  return merge(arrayA, arrayB, compareFunction);
}
