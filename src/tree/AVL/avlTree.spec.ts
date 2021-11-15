import AvlTree from './avlTree';

interface TestElement {
  n: number;
}

const compareFunction = (a: TestElement, b: TestElement) => a.n - b.n;

describe('AVLtree', () => {
  let tree: AvlTree<TestElement>;
  const insertElement = (element: TestElement) => tree.add(element);
  beforeEach(() => {
    tree = new AvlTree<TestElement>(compareFunction);
  });

  it('should add an element to an empty tree', () => {
    tree.add({ n: 12 });
    expect(tree.length).toEqual(1);
  });

  it('should return null when delete element desnt exist', () => {
    expect(tree.delete({ n: 4 })).toBe(null);
  });

  it('should add an element in the left branch of the tree', () => {
    const toInsert = [{ n: 12 }, { n: 10 }];
    toInsert.forEach(insertElement);
    expect(tree.length).toEqual(2);
  });

  it('should add an element in the right branch of the tree', () => {
    const toInsert = [{ n: 12 }, { n: 14 }];
    toInsert.forEach(insertElement);
    expect(tree.length).toEqual(2);
  });

  it('should return false when adding a repeating element', () => {
    const toInsert = [{ n: 12 }, { n: 14 }];
    toInsert.forEach(insertElement);
    expect(tree.add({ n: 14 })).toBe(false);
  });

  it('Should return the height when only has a root', () => {
    tree.add({ n: 12 });
    expect((tree as any).getHeight((tree as any).root)).toEqual(0);
  });

  it('Should return the height when only has a root and left element', () => {
    const toInsert = [{ n: 12 }, { n: 11 }];
    toInsert.forEach(insertElement);
    expect((tree as any).getHeight((tree as any).root)).toEqual(1);
  });

  it('Should return the height when only has a root and right element', () => {
    const toInsert = [{ n: 12 }, { n: 14 }];
    toInsert.forEach(insertElement);
    expect((tree as any).getHeight((tree as any).root)).toEqual(1);
  });

  it('Should return the height when only has a root and this one has her children', () => {
    const toInsert = [{ n: 12 }, { n: 14 }, { n: 11 }];
    tree = AvlTree.fromArray<TestElement>(toInsert, compareFunction);

    expect((tree as any).getHeight((tree as any).root)).toEqual(1);
  });

  it('Should return the height when only has a root and this one has her children and these yours', () => {
    const toInsert = [{ n: 12 }, { n: 14 }, { n: 11 }, { n: 15 }, { n: 10 }];
    tree = AvlTree.fromArray<TestElement>(toInsert, compareFunction);

    expect((tree as any).getHeight((tree as any).root)).toEqual(2);
  });

  it('Should return the height when when the tree is unbalanced to the right', () => {
    const toInsert = [{ n: 1 }, { n: 2 }, { n: 3 }, { n: 4 }, { n: 5 }];
    tree = AvlTree.fromArray<TestElement>(toInsert, compareFunction);

    expect((tree as any).getHeight((tree as any).root)).toEqual(4);
  });

  it('Should return the height when when the tree is unbalanced to the left', () => {
    const toInsert = [{ n: 5 }, { n: 4 }, { n: 3 }, { n: 2 }, { n: 1 }];
    tree = AvlTree.fromArray<TestElement>(toInsert, compareFunction);

    expect((tree as any).getHeight((tree as any).root)).toEqual(4);
  });

  it('Should return the height when when the tree is unbalanced', () => {
    const toInsert = [{ n: 50 }, { n: 49 }, { n: 30 }, { n: 29 }, { n: 32 },
      { n: 55 }, { n: 33 }, { n: 35 }];
    tree = AvlTree.fromArray<TestElement>(toInsert, compareFunction);

    expect((tree as any).getHeight((tree as any).root)).toEqual(5);
  });

  it('Should return the Balance factor when the tree is empty', () => {
    expect((tree as any).getBF((tree as any).root)).toEqual(0);
  });

  it('Should return the Balance factor when only has a root', () => {
    tree.add({ n: 50 });
    expect((tree as any).getBF((tree as any).root)).toEqual(0);
  });

  it('Should return the Balance factor when only has a root and right element', () => {
    tree.add({ n: 50 });
    tree.add({ n: 51 });
    expect((tree as any).getBF((tree as any).root)).toEqual(1);
  });

  it('Should return the Balance factor when only has a root and left element', () => {
    tree.add({ n: 50 });
    tree.add({ n: 49 });
    expect((tree as any).getBF((tree as any).root)).toEqual(-1);
  });

  it('Should return the Balance factor when only has a root and this one has her children', () => {
    const toInsert = [{ n: 50 }, { n: 49 }, { n: 51 }];
    tree = AvlTree.fromArray<TestElement>(toInsert, compareFunction);

    expect((tree as any).getBF((tree as any).root)).toEqual(0);
  });

  it('Should return the Balance factor when the tree has simple unbalance to the left', () => {
    const toInsert = [{ n: 50 }, { n: 49 }, { n: 51 }, { n: 48 }];
    tree = AvlTree.fromArray<TestElement>(toInsert, compareFunction);

    expect((tree as any).getBF((tree as any).root)).toEqual(-1);
  });

  it('Should return the Balance factor when the tree has simple unbalance to the right', () => {
    const toInsert = [{ n: 50 }, { n: 49 }, { n: 51 }, { n: 52 }];
    tree = AvlTree.fromArray<TestElement>(toInsert, compareFunction);

    expect((tree as any).getBF((tree as any).root)).toEqual(1);
  });

  it('Should return the Balance factor when the tree has double left unbalance', () => {
    const toInsert = [{ n: 9 }, { n: 5 }, { n: 10 }, { n: 7 }, { n: 1 },
      { n: 6 }, { n: 8 }];
    tree = AvlTree.fromArray<TestElement>(toInsert, compareFunction);

    expect((tree as any).getBF((tree as any).root)).toEqual(-2);
  });

  it('Should return the Balance factor when the tree has double right unbalance', () => {
    const toInsert = [{ n: 5 }, { n: 3 }, { n: 10 }, { n: 7 }, { n: 12 },
      { n: 6 }, { n: 8 }];
    tree = AvlTree.fromArray<TestElement>(toInsert, compareFunction);

    expect((tree as any).getBF((tree as any).root)).toEqual(2);
  });

  it('Should return the rearranged tree after an imbalance to the right SRL', () => {
    const toInsert = [{ n: 5 }, { n: 10 }, { n: 3 }, { n: 9 }, { n: 12 }];
    const returnedTravel: TestElement[] = [];
    const returnedTravelAfterRotation: TestElement[] = [];

    function pushToReturnedTravel(element: TestElement):void {
      returnedTravel.push(element);
    }

    function pushToReturnedTravelAfterRotation(element: TestElement):void {
      returnedTravelAfterRotation.push(element);
    }

    tree = AvlTree.fromArray<TestElement>(toInsert, compareFunction);

    tree.recursiveTravelPreOrder(pushToReturnedTravel, (tree as any).root);

    (tree as any).simpleRotation((tree as any).root, 'left');
    tree.recursiveTravelPreOrder(pushToReturnedTravelAfterRotation, (tree as any).root);

    expect(returnedTravel).not.toEqual(returnedTravelAfterRotation);
  });

  it('it should return false when it does not have a right node', () => {
    const toInsert = [{ n: 5 }, { n: 3 }];

    tree = AvlTree.fromArray<TestElement>(toInsert, compareFunction);

    expect((tree as any).simpleRotation((tree as any).root, 'right')).toBe(false);
  });

  it('Should return the rearranged tree after an imbalance to the left SRR', () => {
    const toInsert = [{ n: 5 }, { n: 3 }, { n: 10 }, { n: 2 }, { n: 1 }, { n: 4 }];
    const returnedTravel: TestElement[] = [];
    const returnedTravelAfterRotation: TestElement[] = [];

    function pushToReturnedTravel(element: TestElement):void {
      returnedTravel.push(element);
    }

    function pushToReturnedTravelAfterRotation(element: TestElement):void {
      returnedTravelAfterRotation.push(element);
    }

    tree = AvlTree.fromArray<TestElement>(toInsert, compareFunction);

    tree.recursiveTravelPreOrder(pushToReturnedTravel, (tree as any).root);

    (tree as any).simpleRotation((tree as any).root, 'right');
    tree.recursiveTravelPreOrder(pushToReturnedTravelAfterRotation, (tree as any).root);
    expect(returnedTravel).not.toEqual(returnedTravelAfterRotation);
  });

  it('it should return false when it does not have a left node', () => {
    const toInsert = [{ n: 5 }, { n: 6 }];

    tree = AvlTree.fromArray<TestElement>(toInsert, compareFunction);

    expect((tree as any).simpleRotation((tree as any).root, 'left')).toBe(false);
  });

  it('returns false when it has no direction', () => {
    const toInsert = [{ n: 5 }, { n: 6 }];

    tree = AvlTree.fromArray<TestElement>(toInsert, compareFunction);

    expect((tree as any).simpleRotation((tree as any).root, null)).toBe(false);
  });

  it('Should return the rearranged tree after an imbalance to the left DRR', () => {
    const toInsert = [{ n: 9 }, { n: 5 }, { n: 10 }, { n: 1 }, { n: 7 }, { n: 6 }, { n: 8 }];
    const returnedTravel: TestElement[] = [];
    const returnedTravelAfterRotation: TestElement[] = [];

    function pushToReturnedTravel(element: TestElement):void {
      returnedTravel.push(element);
    }

    function pushToReturnedTravelAfterRotation(element: TestElement):void {
      returnedTravelAfterRotation.push(element);
    }

    tree = AvlTree.fromArray<TestElement>(toInsert, compareFunction);

    tree.recursiveTravelPreOrder(pushToReturnedTravel, (tree as any).root);

    (tree as any).doubleRotation((tree as any).root, 'left');
    tree.recursiveTravelPreOrder(pushToReturnedTravelAfterRotation, (tree as any).root);
    expect(returnedTravel).not.toEqual(returnedTravelAfterRotation);
  });

  it('it should return false when it does not have a right node', () => {
    const toInsert = [{ n: 5 }, { n: 3 }];

    tree = AvlTree.fromArray<TestElement>(toInsert, compareFunction);

    expect((tree as any).doubleRotation((tree as any).root, 'left')).toBe(false);
  });

  it('it should return false when it does not have a right child of left node', () => {
    const toInsert = [{ n: 5 }, { n: 6 }];

    tree = AvlTree.fromArray<TestElement>(toInsert, compareFunction);

    expect((tree as any).doubleRotation((tree as any).root, 'left')).toBe(false);
  });

  it('Should return the rearranged tree after an imbalance to the right DRL', () => {
    const toInsert = [{ n: 5 }, { n: 3 }, { n: 10 }, { n: 7 }, { n: 12 }, { n: 6 }, { n: 8 }];
    const returnedTravel: TestElement[] = [];
    const returnedTravelAfterRotation: TestElement[] = [];

    function pushToReturnedTravel(element: TestElement):void {
      returnedTravel.push(element);
    }

    function pushToReturnedTravelAfterRotation(element: TestElement):void {
      returnedTravelAfterRotation.push(element);
    }

    tree = AvlTree.fromArray<TestElement>(toInsert, compareFunction);

    tree.recursiveTravelPreOrder(pushToReturnedTravel, (tree as any).root);

    (tree as any).doubleRotation((tree as any).root, 'right');
    tree.recursiveTravelPreOrder(pushToReturnedTravelAfterRotation, (tree as any).root);

    expect(returnedTravel).not.toEqual(returnedTravelAfterRotation);
  });

  it('it should return false when it does not have a left node', () => {
    const toInsert = [{ n: 5 }, { n: 6 }];

    tree = AvlTree.fromArray<TestElement>(toInsert, compareFunction);

    expect((tree as any).doubleRotation((tree as any).root, 'right')).toBe(false);
  });

  it('it should return false when it does not have a left child of right node', () => {
    const toInsert = [{ n: 5 }, { n: 3 }];

    tree = AvlTree.fromArray<TestElement>(toInsert, compareFunction);

    expect((tree as any).doubleRotation((tree as any).root, 'right')).toBe(false);
  });

  it('returns false when it has no direction', () => {
    const toInsert = [{ n: 5 }, { n: 6 }];

    tree = AvlTree.fromArray<TestElement>(toInsert, compareFunction);

    expect((tree as any).doubleRotation((tree as any).root, null)).toBe(false);
  });

  it('Should return the rearranged tree after an imbalance to the left (SRR with bf & R)', () => {
    const toInsert = [{ n: 5 }, { n: 3 }, { n: 10 }, { n: 2 }, { n: 1 }, { n: 4 }];
    const returnedTravel: TestElement[] = [];
    const returnedTravelAfterRotation: TestElement[] = [];

    function pushToReturnedTravel(element: TestElement):void {
      returnedTravel.push(element);
    }

    function pushToReturnedTravelAfterRotation(element: TestElement):void {
      returnedTravelAfterRotation.push(element);
    }

    tree = AvlTree.fromArray<TestElement>(toInsert, compareFunction);

    tree.recursiveTravelPreOrder(pushToReturnedTravel, (tree as any).root);

    (tree as any).emptyStackForBalancing();
    tree.recursiveTravelPreOrder(pushToReturnedTravelAfterRotation, (tree as any).root);

    expect(returnedTravel).not.toEqual(returnedTravelAfterRotation);
  });

  it('Should return the rearranged tree after an imbalance to the right (SRL with bf & L)', () => {
    const toInsert = [{ n: 5 }, { n: 10 }, { n: 3 }, { n: 9 }, { n: 12 }, { n: 13 }];
    const returnedTravel: TestElement[] = [];
    const returnedTravelAfterRotation: TestElement[] = [];

    function pushToReturnedTravel(element: TestElement):void {
      returnedTravel.push(element);
    }

    function pushToReturnedTravelAfterRotation(element: TestElement):void {
      returnedTravelAfterRotation.push(element);
    }

    tree = AvlTree.fromArray<TestElement>(toInsert, compareFunction);

    tree.recursiveTravelPreOrder(pushToReturnedTravel, (tree as any).root);

    (tree as any).emptyStackForBalancing();
    tree.recursiveTravelPreOrder(pushToReturnedTravelAfterRotation, (tree as any).root);

    expect(returnedTravel).not.toEqual(returnedTravelAfterRotation);
  });

  it('Should return the rearranged tree after an imbalance to the left (DRR with bf & L)', () => {
    const toInsert = [{ n: 11 }, { n: 5 }, { n: 4 }, { n: 1 },
      { n: 8 }, { n: 7 }, { n: 6 }, { n: 9 }, { n: 12 }, { n: 13 }];
    const returnedTravel: TestElement[] = [];
    const returnedTravelAfterRotation: TestElement[] = [];

    function pushToReturnedTravel(element: TestElement):void {
      returnedTravel.push(element);
    }

    function pushToReturnedTravelAfterRotation(element: TestElement):void {
      returnedTravelAfterRotation.push(element);
    }
    tree = AvlTree.fromArray<TestElement>(toInsert, compareFunction);

    tree.recursiveTravelPreOrder(pushToReturnedTravel, (tree as any).root);

    (tree as any).emptyStackForBalancing();
    tree.recursiveTravelPreOrder(pushToReturnedTravelAfterRotation, (tree as any).root);

    expect(returnedTravel).not.toEqual(returnedTravelAfterRotation);
  });

  it('Should return the rearranged tree after an imbalance to the right (DRL with bf & L)', () => {
    const toInsert = [{ n: 10 }, { n: 9 }, { n: 11 }, { n: 3 },
      { n: 7 }, { n: 12 }, { n: 4 }, { n: 6 }, { n: 8 }, { n: 5 }];
    const returnedTravel: TestElement[] = [];
    const returnedTravelAfterRotation: TestElement[] = [];

    function pushToReturnedTravel(element: TestElement):void {
      returnedTravel.push(element);
    }

    function pushToReturnedTravelAfterRotation(element: TestElement):void {
      returnedTravelAfterRotation.push(element);
    }

    tree = AvlTree.fromArray<TestElement>(toInsert, compareFunction);

    tree.recursiveTravelPreOrder(pushToReturnedTravel, (tree as any).root);

    (tree as any).emptyStackForBalancing();
    tree.recursiveTravelPreOrder(pushToReturnedTravelAfterRotation, (tree as any).root);

    expect(returnedTravel).not.toEqual(returnedTravelAfterRotation);
  });

  it('I should reorder the tree after deleting( imbalance to the right (DRL with bf & L))', () => {
    const toInsert = [{ n: 12 }, { n: 11 }, { n: 13 }, { n: 3 },
      { n: 8 }, { n: 14 }, { n: 4 }, { n: 6 }, { n: 10 }, { n: 5 }, { n: 9 }];
    const returnedTravel: TestElement[] = [];
    const returnedTravelAfterRotation: TestElement[] = [];

    function pushToReturnedTravel(element: TestElement):void {
      returnedTravel.push(element);
    }

    function pushToReturnedTravelAfterRotation(element: TestElement):void {
      returnedTravelAfterRotation.push(element);
    }

    tree = AvlTree.fromArray<TestElement>(toInsert, compareFunction);

    tree.recursiveTravelPreOrder(pushToReturnedTravel, (tree as any).root);
    tree.delete({ n: 9 });
    tree.recursiveTravelPreOrder(pushToReturnedTravelAfterRotation, (tree as any).root);

    expect(returnedTravel).not.toEqual(returnedTravelAfterRotation);
  });
});
