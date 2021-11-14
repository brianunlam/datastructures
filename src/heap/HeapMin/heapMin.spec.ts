import HeapOfMin from './heapMin';

interface Nn {
  n: number;
}

describe('Heap of Mins tests of type Object', () => {
  let myHeap: HeapOfMin<Nn>;
  beforeEach(() => {
    myHeap = new HeapOfMin<Nn>((a: Nn, b: Nn) => a.n - b.n);
  });

  it('Should insert a new element into empty Heap', () => {
    myHeap.insert({ n: 12 });
    expect(myHeap.length).toEqual(1);
  });

  it('Should insert a new element into the Heap and up it', () => {
    const expectedHeap = [{ n: 12 }, { n: 16 }];
    myHeap.insert({ n: 12 });
    myHeap.insert({ n: 16 });
    expect((myHeap as any).memory).toEqual(expectedHeap);
  });

  it('Should delete element into the Heap', () => {
    const toCharge = [{ n: 12 }, { n: 14 }, { n: 16 }, { n: 21 }, { n: 30 }, { n: 15 }, { n: 70 },
      { n: 54 }, { n: 31 }, { n: 65 }, { n: 49 }, { n: 27 }, { n: 55 }, { n: 2 }];
    const expectedHeap = [{ n: 2 }, { n: 12 }, { n: 14 }, { n: 15 }, { n: 16 }, { n: 21 },
      { n: 27 }, { n: 30 }, { n: 31 }, { n: 49 }, { n: 54 }, { n: 55 }, { n: 70 }];
    const myHeap2 = HeapOfMin.fromArray<Nn>(toCharge, (a: Nn, b: Nn) => a.n - b.n);
    myHeap2.remove({ n: 65 });
    expect((myHeap2 as any).memory).toEqual(expectedHeap);
  });

  it('Should return the max of the Heap', () => {
    const toCharge = [{ n: 12 }, { n: 14 }, { n: 16 }];
    const myHeap2: HeapOfMin<Nn> = HeapOfMin.fromArray<Nn>(toCharge, (a: Nn, b: Nn) => a.n - b.n);
    expect(myHeap2.extractMin()).toEqual({ n: 12 });
  });
});
