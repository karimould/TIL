import { Reducer } from "react";

export type TreeState = {
  id: number;
  parent?: number;
  value: string;
  label: string;
  children: TreeState[];
  isOpen?: boolean;
  isSelected: boolean;
  handleSelect: (id: number) => void;
};

export type initalState = {
  tree: TreeState[];
};

interface ToggleNodeAction {
  type: "OPEN_NODE" | "SELECT_NODE";
  payload: TreeState[];
}

type TreeSelectActionTypes = ToggleNodeAction;

export type TreeSelectReducer = Reducer<TreeState[], TreeSelectActionTypes>;
