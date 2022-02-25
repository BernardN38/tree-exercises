/** TreeNode: node for a general tree. */

class TreeNode {
  constructor(val, children = []) {
    this.val = val;
    this.children = children;
  }
}

class Tree {
  constructor(root = null) {
    this.root = root;
  }

  /** sumValues(): add up all of the values in the tree. */

  sumValues() {
    let stack = [this.root];
    let current = null;
    let sum = 0;
    while (stack.length) {
      current = stack.pop();
      if (current) {
        sum += current.val;
        stack.push(...current.children);
      }
    }
    return sum;
  }

  /** countEvens(): count all of the nodes in the tree with even values. */

  countEvens() {
    let stack = [this.root];
    let current = null;
    let count = 0;
    while (stack.length) {
      current = stack.pop();
      if (current){
      if (current.val%2 == 0){
        count++;
      }
      if (current) {
        stack.push(...current.children);
      }}
    }
    return count;
  }

  /** numGreater(lowerBound): return a count of the number of nodes
   * whose value is greater than lowerBound. */

  numGreater(lowerBound) {}
}

module.exports = { Tree, TreeNode };
