export interface ITree {
  tree: TreeNode[];
}

export interface TreeNode {
  label: string;
  value: string;
  children?: TreeNode[];
}
