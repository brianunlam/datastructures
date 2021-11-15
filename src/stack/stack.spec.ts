import Stack from './stack';

describe('Stack', () => {
  let stack: Stack<String>;
  const insertTestElement = (string: string) => stack.push(string);
  beforeEach(() => {
    stack = new Stack<String>();
  });

  it('should push an element into the Stack', () => {
    stack.push('item1');
    expect(stack.length).toEqual(1);
  });

  it('should push an element to the top of Stack', () => {
    const elementsMock = ['item1', 'item2'];
    elementsMock.forEach(insertTestElement);
    expect(stack.length).toEqual(2);
  });

  it('should return null when pop from and empty stack', () => {
    expect(stack.pop()).toBe(null);
  });

  it('should pop an element from the top of the stack', () => {
    const elementsMock = ['item1', 'item2'];
    elementsMock.forEach(insertTestElement);
    expect(stack.pop()).toEqual('item2');
  });

  it('should return null when peeking from an empty stack', () => {
    expect(stack.peek()).toBe(null);
  });

  it('should peek an element from the top of the stack', () => {
    const elementsMock = ['item1', 'item2', 'item3'];
    elementsMock.forEach(insertTestElement);
    expect(stack.peek()).toEqual('item3');
  });

  it('should return false when the stack has elements and the isEmpty funciton is called', () => {
    const elementsMock = ['item1', 'item2', 'item3'];
    elementsMock.forEach((element: string) => stack.push(element));
    expect(stack.isEmpty()).toEqual(false);
  });

  it('sshould return true when the stack has no elements and the isEmpty function is called', () => {
    expect(stack.isEmpty()).toEqual(true);
  });
});
