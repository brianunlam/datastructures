export default function quickSort(array: number[], compareFunction:CompareFunction): number[] {
  if (array.length < 2) {
    return array;
  }
  const pivot = array[Math.floor(Math.random() * array.length)];

  const left: number[] = [];
  const right: number[] = [];
  const equal: number[] = [];

  array.forEach((value) => {
    if (compareFunction(value, pivot)) {
      left.push(value);
    } else if (!compareFunction(value, pivot)) {
      right.push(value);
    } else {
      equal.push(value);
    }
  });
  return [
    ...quickSort(left, compareFunction),
    ...equal,
    ...quickSort(right, compareFunction),
  ];
}
