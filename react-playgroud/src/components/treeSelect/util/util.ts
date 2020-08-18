import { TreeNode } from "../types";
import { initalState, TreeState } from "../state/types";

interface TreeStateFlat {
  id: number;
  parent?: number;
  value: string;
  label: string;
  isOpen?: boolean;
  isSelected: boolean;
}

export const addIdsAndParents = (tree: TreeNode[]): TreeState[] => {
  const initalState = {
    tree: [...tree],
  } as initalState;

  function add(tree: TreeState[], index = 0, parentId?: number, currentIds: number[] = []): TreeState[] {
    let id = index;
    let idList: number[] = currentIds;
    tree.forEach((item) => {
      item.isSelected = false;
      item.parent = parentId;
      id++;
      while (idList.includes(id)) {
        id++;
      }
      item.id = id;
      idList.push(item.id);
      if (item.children && item.children.length > 0) {
        item.isOpen = false;
        add(item.children, id, item.id, idList);
      }
    });
    return tree;
  }
  let newState = add(initalState.tree);
  return newState;
};

export const selectById = (tree: TreeState[], id: number): TreeState[] => {
  const initalState = {
    tree: [...tree],
  } as initalState;

  function find(tree: TreeState[], id: number): TreeState[] {
    tree.forEach((item) => {
      if (item.id === id) {
        item.isSelected = !item.isSelected;
      }
      if (item.children && item.children.length > 0) {
        find(item.children, id);
      }
    });
    return tree;
  }
  let newState = find(initalState.tree, id);
  return newState;
};

export const openById = (tree: TreeState[], id: number): TreeState[] => {
  const initalState = {
    tree: [...tree],
  } as initalState;

  function find(tree: TreeState[], id: number): TreeState[] {
    tree.forEach((item) => {
      if (item.id === id) {
        item.isOpen = !item.isOpen;
      }
      if (item.children && item.children.length > 0) {
        find(item.children, id);
      }
    });
    return tree;
  }
  let newState = find(initalState.tree, id);
  return newState;
};

export const flatten = (tree: TreeState[]): TreeStateFlat[] => {
  const initalState = {
    tree: [...tree],
  } as initalState;
  let flatArray: TreeStateFlat[] = [];

  function flatten(tree: TreeState[], flatTree: TreeStateFlat[]): TreeStateFlat[] {
    tree.forEach((item) => {
      let itemCopy = { ...item };
      itemCopy.children && item.children.length > 0 && delete itemCopy.children;
      delete itemCopy.handleSelect;
      flatArray.push(itemCopy);
      if (item.children && item.children.length > 0) {
        flatten(item.children, flatTree);
      }
    });
    return flatTree;
  }

  flatArray = flatten(initalState.tree, flatArray);

  return flatArray;
};
