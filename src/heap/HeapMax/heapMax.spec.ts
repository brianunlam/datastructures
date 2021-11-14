import HeapOfMax from './heapMax';

interface Nn {
  n: number;
}

describe('Heap of Max tests of type Object', () => {
  let myHeap: HeapOfMax<Nn>;
  beforeEach(() => {
    myHeap = new HeapOfMax<Nn>((a: Nn, b: Nn) => a.n - b.n);
  });

  it('Should insert a new element into empty Heap', () => {
    myHeap.insert({ n: 12 });
    expect(myHeap.length).toEqual(1);
  });

  it('Should insert a new element into the Heap and up it', () => {
    const expectedHeap = [{ n: 16 }, { n: 12 }];
    myHeap.insert({ n: 12 });
    myHeap.insert({ n: 16 });
    expect((myHeap as any).memory).toEqual(expectedHeap);
  });

  it('Should delete element into the Heap', () => {
    const toCharge = [{ n: 12 }, { n: 14 }, { n: 16 }, { n: 21 }, { n: 30 }, { n: 15 }, { n: 70 },
      { n: 54 }, { n: 31 }, { n: 65 }, { n: 49 }, { n: 27 }, { n: 55 }, { n: 2 }];
    const expectedHeap = [{ n: 70 }, { n: 54 }, { n: 55 }, { n: 27 }, { n: 49 }, { n: 31 },
      { n: 30 }, { n: 2 }, { n: 21 }, { n: 16 }, { n: 15 }, { n: 14 }, { n: 12 }];
    const myHeap2 = HeapOfMax.fromArray<Nn>(toCharge, (a: Nn, b: Nn) => a.n - b.n);
    myHeap2.remove({ n: 65 });
    expect((myHeap2 as any).memory).toEqual(expectedHeap);
  });

  it('Should return the max of the Heap', () => {
    const toCharge = [{ n: 12 }, { n: 14 }, { n: 16 }];
    const myHeap2: HeapOfMax<Nn> = HeapOfMax.fromArray<Nn>(toCharge, (a: Nn, b: Nn) => a.n - b.n);
    expect(myHeap2.extractMax()).toEqual({ n: 16 });
  });
});
