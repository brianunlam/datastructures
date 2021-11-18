import insertionSort from './insertionSort';

describe('Insertion sort', () => {
  it('It should return an array sorted from lowest to highest', () => {
    const arrayToSort = [43, 65, 44, 12, 67, 1, 9, 33, 21];
    const expectedArray = [1, 9, 12, 21, 33, 43, 44, 65, 67];
    expect(insertionSort(arrayToSort, (a, b): boolean => (a > b))).toEqual(expectedArray);
  });

  it('It should return an array sorted from highest to lowest', () => {
    const arrayToSort = [43, 65, 44, 12, 67, 1, 9, 33, 21];
    const expectedArray = [67, 65, 44, 43, 33, 21, 12, 9, 1];
    expect(insertionSort(arrayToSort, (a, b): boolean => (a < b))).toEqual(expectedArray);
  });
});
