import React from "react";
import { zIndex } from "../../config";
import LogoDark from "../../components/Logo/LogoDark";
import LogoDefault from "../../components/Logo/LogoDefault";
import { Link } from "react-router-dom";

export type MenuHeaderComponentProps = {
  isMenuExpanded?: boolean;
};

export default function MenuHeaderComponent({
  isMenuExpanded,
}: MenuHeaderComponentProps) {
  return (
    <header
      style={{
        zIndex: zIndex.MENU_SHOWN,
      }}
      className="fixed w-screen top-0 left-0 p-8 flex items-center justify-between"
    >
      <Link to="/">{isMenuExpanded ? <LogoDark /> : <LogoDefault />}</Link>
    </header>
  );
}
