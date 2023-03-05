import React from "react";
import { zIndex } from "../../config";
import MenuContext from "../context/MenuContext";
import useMenu from "../useMenu";

export default function MenuBurgerComponent() {
  const { animateMenuIn, animateMenuOut } = useMenu();
  const { isMenuExpanded, setIsMenuExpanded } = React.useContext(MenuContext);

  /**
   * Responsible for disabling the hamburger button.
   * This is done so that recurring clicks can be prevented while an animating is on the way.
   */
  // const [isAnimating, setIsAnimating] = React.useState(false);

  const commonClassName = isMenuExpanded ? "bg-white" : "bg-black";

  const upperSliceClassName = isMenuExpanded
    ? "rotate-45 translate-y-[.625rem]"
    : "group-hover:translate-y-1 group-focus:translate-y-1";

  const pattyClassName = isMenuExpanded
    ? "opacity-0"
    : "group-hover:translate-x-8 group-hover:opacity-0 group-focus:translate-x-8 group-focus:opacity-0";

  const lowerSliceClassName = isMenuExpanded
    ? "-rotate-45 -translate-y-[.625rem]"
    : "group-hover:-translate-y-1 group-focus:-translate-y-1";

  function onClickMenuButton(e: React.MouseEvent<HTMLButtonElement>) {
    const onComplete = () => setIsMenuExpanded(!isMenuExpanded);

    isMenuExpanded
      ? animateMenuOut({ onComplete })
      : animateMenuIn({ onComplete });
  }

  return (
    <>
      <span className="sr-only">
        {isMenuExpanded ? "Close menu" : "Open menu"}
      </span>
      <button
        id="MenuBurger"
        aria-hidden="true"
        className="space-y-2 group fixed top-8 right-8"
        onClick={onClickMenuButton}
        style={{
          zIndex: zIndex.MENU_HEADER_SHOWN,
        }}
      >
        <span
          className={`block transition-all duration-200 w-8 h-[2px] shadow ${commonClassName} ${upperSliceClassName}`}
        ></span>
        <span
          className={`block transition-all duration-200 w-6 h-[2px] shadow ${commonClassName} ${pattyClassName}`}
        ></span>
        <span
          className={`block transition-all duration-200 w-8 h-[2px] shadow ${commonClassName} ${lowerSliceClassName}`}
        ></span>
      </button>
    </>
  );
}
