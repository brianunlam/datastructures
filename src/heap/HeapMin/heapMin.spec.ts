import HeapOfMin from './heapMin';

interface TestElement {
  n: number;
}

describe('Heap of Mins', () => {
  let myHeap: HeapOfMin<TestElement>;
  const compareFunction = (a: TestElement, b: TestElement) => a.n - b.n;
  beforeEach(() => {
    myHeap = new HeapOfMin<TestElement>(compareFunction);
  });

  it('Should insert a new element into empty Heap', () => {
    myHeap.insert({ n: 12 });
    expect(myHeap.length).toEqual(1);
  });

  it('Should insert a new element into the Heap', () => {
    const expectedHeap = [{ n: 12 }, { n: 16 }];
    myHeap.insert({ n: 16 });
    myHeap.insert({ n: 12 });
    expect((myHeap as any).memory).toEqual(expectedHeap);
  });

  it('Should delete element into the Heap', () => {
    const toInsert = [{ n: 12 }, { n: 14 }, { n: 16 }, { n: 21 }, { n: 30 }, { n: 15 }, { n: 70 },
      { n: 54 }, { n: 31 }, { n: 65 }, { n: 49 }, { n: 27 }, { n: 55 }, { n: 2 }];
    const expectedHeap = [{ n: 2 }, { n: 12 }, { n: 14 }, { n: 15 }, { n: 16 }, { n: 21 },
      { n: 27 }, { n: 30 }, { n: 31 }, { n: 49 }, { n: 54 }, { n: 55 }, { n: 70 }];
    myHeap = HeapOfMin.fromArray<TestElement>(toInsert, compareFunction);
    myHeap.remove({ n: 65 });
    expect((myHeap as any).memory).toEqual(expectedHeap);
  });

  it('Should return the min of the Heap', () => {
    const toInsert = [{ n: 12 }, { n: 14 }, { n: 16 }];
    myHeap = HeapOfMin.fromArray<TestElement>(toInsert, compareFunction);
    expect(myHeap.extractMin()).toEqual({ n: 12 });
  });
});
