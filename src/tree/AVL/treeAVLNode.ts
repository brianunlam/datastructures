export default class TreeAVLNode<T> {
  public content:T;

  public left: number | null = null;

  public right: number | null = null;

  public parent: number | null = null;

  public bf : number = 0;

  constructor(content: T) {
    this.content = content;
  }
}
