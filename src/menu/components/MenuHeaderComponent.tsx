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
    <>
      <Link
        to="/"
        id="MenuLogo"
        className="w-28 fixed top-8 left-8"
        style={{
          zIndex: zIndex.MENU_HEADER_SHOWN,
        }}
      >
        <img src={logoSrc} alt="" className="w-full" />
      </Link>
      <MenuBurgerComponent />
    </>
  );
}
