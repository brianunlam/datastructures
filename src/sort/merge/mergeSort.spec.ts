import mergeSort from './mergeSort';

const sortLowToHigh = (a: number, b: number): boolean => (a > b);
const sortHighToLow = (a: number, b: number): boolean => (a < b);

describe('Merge sort', () => {
  it('should return an empty array when the array for sorting is empty', () => {
    const arrayToSort: number[] = [];
    const expectedArray: number[] = [];
    expect(mergeSort(arrayToSort, sortLowToHigh))
      .toEqual(expectedArray);
  });

  it('should return an array with the element', () => {
    const arrayToSort: number[] = [14];
    const expectedArray: number[] = [14];
    expect(mergeSort(arrayToSort, sortLowToHigh))
      .toEqual(expectedArray);
  });

  it('should return an array with two elements sorted from lowest to highest', () => {
    const arrayToSort = [65, 43];
    const expectedArray = [43, 65];
    expect(mergeSort(arrayToSort, sortLowToHigh))
      .toEqual(expectedArray);
  });

  it('should return an array sorted from lowest to highest', () => {
    const arrayToSort = [43, 65, 44, 12, 67, 1, 9, 33, 21];
    const expectedArray = [1, 9, 12, 21, 33, 43, 44, 65, 67];
    expect(mergeSort(arrayToSort, sortLowToHigh)).toEqual(expectedArray);
  });

  it('should return an array sorted from highest to lowest', () => {
    const arrayToSort = [43, 65, 44, 12, 67, 1, 9, 33, 21];
    const expectedArray = [67, 65, 44, 43, 33, 21, 12, 9, 1];
    expect(mergeSort(arrayToSort, sortHighToLow)).toEqual(expectedArray);
  });
});
