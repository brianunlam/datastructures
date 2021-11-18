export default class TreeNodee<T> {
  public content:T;

  public left: number | null = null;

  public right: number | null = null;

  constructor(content: T) {
    this.content = content;
  }
}
