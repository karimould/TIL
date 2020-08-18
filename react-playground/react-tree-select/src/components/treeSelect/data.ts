import { ITree } from "./types";

export const data: ITree = {
  tree: [
    {
      label: "a",
      value: "a",
      children: [
        { label: "a-a", value: "a-a" },
        { label: "a-b", value: "a-b", children: [{ label: "a-b-a", value: "a-b-b" }] },
      ],
    },
    {
      label: "b",
      value: "b",
      children: [{ label: "b-a", value: "b-a" }],
    },
    {
      label: "c",
      value: "c",
    },
  ],
};
