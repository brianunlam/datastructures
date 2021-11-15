export default class Nodee<T> {
  public content:T;

  public left: number | null = null;

  public right: number | null = null;

  constructor(content: T) {
    this.content = content;
  }
}
