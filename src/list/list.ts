import Storage from '../utils/storage';
import Nodee from './node';

interface SearchFunction<T> {
  (content: T): boolean;
}

export default class List<T> {
  private memory = new Storage<Nodee<T>>();

  private firstNode: number | null = null;

  private lastNode: number | null = null;

  public length = 0;

  public addFirst(element:T): void {
    const newNode = new Nodee(element);
    newNode.next = this.firstNode;
    const storageIxNewNode = this.memory.save(newNode);
    this.firstNode = storageIxNewNode;
    this.lastNode = storageIxNewNode;
    this.length += 1;
  }

  public add(element:T, searchFunction?: SearchFunction<T>): boolean {
    if (!this.firstNode) {
      this.addFirst(element);
      return true;
    }
    if (searchFunction) {
      let node = this.memory.get(this.firstNode);
      while (node) {
        const { content } = node;
        if (searchFunction(content)) {
          const newNode = new Nodee(element);
          newNode.next = node.next;
          const storageIxNewNode = this.memory.save(newNode);
          node.next = storageIxNewNode;
          this.length += 1;
          return true;
        }
        node = this.memory.get(node.next);
      }
      return false;
    }
    return this.addLast(element);
  }

  public addLast(element: T): boolean {
    if (!this.lastNode) {
      this.addFirst(element);
      return true;
    }
    const newNode = new Nodee(element);
    const storageIxNewNode = this.memory.save(newNode);
    const lastElement = this.memory.get(this.lastNode);
    if (lastElement) {
      lastElement.next = storageIxNewNode;
    }
    this.lastNode = storageIxNewNode;
    this.length += 1;
    return true;
  }

  public removeFirst():T | null {
    if (!this.firstNode) {
      return null;
    }
    const { content, next } = this.memory.get(this.firstNode);
    this.memory.delete(this.firstNode);
    this.firstNode = next;
    this.length -= 1;
    return content;
  }

  public remove(searchFunction: SearchFunction<T>): T | undefined {
    if (!this.firstNode) {
      return undefined;
    }
    let prevNode = this.memory.get(this.firstNode);
    let node = this.memory.get(this.firstNode);
    while (node) {
      const { content, next } = node;
      if (searchFunction(content)) {
        prevNode.next = next;
        this.memory.delete(prevNode.next);
        return content;
      }
      prevNode = node;
      node = this.memory.get(node.next);
    }
    return undefined;
  }

  public removeLast(): T | null {
    if (!this.firstNode) {
      return null;
    }
    let prevNode = this.memory.get(this.firstNode);
    let node = this.memory.get(this.firstNode);
    while (node) {
      const { next } = node;
      if (next === this.lastNode) {
        const { content } = this.memory.get(next);
        this.lastNode = prevNode.next;
        node.next = null;
        this.memory.delete(next);
        this.length -= 1;
        if (this.length === 1) {
          this.lastNode = this.firstNode;
        }
        return content;
      }
      prevNode = this.memory.get(node.next);
      node = this.memory.get(next);
    }
    return null;
  }

  public find(searchFunction: SearchFunction<T>, globalSearch = false): T | T[] {
    if (!this.firstNode) {
      return [];
    }
    const matchContent = [];
    let node: Nodee<T> = this.memory.get(this.firstNode);
    while (node) {
      const { content, next } = node;
      if (searchFunction(content)) {
        if (globalSearch) {
          matchContent.push(content);
        } else {
          return content;
        }
      }
      node = this.memory.get(next);
    }
    return matchContent;
  }

  public forEach(callback: (content: T) => void): void {
    if (this.firstNode) {
      let node: Nodee<T> = this.memory.get(this.firstNode);
      while (node) {
        callback(node.content);
        node = this.memory.get(node.next);
      }
    }
  }

  public map(callback: Function):List<T> {
    const mapList = new List<T>();
    if (!this.firstNode) {
      return mapList;
    }
    let node: Nodee<T> = this.memory.get(this.firstNode);
    let mappedElement: T;
    while (node) {
      if (node.next !== null) {
        mappedElement = callback(node.content);
        mapList.add(mappedElement);
      }
      node = this.memory.get(node.next);
    }
    return mapList;
  }

  public filter(filterFunction: SearchFunction<T>): List <T> {
    const filterList = new List<T>();
    if (!this.firstNode) {
      return new List<T>();
    }
    let node: Nodee<T> = this.memory.get(this.firstNode);
    while (node) {
      if (filterFunction(node.content)) {
        filterList.add(node.content);
      }
      node = this.memory.get(node.next);
    }
    return filterList;
  }

  public reducer(init: T, callback: (acc: T, currentVal: T) => T):T {
    let acc: T = init;
    if (this.firstNode) {
      let node: Nodee<T> = this.memory.get(this.firstNode);
      while (node) {
        acc = callback(acc, node.content);
        node = this.memory.get(node.next);
      }
    }
    return acc;
  }

  public some(searchFunction: SearchFunction<T>):boolean {
    if (!this.firstNode) {
      return false;
    }
    let node: Nodee<T> = this.memory.get(this.firstNode);
    while (node) {
      const { content, next } = node;
      if (searchFunction(content)) {
        return true;
      }
      node = this.memory.get(next);
    }
    return false;
  }

  public every(searchFunction: SearchFunction<T>):boolean {
    if (!this.firstNode) {
      return false;
    }
    let node: Nodee<T> = this.memory.get(this.firstNode);
    let timesAppears = 0;
    while (node) {
      const { content, next } = node;
      if (searchFunction(content)) {
        timesAppears += 1;
      }
      node = this.memory.get(next);
    }
    return timesAppears === this.length;
  }

  public isEmpty(): boolean {
    return this.length === 0;
  }
}
