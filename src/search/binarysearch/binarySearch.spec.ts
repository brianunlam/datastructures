import binarySearch from './binarySearch';

describe('binary Search', () => {
  it(' should return null when the array is empty', () => {
    const arrayToSearch: number[] = [];
    expect(binarySearch(arrayToSearch, 44)).toEqual(null);
  });

  it('should return the element passed by parameter', () => {
    const arrayToSearch = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16];
    expect(binarySearch(arrayToSearch, 4)).toEqual(4);
  });

  it('should return null when no found the element into the array', () => {
    const arrayToSearch = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16];
    expect(binarySearch(arrayToSearch, 32)).toEqual(null);
  });

  it('should return should return the element when this is in the beginning of the array', () => {
    const arrayToSearch = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16];
    expect(binarySearch(arrayToSearch, 1)).toEqual(1);
  });

  it('should return should return the element when this is in the end of the array', () => {
    const arrayToSearch = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16];
    expect(binarySearch(arrayToSearch, 16)).toEqual(16);
  });
});
