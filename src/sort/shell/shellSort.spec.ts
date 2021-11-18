import shellSort from './shellSort';

describe('shell sort', () => {
  it('should return an array sorted from lowest to highest', () => {
    const arrayToSort = [43, 65, 44, 12, 67, 1, 9, 33, 21];
    const expectedArray = [1, 9, 12, 21, 33, 43, 44, 65, 67];
    expect(shellSort(arrayToSort)).toEqual(expectedArray);
  });
});
