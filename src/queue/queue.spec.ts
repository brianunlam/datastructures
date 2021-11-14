import Queue from './queue';

describe('testing Queue class with numbers', () => {
  let q: Queue<String>;

  beforeEach(() => {
    q = new Queue<String>();
  });
  it('should add an item to queue', () => {
    q.enQueue('sam');
    expect(q.length).toEqual(1);
  });

  it('should add multiple items to queue', () => {
    const items = ['sara', 'jona', 'lucas'];
    items.forEach((element) => {
      q.enQueue(element);
    });
    expect(q.length).toEqual(3);
  });

  it('should remove item from empty queue', () => {
    expect(q.deQueue()).toBe(null);
  });

  it('should add multiple items to queue', () => {
    const items = ['sara', 'jona', 'lucas'];
    items.forEach((element) => {
      q.enQueue(element);
    });
    expect(q.deQueue()).toEqual('lucas');
  });

  it('should add multiple items to queue with 2 items', () => {
    const items = ['sara', 'lucas'];
    items.forEach((element) => {
      q.enQueue(element);
    });
    expect(q.deQueue()).toEqual('lucas');
  });

  it('should return isEmpty = true', () => {
    const q = new Queue<Number>();
    expect(q.isEmpty()).toBe(true);
  });
});
