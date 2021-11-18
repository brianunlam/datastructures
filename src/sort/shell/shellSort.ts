export default function shellSort(array: number[]): number[] {
  const introducedArray = array;
  const n = introducedArray.length;

  for (let gap = Math.floor(n / 2); gap > 0; gap = Math.floor(gap / 2)) {
    for (let i = gap; i < n; i += 1) {
      const temp = introducedArray[i];

      let j;
      for (j = i; j >= gap && introducedArray[j - gap] > temp; j -= gap) {
        introducedArray[j] = introducedArray[j - gap];
      }

      introducedArray[j] = temp;
    }
  }

  return introducedArray;
}
