export default class Nodee<T> {
  public content:T;

  public next: any = null;

  constructor(content: T) {
    this.content = content;
    this.next = null;
  }
}
