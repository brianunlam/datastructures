import Queue from './queue';

describe('Queue', () => {
  let q: Queue<String>;
  const insertTestElement = (string: string) => q.enQueue(string);
  beforeEach(() => {
    q = new Queue<String>();
  });
  it('should add an item to queue', () => {
    q.enQueue('sam');
    expect(q.length).toEqual(1);
  });

  it('should add multiple items to queue', () => {
    const items = ['sara', 'jona', 'lucas'];
    items.forEach(insertTestElement);
    expect(q.length).toEqual(3);
  });

  it('should remove item from empty queue', () => {
    expect(q.deQueue()).toBe(null);
  });

  it('should add multiple items to queue', () => {
    const items = ['sara', 'jona', 'lucas'];
    items.forEach(insertTestElement);
    expect(q.deQueue()).toEqual('lucas');
  });

  it('should add multiple items to the queue', () => {
    const items = ['sara', 'lucas'];
    items.forEach(insertTestElement);
    expect(q.deQueue()).toEqual('lucas');
  });

  it('should return isEmpty = true', () => {
    expect(q.isEmpty()).toBe(true);
  });
});
