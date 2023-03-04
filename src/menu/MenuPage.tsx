import React from "react";
import MenuContext from "./context/MenuContext";
import MenuSVGComponent from "./components/MenuSVGComponent";
import MenuItemsComponent from "./components/MenuItemsComponent";
import MenuHeaderComponent from "./components/MenuHeaderComponent";
import { zIndex } from "../config";

type Props = {};

export default function MenuPage({}: Props) {
  const [isMenuExpanded, setIsMenuExpanded] = React.useState(false);

  return (
    <MenuContext.Provider value={{ isMenuExpanded, setIsMenuExpanded }}>
      <MenuHeaderComponent />
      <div
        id="MenuPage"
        style={{
          zIndex: zIndex.HIDDEN,
        }}
        className="opacity-0 fixed w-screen h-screen top-0 left-0 bg-black"
      >
        <MenuSVGComponent
          id="MenuSVG"
          className="opacity-0 -z-10 w-screen scale-75 fixed top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2"
        />
        <MenuItemsComponent />
      </div>
    </MenuContext.Provider>
  );
}
