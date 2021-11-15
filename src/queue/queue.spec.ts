import Queue from './queue';

describe('Queue', () => {
  let queue: Queue<String>;
  const insertTestElement = (string: string) => queue.enQueue(string);
  beforeEach(() => {
    queue = new Queue<String>();
  });
  it('should add an item to an empty queue', () => {
    queue.enQueue('sam');
    expect(queue.length).toEqual(1);
  });

  it('should add multiple items to the queue', () => {
    const items = ['sara', 'jona', 'lucas'];
    items.forEach(insertTestElement);
    expect(queue.length).toEqual(3);
  });

  it('should return null when removing an element of empty queue', () => {
    expect(queue.deQueue()).toBe(null);
  });

  it('should remove the last element from the queue', () => {
    const items = ['sara', 'jona', 'lucas'];
    items.forEach(insertTestElement);
    expect(queue.deQueue()).toEqual('lucas');
  });

  it('should return isEmpty = true', () => {
    expect(queue.isEmpty()).toBe(true);
  });
});
