export default class TreeNode<T> {
  public previous:number | null = null;

  constructor(public content: T) {
    this.previous = null;
  }
}
