import shellSort from './shellSort';

describe('shell sort', () => {
  it('should return an empty array when the array for sorting is empty', () => {
    const arrayToSort: number[] = [];
    const expectedArray: number[] = [];
    expect(shellSort(arrayToSort))
      .toEqual(expectedArray);
  });

  it('should return an array with the element', () => {
    const arrayToSort: number[] = [14];
    const expectedArray: number[] = [14];
    expect(shellSort(arrayToSort))
      .toEqual(expectedArray);
  });

  it('should return an array with two elements sorted from lowest to highest', () => {
    const arrayToSort = [65, 43];
    const expectedArray = [43, 65];
    expect(shellSort(arrayToSort))
      .toEqual(expectedArray);
  });

  it('should return an array sorted from lowest to highest', () => {
    const arrayToSort = [43, 65, 44, 12, 67, 1, 9, 33, 21];
    const expectedArray = [1, 9, 12, 21, 33, 43, 44, 65, 67];
    expect(shellSort(arrayToSort)).toEqual(expectedArray);
  });
});
