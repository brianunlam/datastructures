import Nodee from '../list/node';
import Storage from './storage';

describe('Test Storage', () => {
  let storage: Storage<String>;
  beforeEach(() => {
    storage = new Storage<String>();
  });
  it('should add in the storage', () => {
    const saved = storage.save(new Nodee('santiago'));
    expect(storage.get(saved)).toEqual({ next: null, content: 'santiago' });
  });

  it('should remove from storage', () => {
    storage.save(new Nodee('marcos'));
    storage.save(new Nodee('thiago'));
    const ixForDelete = storage.save(new Nodee('santiago'));
    expect(storage.delete(ixForDelete)).toEqual({ next: null, content: 'santiago' });
  });

  it('should Get from storage', () => {
    storage.save(new Nodee('marcos'));
    storage.save(new Nodee('thiago'));
    const ixForGet = storage.save(new Nodee('santiago'));
    expect(storage.get(ixForGet)).toEqual({ next: null, content: 'santiago' });
  });
});
