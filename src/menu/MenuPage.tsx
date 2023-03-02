import React from "react";
import { gsap } from "gsap";
import { fadeIn, fadeOut } from "../animations/animations";
import MenuSVGComponent from "./components/MenuSVGComponent";
import MenuItemsComponent from "./components/MenuItemsComponent";

type Props = {};

export default function MenuPage({}: Props) {
  React.useEffect(() => {
    const tl = gsap.timeline();

    // Hide the stroke of the menu.
    gsap.set("#MenuSVG #stroke", {
      opacity: 0,
    });

    fadeIn("#MenuSVG", tl, () => {
      // Fade in the stroke.
      fadeIn("#MenuSVG #stroke", tl, () => {
        // Fade out the stroke.
        fadeOut("#MenuSVG #stroke", tl);
      });
    });
  }, []);

  return (
    <div className="relative">
      <MenuSVGComponent
        id="MenuSVG"
        className="opacity-0 -z-10 w-screen scale-75 fixed top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2"
      />
      <MenuItemsComponent />
    </div>
  );
}
