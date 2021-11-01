const queue = require('./queue');

describe('testing Queue class with numbers', () => {
  it('should add 200 to the queue', () => {
    const item= 200;
    const q = new queue();
    q.enQueue(item);
    expect(q.row[q.row.length-1]).toEqual(item);
  });

});