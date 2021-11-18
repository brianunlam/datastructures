import insertionSort from './insertionSort';

const sortLowToHigh = (a: number, b: number): boolean => (a > b);
const sortHighToLow = (a: number, b: number): boolean => (a < b);

describe('Insertion sort', () => {
  it('should return an array sorted from lowest to highest', () => {
    const arrayToSort = [43, 65, 44, 12, 67, 1, 9, 33, 21];
    const expectedArray = [1, 9, 12, 21, 33, 43, 44, 65, 67];
    expect(insertionSort(arrayToSort, sortLowToHigh)).toEqual(expectedArray);
  });

  it('should return an array sorted from highest to lowest', () => {
    const arrayToSort = [43, 65, 44, 12, 67, 1, 9, 33, 21];
    const expectedArray = [67, 65, 44, 43, 33, 21, 12, 9, 1];
    expect(insertionSort(arrayToSort,sortHighToLow)).toEqual(expectedArray);
  });
});
