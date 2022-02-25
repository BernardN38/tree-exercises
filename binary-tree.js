/** BinaryTreeNode: node for a general tree. */

class BinaryTreeNode {
  constructor(val, left = null, right = null) {
    this.val = val;
    this.left = left;
    this.right = right;
  }
}

class BinaryTree {
  constructor(root = null) {
    this.root = root;
  }

  /** minDepth(): return the minimum depth of the tree -- that is,
   * the length of the shortest path from the root to a leaf. */

  minDepth(root = this.root) {
    if (root == null) {
      return 0;
    }

    let minLeft = 1 + this.minDepth(root.left);
    let minRight = 1 + this.minDepth(root.right);
    return Math.min(minLeft, minRight);
  }

  /** maxDepth(): return the maximum depth of the tree -- that is,
   * the length of the longest path from the root to a leaf. */

  maxDepth(root = this.root) {
    if (root == null) {
      return 0;
    }

    let minLeft = 1 + this.maxDepth(root.left);
    let minRight = 1 + this.maxDepth(root.right);
    return Math.max(minLeft, minRight);
  }

  /** maxSum(): return the maximum sum you can obtain by traveling along a path in the tree.
   * The path doesn't need to start at the root, but you can't visit a node more than once. */

  maxSum(root = this.root) {
    if (!root) {
      return 0;
    }
    let res = [root.val];
    function dfs(dfsRoot) {
      if (dfsRoot == null) {
        return 0;
      }
      let maxLeft = dfs(dfsRoot.left);
      let maxRight = dfs(dfsRoot.right);
      maxLeft = Math.max(maxLeft, 0);
      maxRight = Math.max(maxRight, 0);
      res[0] = Math.max(res[0], dfsRoot.val + maxLeft + maxRight);
      return dfsRoot.val + Math.max(maxLeft, maxRight);
    }
    dfs(root);
    return res[0];
  }

  /** nextLarger(lowerBound): return the smallest value in the tree
   * which is larger than lowerBound. Return null if no such value exists. */

  nextLarger(lowerBound, root = this.root) {
    
  }
  // nextLarger(lowerBound, root = this.root) {
  //   if (root === null) {
  //     return null;
  //   }

  //   let stack = [root];
  //   let nums = [];
  //   let current = null;
  //   while (stack.length) {
  //     current = stack.pop();
  //     if (current.left) {
  //       stack.push(current.left);
  //     }
  //     if (current.right) {
  //       stack.push(current.right);
  //     }
  //     nums.push(current.val);
  //   }
  //   nums.push(lowerBound);
  //   nums.sort(function (a, b) {
  //     return b - a;
  //   });
  //   let idx = nums.findIndex((el) => el === lowerBound);
  //   if (idx === 0) {
  //     return null;
  //   }
  //   return nums[idx - 1];
  // }
  /** Further study!
   * areCousins(node1, node2): determine whether two nodes are cousins
   * (i.e. are at the same level but have different parents. ) */

  areCousins(node1, node2) {}

  /** Further study!
   * serialize(tree): serialize the BinaryTree object tree into a string. */

  static serialize() {}

  /** Further study!
   * deserialize(stringTree): deserialize stringTree into a BinaryTree object. */

  static deserialize() {}

  /** Further study!
   * lowestCommonAncestor(node1, node2): find the lowest common ancestor
   * of two nodes in a binary tree. */

  lowestCommonAncestor(node1, node2) {}
}

module.exports = { BinaryTree, BinaryTreeNode };
