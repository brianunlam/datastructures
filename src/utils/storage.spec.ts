import Storage from './storage';

describe('Storage', () => {
  let storage: Storage<String>;
  beforeEach(() => {
    storage = new Storage<String>();
  });
  it('should add an element in the storage', () => {
    const saved = storage.save('santiago');
    expect(storage.get(saved)).toEqual('santiago');
  });

  it('should remove from storage', () => {
    const toAdd = ['marcos', 'thiago'];
    toAdd.forEach((element) => storage.save(element));
    const ixForDelete = storage.save('santiago');
    expect(storage.delete(ixForDelete)).toEqual('santiago');
  });

  it('should Get from storage', () => {
    const toAdd = ['marcos', 'thiago'];
    toAdd.forEach((element) => storage.save(element));
    const ixForGet = storage.save('santiago');
    expect(storage.get(ixForGet)).toEqual('santiago');
  });
});
