import React, { FC } from "react";
import "./main.scss";
import { TreeNode } from "./Node";
import { TreeState } from "./state/types";
import { useTreeContext } from "./state";

interface TreeProps {
  indent?: number;
  tree: TreeState[];
}

export const Tree: FC<TreeProps> = ({ tree, indent }: TreeProps) => {
  const { handleSelect, handleOpen } = useTreeContext();

  return (
    <div className="node-wrapper" style={{ paddingLeft: indent ? (indent + 1) * 10 : 0 }}>
      {tree.map((node, index) => (
        <div key={index}>
          <TreeNode isOpen={node.isOpen} isSelected={node.isSelected} label={node.label} id={node.id} open={handleOpen} select={handleSelect} children={node.children} />
          {node.children && node.isOpen && <Tree tree={node.children} indent={index + 1} />}
        </div>
      ))}
    </div>
  );
};
