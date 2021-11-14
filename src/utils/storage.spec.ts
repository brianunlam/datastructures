import Storage from './storage';

interface Person {
  name: string
}

describe('Storage', () => {
  let storage: Storage<Person>;
  beforeEach(() => {
    storage = new Storage<Person>();
  });
  it('should add an element in the storage', () => {
    const saved = storage.save({ name: 'santiago' });
    expect(storage.get(saved)).toEqual({ name: 'santiago' });
  });

  it('should remove from storage', () => {
    const toAdd = ['marcos', 'thiago'];
    toAdd.forEach((element) => storage.save({ name: element }));
    const ixForDelete = storage.save({ name: 'santiago' });
    expect(storage.delete(ixForDelete)).toEqual({ name: 'santiago' });
  });

  it('should Get from storage', () => {
    const toAdd = ['marcos', 'thiago'];
    toAdd.forEach((element) => storage.save({ name: element }));
    const ixForGet = storage.save({ name: 'santiago' });
    expect(storage.get(ixForGet)).toEqual({ name: 'santiago' });
  });
});
