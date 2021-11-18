export default function binarySearch(arr: number[],
  val:number,
  start = 0,
  end = arr.length - 1):number | null {
  const mid = Math.floor((start + end) / 2);

  if (val === arr[mid]) {
    return val;
  }

  if (start >= end) {
    return null;
  }

  return val < arr[mid]
    ? binarySearch(arr, val, start, mid - 1)
    : binarySearch(arr, val, mid + 1, end);
}
