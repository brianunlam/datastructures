# Data structures: **Trees** 

---

## Definition.

A tree is a non-linear structure in which each node can point to one or more nodes.

A recursive definition is also usually given: a tree is a structure composed of a data and several trees.

*For example a tree is like a table of content in book.*

### Concepts.

- **Child node**: any of the nodes pointed to by one of the nodes in the tree.

- **Parent node**: node that contains a pointer to the current node.

- **Order**: is the potential number of children that each tree element can have.

- **Degree**: is the number of children of the element with more children.

- **Level**: is defined for each element of the tree as the distance to the root, measured in nodes.

- **Height**: is defines for each element of the tree as the distance to the last element of that branch.

---

## Basic operations with trees.

- Add an element or insert it.

- Search an element.

- Remove an element.

- Move through the tree.

- Walk the whole tree.


### Ways to go around it:

Those tours are highly dependent on the type and purpose of the tree, but there are certain tours that we will use frequently. These are those routes that include the entire tree.

There are three ways to traverse an entire tree, and all three are typically implemented using recursion. In all three cases, all branches are always followed from each node one by one.

suppose this is our tree

```
- Root
|-> A
|   |-> D
|   |-> E
|
|-> B
    |-> F
```
Traversing a tree is done recursively.

```
travel(A) {
  if(!A){
    return
  }
  travel(branchR);
  travel(branchL);
}
```
What differentiates the different methods of traversing the tree is not the system of doing so, **but the time we choose to process the value of each node** in relation to the paths of each of the branches.

The three types are:

**Pre-order**
In this type of traversal, the value of the node is processed before traversing the branches:

```
travel(A) {
  if(!A){
    return
  }
  process(item);
  travel(branchA);
  travel(branchB);
}
```
> The returned tour will be Root A D E B F

**In-Order**D A E Root F B
In this type of traversal, the value of the node is processed after traversing the first branch and before traversing the last. This makes more sense in the case of binary trees.

```
travel(A) {
  if(!A){
    return
  }
  travel(branchA);
  process(item);
  travel(branchB);
}
```
> The returned tour will be  D A E Root F B


**Post-order**
In this type of traversal, the value of the node is processed after traversing all branches:

```
travel(A) {
  if(!A){
    return
  }
  travel(branchA);
  travel(branchB);
  process(item);
}
```
> The returned tour will be  D E A F B Root

### 