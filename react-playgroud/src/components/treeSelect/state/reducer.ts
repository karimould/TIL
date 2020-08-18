import { addIdsAndParents } from "../util/util";
import { TreeState, TreeSelectReducer } from "./types";
import { TreeNode } from "../types";

export function buildInitialState(tree: TreeNode[]): TreeState[] {
  const initialState: TreeState[] = addIdsAndParents(tree);

  return initialState;
}

export const reducer: TreeSelectReducer = (state, action): TreeState[] => {
  let newState: TreeState[] = [];
  switch (action.type) {
    case "OPEN_NODE":
      newState = action.payload;
      return [...newState];
    case "SELECT_NODE":
      newState = action.payload;
      return [...newState];
    default:
      return state;
  }
};
