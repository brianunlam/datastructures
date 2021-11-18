import HashMap from './hashmap';

interface TestElement {
  n : number
}
describe('HashMaP', () => {
  let hashmap: HashMap<TestElement>;
  beforeEach(() => {
    hashmap = new HashMap <TestElement>();
  });

  it('should add an element into the Hashmap', () => {
    hashmap.set('pepe', { n: 12 });
    expect(hashmap.length).toEqual(1);
  });
  it('should return the requested item', () => {
    hashmap.set('pepe', { n: 12 });
    expect(hashmap.get('pepe')).toEqual({ key: 'pepe', value: { n: 12 } });
  });
  it('should return undefined when the key not hashed', () => {
    expect(hashmap.get('zapallo')).toEqual(undefined);
  });
  it('returns undefined when the key collides but is not found', () => {
    hashmap.set('pepe', { n: 12 });
    expect(hashmap.get('coco')).toEqual(undefined);
  });
});
