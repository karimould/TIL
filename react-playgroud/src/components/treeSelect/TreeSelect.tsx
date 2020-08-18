import React, { FC, useReducer } from "react";
import { ITree } from "./types";
import "./main.scss";
import { TreeContext, reducer } from "./state";
import { Tree } from "./Tree";
import { SelectedNodes } from "./SelectedNodes";
import { TreeState, TreeSelectReducer } from "./state/types";
import { buildInitialState } from "./state/reducer";
import { selectById, openById } from "./util/util";

export const TreeSelect: FC<ITree> = ({ tree }: ITree) => {
  const [state, dispatch] = useReducer<TreeSelectReducer, TreeState[]>(reducer, tree as TreeState[], buildInitialState);

  // useLayoutEffect(() => {
  //   dispatch({ type: "SET_DATA", payload: tree });
  // }, [tree]);

  const handleSelect = (id: number): void => {
    const newState = selectById(state, id);
    dispatch({ type: "SELECT_NODE", payload: newState });
  };

  const handleOpen = (id: number): void => {
    const newState = openById(state, id);
    dispatch({ type: "OPEN_NODE", payload: newState });
  };

  return (
    <TreeContext.Provider value={{ state, handleSelect, handleOpen }}>
      <div className="tree-select-wrapper">
        <SelectedNodes />
        <Tree tree={state} />
      </div>
    </TreeContext.Provider>
  );
};
