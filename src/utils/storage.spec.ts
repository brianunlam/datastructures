import Storage from './storage';

interface TestElement {
  name: string
}

describe('Storage', () => {
  let storage: Storage<TestElement>;

  const insertPerson = (name: string) => storage.save({ name });

  beforeEach(() => {
    storage = new Storage<TestElement>();
  });
  it('should add an element in the storage', () => {
    const saved = storage.save({ name: 'santiago' });
    expect(storage.get(saved)).toEqual({ name: 'santiago' });
  });

  it('should remove from storage', () => {
    const toAdd = ['marcos', 'thiago'];
    toAdd.forEach(insertPerson);
    const ixForDelete = storage.save({ name: 'santiago' });
    expect(storage.delete(ixForDelete)).toEqual({ name: 'santiago' });
  });

  it('should Get from storage', () => {
    const toAdd = ['marcos', 'thiago'];
    toAdd.forEach(insertPerson);
    const ixForGet = storage.save({ name: 'santiago' });
    expect(storage.get(ixForGet)).toEqual({ name: 'santiago' });
  });
});
