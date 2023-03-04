import React from "react";
import { zIndex } from "../../config";
import { Link } from "react-router-dom";
import MenuContext from "../context/MenuContext";
import MenuBurgerComponent from "./MenuBurgerComponent";

export default function MenuHeaderComponent() {
  const { isMenuExpanded } = React.useContext(MenuContext);

  const logoSrc = isMenuExpanded
    ? "/images/logo-white.png"
    : "/images/logo-black.png";

  return (
    <header
      style={{
        zIndex: zIndex.MENU_HEADER_SHOWN,
      }}
      data-is-expanded={isMenuExpanded}
      className="fixed w-screen top-0 left-0 p-8 flex items-center justify-between"
    >
      <Link to="/" id="MenuLogo" className="w-28">
        <img src={logoSrc} alt="" className="w-full" />
      </Link>
      <MenuBurgerComponent />
    </header>
  );
}
