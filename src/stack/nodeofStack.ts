export default class TreeNode<T> {
  public previus:number | null = null;

  constructor(public content: T) {
    this.previus = null;
  }
}
