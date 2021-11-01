const queue = require('./queue');

describe('testing Queue class with numbers', () => {
  it('should add 200 to the queue', () => {
    const item= 200;
    const q = new queue();
    q.enQueue(item);
    expect(q.row[q.row.length-1]).toEqual(item);
  });

  it('should remove 200 from the queue start', () => {
    const items = [200, 100, 400, 300, 1000];
    const q = new queue();
    items.forEach(element => {
      q.enQueue(element);
    });
    expect(q.deQueue()).toEqual('item removed 200');
  });
});