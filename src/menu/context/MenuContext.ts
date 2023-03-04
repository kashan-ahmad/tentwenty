import React from "react";

export type MenuContextInterface = {
  isMenuExpanded?: boolean;
  setIsMenuExpanded: (isMenuExpanded: boolean) => unknown;
};

const MenuContext = React.createContext<MenuContextInterface>(
  {} as MenuContextInterface
);

export default MenuContext;
