import { ReactNode } from "react";

export type TUserpaths = {
  name: string;
  path?: string;
  element?: ReactNode;
  children?: TUserpaths[];
};
export type TRoute = {
  path: string;
  element: ReactNode;
};

export type TSidebar = {
  key: string;
  label: ReactNode;
  children?: TSidebar[];
};
