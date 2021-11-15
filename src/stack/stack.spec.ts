import Stack from './stack';

describe('Stack', () => {
  let stack: Stack<String>;
  const insertTestElement = (string: string) => stack.push(string);
  beforeEach(() => {
    stack = new Stack<String>();
  });

  it('should push element to the Stack', () => {
    stack.push('item1');
    expect(stack.length).toEqual(1);
  });

  it('should push element to the top of Stack', () => {
    const elementsMock = ['item1', 'item2'];
    elementsMock.forEach((element: string) => stack.push(element));
    expect(stack.length).toEqual(2);
  });

  it('should pop to the empty Stack', () => {
    expect(stack.pop()).toBe(null);
  });

  it('should pop to the top of Stack', () => {
    const elementsMock = ['item1', 'item2'];
    elementsMock.forEach((element: string) => stack.push(element));
    expect(stack.pop()).toEqual('item2');
  });

  it('should peek to empty', () => {
    expect(stack.peek()).toBe(null);
  });

  it('should peek to the top of Stack and show "item3"', () => {
    const elementsMock = ['item1', 'item2', 'item3'];
    elementsMock.forEach((element: string) => stack.push(element));
    expect(stack.peek()).toEqual('item3');
  });

  it('should isEmpty return "false"', () => {
    const elementsMock = ['item1', 'item2', 'item3'];
    elementsMock.forEach((element: string) => stack.push(element));
    expect(stack.isEmpty()).toEqual(false);
  });

  it('should isEmpty return "true"', () => {
    expect(stack.isEmpty()).toEqual(true);
  });
});
