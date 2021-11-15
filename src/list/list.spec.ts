import List from './list';

describe('List of type string', () => {
  let list: List<String>;
  const insertTestElement = (string: string) => list.add(string);

  beforeEach(() => {
    list = new List<String>();
  });

  it('should return true when list is empty', () => {
    expect(list.isEmpty()).toBe(true);
  });

  it('should add an element to an empty list', () => {
    list.add('Sopa');
    expect(list.length).toEqual(1);
  });

  it('should add multiple elements to the list', () => {
    const toInsert = ['paquito', 'fresh'];
    toInsert.forEach(insertTestElement);
    expect(list.length).toEqual(2);
  });

  it('should add an element in the first position of the list', () => {
    const toInsert = ['paquito', 'fresh'];
    toInsert.forEach(insertTestElement);
    list.addFirst('Couita');
    expect(list.length).toEqual(3);
  });

  it('should add an element in the first position of an empty list', () => {
    list.addFirst('Couita');
    expect(list.length).toEqual(1);
  });

  it('should add an element in the next position to the one assigned', () => {
    const toInsert = ['paquito', 'fresh'];
    toInsert.forEach(insertTestElement);
    list.add('Couita', (content) => content === 'paquito');
    expect(list.length).toEqual(3);
  });

  it('should not add an element to the list after a nonexistent element', () => {
    const toInsert = ['paquito', 'fresh'];
    toInsert.forEach(insertTestElement);
    expect(list.add('Couita', (content) => content === 'fresa')).toBe(false);
  });

  it('should  add last to empty list', () => {
    list.addLast('Couita');
    expect(list.length).toEqual(1);
  });

  it('should return null when removing first element of empty list', () => {
    expect(list.removeFirst()).toBe(null);
  });

  it('should remove the first element from a list', () => {
    const toInsert = ['paquito', 'fresh', 'sacarias', 'alfajor', 'a mi me sacan', 'fresh'];
    toInsert.forEach(insertTestElement);
    expect(list.removeFirst()).toEqual('paquito');
  });
  it('should remove element passed by parameter', () => {
    const toInsert = ['paquito', 'fresh', 'sacarias', 'alfajor', 'a mi me sacan', 'fresh'];
    toInsert.forEach(insertTestElement);
    expect(list.remove((content) => content === 'a mi me sacan')).toEqual('a mi me sacan');
  });

  it('should return null when removing element from empty list ', () => {
    expect(list.remove((content) => content === 'sara')).toBe(null);
  });

  it('should return null when removing an element from the list when it doesn`t exists', () => {
    const toInsert = ['paquito', 'fresh', 'sacarias', 'alfajor', 'a mi me sacan', 'fresh'];
    toInsert.forEach(insertTestElement);
    expect(list.remove((content) => content === 'sara')).toBe(null);
  });

  it('should return null when removing an element from empty list', () => {
    expect(list.removeLast()).toBe(null);
  });

  it('should remove the last element from a list', () => {
    const toInsert = ['paquito', 'fresh', 'sacarias'];
    toInsert.forEach(insertTestElement);
    expect(list.removeLast()).toEqual('sacarias');
  });

  it('should return an empty array when doesn`t find element', () => {
    expect(list.find((content) => content === 'panqueque')).toEqual([]);
  });

  it('should find element in list', () => {
    const elementsMock = ['Calabaza', 'Pan', 'Calabaza', 'Salchicha', 'panqueque'];
    elementsMock.forEach(insertTestElement);
    expect(list.find((content) => content === 'panqueque')).toEqual('panqueque');
  });

  it('should return empty array after not finding the element in the list', () => {
    const elementsMock = ['Calabaza', 'Pan', 'Calabaza', 'Salchicha', 'panqueque'];
    elementsMock.forEach(insertTestElement);
    expect(list.find((content) => content === 'sandwitch')).toEqual([]);
  });

  it('should return an array with the elements found in the list', () => {
    const elementsMock = ['Calabaza', 'Pan', 'Calabaza', 'Salchicha', 'panqueque'];
    elementsMock.forEach(insertTestElement);
    expect(list.find((content) => content === 'Calabaza', true)).toEqual(['Calabaza', 'Calabaza']);
  });

  it('should return empty array after not finding items in the list', () => {
    const elementsMock = ['Calabaza', 'Pan', 'Calabaza', 'Salchicha', 'panqueque'];
    elementsMock.forEach(insertTestElement);
    expect(list.find((content) => content === 'sandwich', true)).toEqual([]);
  });

  it('should iterate through all elements in the list', () => {
    const elementsMock = ['paquito', 'alfajor'];
    const addedPoint: String[] = [];
    elementsMock.forEach(insertTestElement);
    list.forEach((element: any): void => {
      addedPoint.push(`${element}.`);
    });
    for (let i = 0; i < elementsMock.length - 1; i += 1) {
      expect(addedPoint[i]).toEqual(`${elementsMock[i]}.`);
    }
  });

  it('should return a new empty list', () => {
    function addPoint(element: any): any {
      return (`${element}.`);
    }
    const result = list.map(addPoint);
    expect(result.length).toEqual(0);
  });

  it('should return a new list with all mapped elements', () => {
    const elementsMock = ['paquito', 'alfajor'];
    function addPoint(element: string): string {
      return (`${element}.`);
    }
    elementsMock.forEach(insertTestElement);
    const mappedList = list.map(addPoint);

    expect(mappedList.removeFirst()).toEqual(`${elementsMock[0]}.`);
  });

  it('should filter and return an empty list', () => {
    const filteredList: List<String> = list.filter((content) => content === 'alfajor');
    expect(filteredList.length).toEqual(0);
  });

  it('should filter and return a list with two elements', () => {
    const elementsMock = ['paquito', 'alfajor', 'sandia', 'peras', 'alfajor'];
    elementsMock.forEach(insertTestElement);
    const filteredList: List<String> = list.filter((content) => content === 'alfajor');
    expect(filteredList.length).toEqual(2);
  });

  it('should reduce the list and return an string', () => {
    const f = new List<string>();
    f.add('a');
    f.add('b');
    f.add('c');
    const reduced = f.reduce((a, b) => a.concat(b));
    expect(reduced).toEqual('abc');
  });

  it('should reduce the list and return an string whit AAA at the beginning', () => {
    const f = new List<string>();
    f.add('a');
    f.add('b');
    f.add('c');
    const reduced = f.reduce((a, b) => a.concat(b), 'AAA');
    expect(reduced).toEqual('AAAabc');
  });

  it('should return false if the list is empty', () => {
    expect(list.some((content) => content === 'paco')).toEqual(false);
  });

  it('should return a true if element exist', () => {
    const elementsMock = ['paquito', 'alfajor', 'sandia', 'peras', 'alfajor'];
    elementsMock.forEach(insertTestElement);
    expect(list.some((content) => content === 'alfajor')).toEqual(true);
  });

  it('should return a false if element doesnt exist', () => {
    const elementsMock = ['paquito', 'alfajor', 'sandia', 'peras', 'alfajor'];
    elementsMock.forEach(insertTestElement);
    expect(list.some((content) => content === 'paco')).toEqual(false);
  });

  it('should return a false if the list is empty', () => {
    expect(list.every((content) => content === 'alfajor')).toEqual(false);
  });

  it('should return a true if if they are equal to the assigned element', () => {
    const elementsMock = ['alfajor', 'alfajor', 'alfajor'];
    elementsMock.forEach(insertTestElement);
    expect(list.every((content) => content === 'alfajor')).toEqual(true);
  });

  it('should return a false if some element are different to the assigned element', () => {
    const elementsMock = ['alfajor', 'paco', 'alfajor'];
    elementsMock.forEach(insertTestElement);
    expect(list.every((content) => content === 'alfajor')).toEqual(false);
  });
});
