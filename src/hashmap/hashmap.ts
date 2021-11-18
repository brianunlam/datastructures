import BinarySearchTree from '../tree/BST/binarySearchTree';

interface HashMapElement<T>{
  key: string,
  value?: T
}

const ARRAY_SIZE = 1000;

export default class HashMap<T = any> {
  private memory : BinarySearchTree<HashMapElement<any>>[] = [];

  public length = 0;

  private compareFunction = (a: { key: string },
    b:HashMapElement<any>): number => a.key.localeCompare(b.key);

  set(key: string, value: T): void {
    const placeToAdd = this.hashFunction(key) % ARRAY_SIZE;
    if (!this.memory[placeToAdd]) {
      this.memory[placeToAdd] = new BinarySearchTree<HashMapElement<any>>(this.compareFunction);
    }
    this.memory[placeToAdd].add({ key, value });
    this.length += 1;
  }

  get(key: string): HashMapElement<any> | undefined {
    const positionInArray = this.hashFunction(key) % ARRAY_SIZE;
    const treeInArray = this.memory[positionInArray];
    if (!treeInArray) {
      return undefined;
    }
    const result = treeInArray.search({ key });
    if (!result) {
      return undefined;
    }
    return result;
  }

  private hashFunction(key: string): number {
    let hashValue = 0;
    const stringKey = key.toString();

    for (let index = 0; index < stringKey.length; index += 1) {
      const charCode = stringKey.charCodeAt(index);
      hashValue += charCode;
    }

    return hashValue;
  }
}
