import BinarySearchTree from './binarySearchTree';

interface Nn {
  n: number;
}

describe('binarySearchTree', () => {
  let tree: BinarySearchTree<Nn>;
  beforeEach(() => {
    tree = new BinarySearchTree<Nn>((a: Nn, b: Nn) => a.n - b.n);
  });

  it('should add the element to the empty tree', () => {
    tree.add({ n: 12 });
    expect(tree.length).toEqual(1);
  });

  it('should add multiple elements to the tree', () => {
    const treeElements = [14, 8, 15, 10, 3];
    treeElements.forEach((n) => tree.add({ n }));
    expect(tree.length).toEqual(5);
  });

  it('I should return false when added repeating element to the tree', () => {
    const treeElements = [14, 8, 15, 10, 3];
    treeElements.forEach((n) => tree.add({ n }));
    expect(tree.add({ n: 8 })).toBe(false);
  });

  it('should return null when remove an element to the empty tree', () => {
    expect(tree.delete({ n: 12 })).toEqual(null);
  });

  it('should remove an element to the tree', () => {
    const treeElements = [14, 8, 15, 10, 3];
    treeElements.forEach((n) => tree.add({ n }));
    expect(tree.delete({ n: 3 })).toEqual({ n: 3 });
  });

  it('should return null when remove an element when doesn`t exist', () => {
    const treeElements = [14, 8, 15, 10, 3];
    treeElements.forEach((n) => tree.add({ n }));
    expect(tree.delete({ n: 177 })).toEqual(null);
  });

  it('should return a number of nodes', () => {
    tree.add({ n: 12 });
    tree.add({ n: 13 });
    tree.add({ n: 111 });
    expect(tree.numberOfNodes).toEqual(3);
  });

  it('should return null when search in an empty tree', () => {
    expect(tree.search({ n: 12 })).toEqual(null);
  });

  it('should return the element after the search', () => {
    const treeElements = [14, 8, 15, 10, 3];
    treeElements.forEach((n) => tree.add({ n }));
    expect(tree.search({ n: 10 })).toEqual({ n: 10 });
  });

  it('it should return null after not finding the element', () => {
    const treeElements = [14, 8, 15, 10, 3];
    treeElements.forEach((n) => tree.add({ n }));
    expect(tree.search({ n: 144 })).toEqual(null);
  });

  it('should traverse the InOrder tree', () => {
    const expectedResults = [14, 30, 32, 34, 55];
    const testTravel: any[] = [];
    const treeElements = [14, 30, 55, 32, 34];

    treeElements.forEach((n) => tree.add({ n }));

    tree.travel((element: any):void => {
      testTravel.push(element.n);
    });
    expect(testTravel).toEqual(expectedResults);
  });

  it('should traverse the PostOrder tree', () => {
    const expectedSequence = [54, 53, 55, 50, 41];
    const treeElements = [41, 50, 55, 53, 54];
    treeElements.forEach((n) => tree.add({ n }));
    const testTravel: any[] = [];
    tree.travel((element: any): void => {
      testTravel.push(element.n);
    }, true);
    expect(testTravel).toEqual(expectedSequence);
  });
});
