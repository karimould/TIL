import { createContext, useContext } from "react";
import { TreeState } from "./types";

interface TreeContext {
  state: TreeState[];
  handleSelect: (id: number) => void;
  handleOpen: (id: number) => void;
}

const TreeContext = createContext<TreeContext>({ state: [], handleSelect: () => {}, handleOpen: () => {} });

const useTreeContext = () => useContext<TreeContext>(TreeContext);

export { TreeContext, useTreeContext };
