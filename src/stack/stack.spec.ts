import Stack from './stack';

describe('testing Stack class with strings', () => {
  let stack: Stack<String>;
  beforeEach(() => {
    stack = new Stack<String>();
  });

  it('should push element to the Stack', () => {
    stack.push('item1');
    expect(stack.length).toEqual(1);
  });

  it('should push element to the top of Stack', () => {
    stack.push('item1');
    stack.push('item2');
    expect(stack.length).toEqual(2);
  });

  it('should pop to the empty Stack', () => {
    expect(stack.pop()).toBe(null);
  });

  it('should pop to the top of Stack', () => {
    stack.push('item1');
    stack.push('item2');
    expect(stack.pop()).toEqual('item2');
  });

  it('should peek to empty', () => {
    expect(stack.peek()).toBe(null);
  });

  it('should peek to the top of Stack and show "item3"', () => {
    stack.push('item1');
    stack.push('item2');
    stack.push('item3');
    expect(stack.peek()).toEqual('item3');
  });

  it('should isEmpty return "false"', () => {
    stack.push('item1');
    stack.push('item2');
    stack.push('item3');
    expect(stack.isEmpty()).toEqual(false);
  });

  it('should isEmpty return "true"', () => {
    expect(stack.isEmpty()).toEqual(true);
  });
});
