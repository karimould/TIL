import React, { FC } from "react";
import "./main.scss";
import { TreeState } from "./state/types";

interface TreeNodePorps {
  label: string;
  id: number;
  parentId?: number;
  isOpen?: boolean;
  isSelected: boolean;
  open: (id: number) => void;
  select: (id: number) => void;
  children: TreeState[];
}

export const TreeNode: FC<TreeNodePorps> = ({ label, id, open, isOpen, select, isSelected, children }: TreeNodePorps) => {
  return (
    <div className="node">
      <div onClick={() => open(id)} className="open">
        {children && (isOpen ? "🔼" : "🔽")}
      </div>
      <div className="label" onClick={() => select(id)}>
        {label} {isSelected && "✅"}
      </div>
    </div>
  );
};
