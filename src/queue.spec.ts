const Queue = require('./queue.ts');

describe('testing Queue class with numbers', () => {
  it('should add 200 to the queue', () => {
    const item = 200;
    const q = new Queue();
    q.enQueue(item);
    expect(q.row[q.row.length - 1]).toEqual(item);
  });

  it('should remove 200 from the queue start', () => {
    const items = [200, 100, 400, 300, 1000];
    const q = new Queue();
    items.forEach((element) => {
      q.enQueue(element);
    });
    expect(q.deQueue()).toEqual('item removed 200');
  });

  it('should return isEmpty = true', () => {
    const q = new Queue();
    expect(q.isEmpty()).toBe(true);
  });

  it('should return a string with the detail of the Queue', () => {
    const q = new Queue();
    q.enQueue(2);
    q.enQueue(5);
    expect(q.toString()).toEqual('length: 2 complete row: 2,5');
  });
});
