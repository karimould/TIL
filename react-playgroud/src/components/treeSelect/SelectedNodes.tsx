import React, { FC, useMemo } from "react";
import "./main.scss";
import { useTreeContext } from "./state";
import { flatten } from "./util/util";

export const SelectedNodes: FC = () => {
  const { state } = useTreeContext();
  const flattState = useMemo(() => flatten(state).filter((item) => item.isSelected), [state]);

  return (
    <div className="selected-nodes-wrapper">
      <h3>Selected:</h3>
      <div className="selected-nodes">
        {flattState.map((node, index) => (
          <p key={index} className="selected-node">
            {index === flattState.length - 1 ? node.label : node.label + ","}
          </p>
        ))}
      </div>
    </div>
  );
};
