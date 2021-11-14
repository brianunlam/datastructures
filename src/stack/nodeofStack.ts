export default class TreeNode<T> {
  public content:T;

  public previus:number | null = null;

  constructor(content: T) {
    this.content = content;
    this.previus = null;
  }
}
