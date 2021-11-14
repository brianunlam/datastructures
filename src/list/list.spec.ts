import List from './list';

describe('Testing List of type string', () => {
  let list: List<String>;

  beforeEach(() => {
    list = new List<String>();
  });

  it('should return length 0 when list is empty', () => {
    expect(list.isEmpty()).toBe(true);
  });

  it('should add an element to an empty list', () => {
    list.add('Sopa');
    expect(list.length).toEqual(1);
  });

  it('should add multiple elements to the list', () => {
    list.add('paquito');
    list.add('fresh');
    expect(list.length).toEqual(2);
  });

  it('should add an element in the first position of the list', () => {
    list.add('paquito');
    list.add('fresh');
    list.addFirst('Couita');
    expect(list.length).toEqual(3);
  });

  it('should add an element in the first position of an empty list', () => {
    list.addFirst('Couita');
    expect(list.length).toEqual(1);
  });

  it('should add an element in the next position to the one assigned', () => {
    list.add('paquito');
    list.add('fresh');
    list.add('Couita', (content) => content === 'paquito');
    expect(list.length).toEqual(3);
  });

  it('should add an element to the list after a nonexistent element', () => {
    list.add('paquito');
    list.add('fresh');
    expect(list.add('Couita', (content) => content === 'fresa')).toBe(false);
  });

  it('should  add last to empty list', () => {
    list.addLast('Couita');
    expect(list.length).toEqual(1);
  });

  it('should remove the first element from a list', () => {
    expect(list.removeFirst()).toBe(null);
  });

  it('should remove the first element from a list', () => {
    list.add('paquito');
    list.add('fresh');
    expect(list.removeFirst()).toEqual('paquito');
  });
  it('should remove the first element from a list', () => {
    list.add('paquito');
    list.add('fresh');
    list.add('sacarias');
    list.add('alfajor');
    list.add('a mi me sacan');
    list.add('fresh');
    expect(list.remove((content) => content === 'a mi me sacan')).toEqual('a mi me sacan');
  });

  it('should remove an element to empty list', () => {
    expect(list.remove((content) => content === 'sara')).toBe(undefined);
  });

  it('should remove an element to the list after a nonexistent element', () => {
    list.add('paquito');
    list.add('fresh');
    list.add('sacarias');
    list.add('alfajor');
    list.add('a mi me sacan');
    list.add('fresh');
    expect(list.remove((content) => content === 'sara')).toBe(undefined);
  });

  it('should remove the last element from a empty list', () => {
    expect(list.removeLast()).toBe(null);
  });

  it('should remove the last element from a list', () => {
    list.add('paquito');
    list.add('papo');
    list.add('fresh');
    expect(list.removeLast()).toEqual('fresh');
  });

  it('should remove the last element from a list with 2 elements', () => {
    list.add('paquito');
    list.add('fresh');
    expect(list.removeLast()).toEqual('fresh');
  });

  it('should find element in a empty list', () => {
    const found = list.find((content) => content === 'panqueque');
    expect(found.length).toEqual(0);
  });

  it('should find element in list', () => {
    const elementsMock = ['Calabaza', 'Pan', 'Calabaza', 'Salchicha', 'panqueque'];
    elementsMock.forEach((element) => list.add(element));
    expect(list.find((content) => content === 'panqueque')).toEqual('panqueque');
  });

  it('should return undefined after not finding the element in the list', () => {
    const elementsMock = ['Calabaza', 'Pan', 'Calabaza', 'Salchicha', 'panqueque'];
    elementsMock.forEach((element) => list.add(element));
    expect(list.find((content) => content === 'sandwitch')).toEqual([]);
  });

  it('should return an array with the elements found in the list', () => {
    const elementsMock = ['Calabaza', 'Pan', 'Calabaza', 'Salchicha', 'panqueque'];
    elementsMock.forEach((element) => list.add(element));
    expect(list.find((content) => content === 'Calabaza', true)).toEqual(['Calabaza', 'Calabaza']);
  });

  it('should return undefined after not finding items in the list', () => {
    const elementsMock = ['Calabaza', 'Pan', 'Calabaza', 'Salchicha', 'panqueque'];
    elementsMock.forEach((element) => list.add(element));
    expect(list.find((content) => content === 'sandwich', true)).toEqual([]);
  });

  it('should iterate through all element in the list', () => {
    const elementsMock = ['paquito', 'alfajor'];
    const addedPoint: String[] = [];
    function addPoint(element: any): void {
      addedPoint.push(`${element}.`);
    }
    elementsMock.forEach((element) => list.add(element));
    list.forEach(addPoint);
    for (let i = 0; i < elementsMock.length - 1; i += 1) {
      expect(addedPoint[i]).toEqual(`${elementsMock[i]}.`);
    }
  });

  it('should return a new empty list', () => {
    const addedPoint: String[] = [];
    function addPoint(element: any): any {
      addedPoint.push(`${element}.`);
      return (`${element}.`);
    }
    const result = list.map(addPoint);
    expect(result.length).toEqual(0);
  });

  it('should return a new list with all mapped elements', () => {
    const elementsMock = ['paquito', 'alfajor'];
    const addedPoint: String[] = [];
    function addPoint(element: any): any {
      addedPoint.push(`${element}.`);
      return (`${element}.`);
    }
    elementsMock.forEach((element) => list.add(element));
    const result = list.map(addPoint);
    expect(result).toBeInstanceOf(List);
    for (let i = 0; i < elementsMock.length - 1; i += 1) {
      expect(addedPoint[i]).toEqual(`${elementsMock[i]}.`);
    }
  });

  it('should filter and return an empty list', () => {
    const filteredList: List<String> = list.filter((content) => content === 'alfajor');
    expect(filteredList.length).toEqual(0);
  });

  it('should filter and return a list with two elements', () => {
    const elementsMock = ['paquito', 'alfajor', 'sandia', 'peras', 'alfajor'];
    elementsMock.forEach((element) => list.add(element));
    const filteredList: List<String> = list.filter((content) => content === 'alfajor');
    expect(filteredList.length).toEqual(2);
  });

  it('should reduce the list and return an string', () => {
    const f = new List<string>();
    f.add('a');
    f.add('b');
    f.add('c');
    const reduced = f.reducer('', (a, b) => a.concat(b));
    expect(reduced).toEqual('abc');
  });

  it('should return a false if the list is empty', () => {
    expect(list.some((content) => content === 'paco')).toEqual(false);
  });

  it('should return a true if element exist', () => {
    const elementsMock = ['paquito', 'alfajor', 'sandia', 'peras', 'alfajor'];
    elementsMock.forEach((element) => list.add(element));
    expect(list.some((content) => content === 'alfajor')).toEqual(true);
  });

  it('should return a false if element doesnt exist', () => {
    const elementsMock = ['paquito', 'alfajor', 'sandia', 'peras', 'alfajor'];
    elementsMock.forEach((element) => list.add(element));
    expect(list.some((content) => content === 'paco')).toEqual(false);
  });

  it('should return a false if the list is empty', () => {
    expect(list.every((content) => content === 'alfajor')).toEqual(false);
  });

  it('should return a true if if they are equal to the assigned element', () => {
    const elementsMock = ['alfajor', 'alfajor', 'alfajor'];
    elementsMock.forEach((element) => list.add(element));
    expect(list.every((content) => content === 'alfajor')).toEqual(true);
  });

  it('should return a false if some element are different to the assigned element', () => {
    const elementsMock = ['alfajor', 'paco', 'alfajor'];
    elementsMock.forEach((element) => list.add(element));
    expect(list.every((content) => content === 'alfajor')).toEqual(false);
  });
});
