import AvlTree from './avlTree';

interface Nn {
  n: number;
}

describe('testing AVLtree class with objects', () => {
  let tree: AvlTree<Nn>;
  beforeEach(() => {
    tree = new AvlTree<Nn>((a: Nn, b: Nn) => a.n - b.n);
  });

  it('should add an element to the empty tree', () => {
    tree.add({ n: 12 });
    expect(tree.length).toEqual(1);
  });

  it('should add an element in the left tree', () => {
    expect(tree.delete({ n: 4 })).toBe(null);
  });

  it('should add an element in the left tree', () => {
    tree.add({ n: 12 });
    tree.add({ n: 10 });
    expect(tree.length).toEqual(2);
  });

  it('should add an element in the right tree', () => {
    tree.add({ n: 12 });
    tree.add({ n: 14 });
    expect(tree.length).toEqual(2);
  });

  it('should return false when adding a repeating element', () => {
    tree.add({ n: 12 });
    tree.add({ n: 14 });
    expect(tree.add({ n: 14 })).toBe(false);
  });

  it('Should return the height when the tree is empty', () => {
    expect((tree as any).getHeight((tree as any).root)).toEqual(0);
  });

  it('Should return the height when only has a root', () => {
    tree.add({ n: 12 });
    expect((tree as any).getHeight((tree as any).root)).toEqual(0);
  });

  it('Should return the height when only has a root and left element', () => {
    tree.add({ n: 12 });
    tree.add({ n: 11 });
    expect((tree as any).getHeight((tree as any).root)).toEqual(1);
  });

  it('Should return the height when only has a root and right element', () => {
    tree.add({ n: 12 });
    tree.add({ n: 14 });
    expect((tree as any).getHeight((tree as any).root)).toEqual(1);
  });

  it('Should return the height when only has a root and this one has her children', () => {
    const toCharge = [{ n: 12 }, { n: 14 }, { n: 11 }];
    const tree1 = AvlTree.fromArray<Nn>(toCharge, (a: Nn, b: Nn) => a.n - b.n);

    expect((tree1 as any).getHeight((tree1 as any).root)).toEqual(1);
  });

  it('Should return the height when only has a root and this one has her children and these yours', () => {
    const toCharge = [{ n: 12 }, { n: 14 }, { n: 11 }, { n: 15 }, { n: 10 }];
    const tree1 = AvlTree.fromArray<Nn>(toCharge, (a: Nn, b: Nn) => a.n - b.n);

    expect((tree1 as any).getHeight((tree1 as any).root)).toEqual(2);
  });

  it('Should return the height when when the tree is unbalanced to the right', () => {
    const toCharge = [{ n: 1 }, { n: 2 }, { n: 3 }, { n: 4 }, { n: 5 }];
    const tree1 = AvlTree.fromArray<Nn>(toCharge, (a: Nn, b: Nn) => a.n - b.n);

    expect((tree1 as any).getHeight((tree1 as any).root)).toEqual(4);
  });

  it('Should return the height when when the tree is unbalanced to the left', () => {
    const toCharge = [{ n: 5 }, { n: 4 }, { n: 3 }, { n: 2 }, { n: 1 }];
    const tree1 = AvlTree.fromArray<Nn>(toCharge, (a: Nn, b: Nn) => a.n - b.n);

    expect((tree1 as any).getHeight((tree1 as any).root)).toEqual(4);
  });

  it('Should return the height when when the tree is unbalanced', () => {
    const toCharge = [{ n: 50 }, { n: 49 }, { n: 30 }, { n: 29 }, { n: 32 },
      { n: 55 }, { n: 33 }, { n: 35 }];
    const tree1 = AvlTree.fromArray<Nn>(toCharge, (a: Nn, b: Nn) => a.n - b.n);

    expect((tree1 as any).getHeight((tree1 as any).root)).toEqual(5);
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
    const toCharge = [{ n: 50 }, { n: 49 }, { n: 51 }];
    const tree1 = AvlTree.fromArray<Nn>(toCharge, (a: Nn, b: Nn) => a.n - b.n);

    expect((tree1 as any).getBF((tree1 as any).root)).toEqual(0);
  });

  it('Should return the Balance factor when the tree has simple unbalance to the left', () => {
    const toCharge = [{ n: 50 }, { n: 49 }, { n: 51 }, { n: 48 }];
    const tree1 = AvlTree.fromArray<Nn>(toCharge, (a: Nn, b: Nn) => a.n - b.n);

    expect((tree1 as any).getBF((tree1 as any).root)).toEqual(-1);
  });

  it('Should return the Balance factor when the tree has simple unbalance to the right', () => {
    const toCharge = [{ n: 50 }, { n: 49 }, { n: 51 }, { n: 52 }];
    const tree1 = AvlTree.fromArray<Nn>(toCharge, (a: Nn, b: Nn) => a.n - b.n);

    expect((tree1 as any).getBF((tree1 as any).root)).toEqual(1);
  });

  it('Should return the Balance factor when the tree has double left unbalance', () => {
    const toCharge = [{ n: 9 }, { n: 5 }, { n: 10 }, { n: 7 }, { n: 1 },
      { n: 6 }, { n: 8 }];
    const tree1 = AvlTree.fromArray<Nn>(toCharge, (a: Nn, b: Nn) => a.n - b.n);

    expect((tree1 as any).getBF((tree1 as any).root)).toEqual(-2);
  });

  it('Should return the Balance factor when the tree has double right unbalance', () => {
    const toCharge = [{ n: 5 }, { n: 3 }, { n: 10 }, { n: 7 }, { n: 12 },
      { n: 6 }, { n: 8 }];
    const tree1 = AvlTree.fromArray<Nn>(toCharge, (a: Nn, b: Nn) => a.n - b.n);

    expect((tree1 as any).getBF((tree1 as any).root)).toEqual(2);
  });

  it('Should return the rearranged tree after an imbalance to the right SRL', () => {
    const toCharge = [{ n: 5 }, { n: 10 }, { n: 3 }, { n: 9 }, { n: 12 }];
    const returnedTravel: Nn[] = [];
    const returnedTravelAfterRotation: Nn[] = [];

    function pushToReturnedTravel(element: Nn):void {
      returnedTravel.push(element);
    }

    function pushToReturnedTravelAfterRotation(element: Nn):void {
      returnedTravelAfterRotation.push(element);
    }

    const tree1 = AvlTree.fromArray<Nn>(toCharge, (a: Nn, b: Nn) => a.n - b.n);

    tree1.recursiveTravelPreOrder(pushToReturnedTravel, (tree1 as any).root);

    (tree1 as any).simpleRotation((tree1 as any).root, 'left');
    tree1.recursiveTravelPreOrder(pushToReturnedTravelAfterRotation, (tree1 as any).root);

    expect(returnedTravel).not.toEqual(returnedTravelAfterRotation);
  });

  it('it should return false when it does not have a right node', () => {
    const toCharge = [{ n: 5 }, { n: 3 }];

    const tree1 = AvlTree.fromArray<Nn>(toCharge, (a: Nn, b: Nn) => a.n - b.n);

    expect((tree1 as any).simpleRotation((tree1 as any).root, 'right')).toBe(false);
  });

  it('Should return the rearranged tree after an imbalance to the left SRR', () => {
    const toCharge = [{ n: 5 }, { n: 3 }, { n: 10 }, { n: 2 }, { n: 1 }, { n: 4 }];
    const returnedTravel: Nn[] = [];
    const returnedTravelAfterRotation: Nn[] = [];

    function pushToReturnedTravel(element: Nn):void {
      returnedTravel.push(element);
    }

    function pushToReturnedTravelAfterRotation(element: Nn):void {
      returnedTravelAfterRotation.push(element);
    }

    const tree1 = AvlTree.fromArray<Nn>(toCharge, (a: Nn, b: Nn) => a.n - b.n);

    tree1.recursiveTravelPreOrder(pushToReturnedTravel, (tree1 as any).root);

    (tree1 as any).simpleRotation((tree1 as any).root, 'right');
    tree1.recursiveTravelPreOrder(pushToReturnedTravelAfterRotation, (tree1 as any).root);
    expect(returnedTravel).not.toEqual(returnedTravelAfterRotation);
  });

  it('it should return false when it does not have a left node', () => {
    const toCharge = [{ n: 5 }, { n: 6 }];

    const tree1 = AvlTree.fromArray<Nn>(toCharge, (a: Nn, b: Nn) => a.n - b.n);

    expect((tree1 as any).simpleRotation((tree1 as any).root, 'left')).toBe(false);
  });

  it('returns false when it has no direction', () => {
    const toCharge = [{ n: 5 }, { n: 6 }];

    const tree1 = AvlTree.fromArray<Nn>(toCharge, (a: Nn, b: Nn) => a.n - b.n);

    expect((tree1 as any).simpleRotation((tree1 as any).root, null)).toBe(false);
  });

  it('Should return the rearranged tree after an imbalance to the left DRR', () => {
    const toCharge = [{ n: 9 }, { n: 5 }, { n: 10 }, { n: 1 }, { n: 7 }, { n: 6 }, { n: 8 }];
    const returnedTravel: Nn[] = [];
    const returnedTravelAfterRotation: Nn[] = [];

    function pushToReturnedTravel(element: Nn):void {
      returnedTravel.push(element);
    }

    function pushToReturnedTravelAfterRotation(element: Nn):void {
      returnedTravelAfterRotation.push(element);
    }

    const tree1 = AvlTree.fromArray<Nn>(toCharge, (a: Nn, b: Nn) => a.n - b.n);

    tree1.recursiveTravelPreOrder(pushToReturnedTravel, (tree1 as any).root);

    (tree1 as any).doubleRotation((tree1 as any).root, 'left');
    tree1.recursiveTravelPreOrder(pushToReturnedTravelAfterRotation, (tree1 as any).root);
    expect(returnedTravel).not.toEqual(returnedTravelAfterRotation);
  });

  it('it should return false when it does not have a right node', () => {
    const toCharge = [{ n: 5 }, { n: 3 }];

    const tree1 = AvlTree.fromArray<Nn>(toCharge, (a: Nn, b: Nn) => a.n - b.n);

    expect((tree1 as any).doubleRotation((tree1 as any).root, 'left')).toBe(false);
  });

  it('it should return false when it does not have a right child of left node', () => {
    const toCharge = [{ n: 5 }, { n: 6 }];

    const tree1 = AvlTree.fromArray<Nn>(toCharge, (a: Nn, b: Nn) => a.n - b.n);

    expect((tree1 as any).doubleRotation((tree1 as any).root, 'left')).toBe(false);
  });

  it('Should return the rearranged tree after an imbalance to the right DRL', () => {
    const toCharge = [{ n: 5 }, { n: 3 }, { n: 10 }, { n: 7 }, { n: 12 }, { n: 6 }, { n: 8 }];
    const returnedTravel: Nn[] = [];
    const returnedTravelAfterRotation: Nn[] = [];

    function pushToReturnedTravel(element: Nn):void {
      returnedTravel.push(element);
    }

    function pushToReturnedTravelAfterRotation(element: Nn):void {
      returnedTravelAfterRotation.push(element);
    }

    const tree1 = AvlTree.fromArray<Nn>(toCharge, (a: Nn, b: Nn) => a.n - b.n);

    tree1.recursiveTravelPreOrder(pushToReturnedTravel, (tree1 as any).root);

    (tree1 as any).doubleRotation((tree1 as any).root, 'right');
    tree1.recursiveTravelPreOrder(pushToReturnedTravelAfterRotation, (tree1 as any).root);

    expect(returnedTravel).not.toEqual(returnedTravelAfterRotation);
  });

  it('it should return false when it does not have a left node', () => {
    const toCharge = [{ n: 5 }, { n: 6 }];

    const tree1 = AvlTree.fromArray<Nn>(toCharge, (a: Nn, b: Nn) => a.n - b.n);

    expect((tree1 as any).doubleRotation((tree1 as any).root, 'right')).toBe(false);
  });

  it('it should return false when it does not have a left child of right node', () => {
    const toCharge = [{ n: 5 }, { n: 3 }];

    const tree1 = AvlTree.fromArray<Nn>(toCharge, (a: Nn, b: Nn) => a.n - b.n);

    expect((tree1 as any).doubleRotation((tree1 as any).root, 'right')).toBe(false);
  });

  it('returns false when it has no direction', () => {
    const toCharge = [{ n: 5 }, { n: 6 }];

    const tree1 = AvlTree.fromArray<Nn>(toCharge, (a: Nn, b: Nn) => a.n - b.n);

    expect((tree1 as any).doubleRotation((tree1 as any).root, null)).toBe(false);
  });

  it('Should return the rearranged tree after an imbalance to the left (SRR with bf & R)', () => {
    const toCharge = [{ n: 5 }, { n: 3 }, { n: 10 }, { n: 2 }, { n: 1 }, { n: 4 }];
    const returnedTravel: Nn[] = [];
    const returnedTravelAfterRotation: Nn[] = [];

    function pushToReturnedTravel(element: Nn):void {
      returnedTravel.push(element);
    }

    function pushToReturnedTravelAfterRotation(element: Nn):void {
      returnedTravelAfterRotation.push(element);
    }

    const tree1 = AvlTree.fromArray<Nn>(toCharge, (a: Nn, b: Nn) => a.n - b.n);

    tree1.recursiveTravelPreOrder(pushToReturnedTravel, (tree1 as any).root);

    (tree1 as any).emptyStackForBalancing();
    tree1.recursiveTravelPreOrder(pushToReturnedTravelAfterRotation, (tree1 as any).root);

    expect(returnedTravel).not.toEqual(returnedTravelAfterRotation);
  });

  it('Should return the rearranged tree after an imbalance to the right (SRL with bf & L)', () => {
    const toCharge = [{ n: 5 }, { n: 10 }, { n: 3 }, { n: 9 }, { n: 12 }, { n: 13 }];
    const returnedTravel: Nn[] = [];
    const returnedTravelAfterRotation: Nn[] = [];

    function pushToReturnedTravel(element: Nn):void {
      returnedTravel.push(element);
    }

    function pushToReturnedTravelAfterRotation(element: Nn):void {
      returnedTravelAfterRotation.push(element);
    }

    const tree1 = AvlTree.fromArray<Nn>(toCharge, (a: Nn, b: Nn) => a.n - b.n);

    tree1.recursiveTravelPreOrder(pushToReturnedTravel, (tree1 as any).root);

    (tree1 as any).emptyStackForBalancing();
    tree1.recursiveTravelPreOrder(pushToReturnedTravelAfterRotation, (tree1 as any).root);

    expect(returnedTravel).not.toEqual(returnedTravelAfterRotation);
  });

  it('Should return the rearranged tree after an imbalance to the left (DRR with bf & L)', () => {
    const toCharge = [{ n: 11 }, { n: 5 }, { n: 4 }, { n: 1 },
      { n: 8 }, { n: 7 }, { n: 6 }, { n: 9 }, { n: 12 }, { n: 13 }];
    const returnedTravel: Nn[] = [];
    const returnedTravelAfterRotation: Nn[] = [];

    function pushToReturnedTravel(element: Nn):void {
      returnedTravel.push(element);
    }

    function pushToReturnedTravelAfterRotation(element: Nn):void {
      returnedTravelAfterRotation.push(element);
    }
    const tree1 = AvlTree.fromArray<Nn>(toCharge, (a: Nn, b: Nn) => a.n - b.n);

    tree1.recursiveTravelPreOrder(pushToReturnedTravel, (tree1 as any).root);

    (tree1 as any).emptyStackForBalancing();
    tree1.recursiveTravelPreOrder(pushToReturnedTravelAfterRotation, (tree1 as any).root);

    expect(returnedTravel).not.toEqual(returnedTravelAfterRotation);
  });

  it('Should return the rearranged tree after an imbalance to the right (DRL with bf & L)', () => {
    const toCharge = [{ n: 10 }, { n: 9 }, { n: 11 }, { n: 3 },
      { n: 7 }, { n: 12 }, { n: 4 }, { n: 6 }, { n: 8 }, { n: 5 }];
    const returnedTravel: Nn[] = [];
    const returnedTravelAfterRotation: Nn[] = [];

    function pushToReturnedTravel(element: Nn):void {
      returnedTravel.push(element);
    }

    function pushToReturnedTravelAfterRotation(element: Nn):void {
      returnedTravelAfterRotation.push(element);
    }

    const tree1 = AvlTree.fromArray<Nn>(toCharge, (a: Nn, b: Nn) => a.n - b.n);

    tree1.recursiveTravelPreOrder(pushToReturnedTravel, (tree1 as any).root);

    (tree1 as any).emptyStackForBalancing();
    tree1.recursiveTravelPreOrder(pushToReturnedTravelAfterRotation, (tree1 as any).root);

    expect(returnedTravel).not.toEqual(returnedTravelAfterRotation);
  });

  it('I should reorder the tree after deleting( imbalance to the right (DRL with bf & L))', () => {
    const toCharge = [{ n: 12 }, { n: 11 }, { n: 13 }, { n: 3 },
      { n: 8 }, { n: 14 }, { n: 4 }, { n: 6 }, { n: 10 }, { n: 5 }, { n: 9 }];
    const returnedTravel: Nn[] = [];
    const returnedTravelAfterRotation: Nn[] = [];

    function pushToReturnedTravel(element: Nn):void {
      returnedTravel.push(element);
    }

    function pushToReturnedTravelAfterRotation(element: Nn):void {
      returnedTravelAfterRotation.push(element);
    }

    const tree1 = AvlTree.fromArray<Nn>(toCharge, (a: Nn, b: Nn) => a.n - b.n);

    tree1.recursiveTravelPreOrder(pushToReturnedTravel, (tree1 as any).root);
    tree1.delete({ n: 9 });
    tree1.recursiveTravelPreOrder(pushToReturnedTravelAfterRotation, (tree1 as any).root);

    expect(returnedTravel).not.toEqual(returnedTravelAfterRotation);
  });
});
