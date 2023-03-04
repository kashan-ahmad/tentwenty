import gsap from "gsap";
import { duration, zIndex } from "../config";

export default function useMenu() {
  function animateMenuIn({ onComplete }: { onComplete?: Function }) {
    const tl = gsap.timeline();

    // Hide the menu page and set it's z-index.
    tl.set("#MenuPage", {
      opacity: 0,
      zIndex: zIndex.MENU_SHOWN,
    });

    // Hide the menu SVG and it's stroke.
    tl.set("#MenuSVG, #MenuSVG #stroke", {
      opacity: 0,
    });

    // Hide the list items initially.
    tl.set("#MenuItemsList li", {
      y: 100,
      opacity: 0,
    });

    // Hide the logo and the burger.
    tl.to("#MenuLogo, #MenuBurger", {
      opacity: 0,
    })
      // Animate the page in.
      .to("#MenuPage", {
        opacity: 1,
        duration: duration.FADE_IN,
      })
      // Animate the menu SVG in.
      .to("#MenuSVG", {
        opacity: 1,
        duration: duration.FADE_IN,
      })
      // Then, animate the menu items in.
      .to("#MenuItemsList li", {
        y: 0,
        opacity: 1,
        stagger: 0.025,
        onComplete: () => onComplete?.(),
      })
      // Show the logo and the burger.
      .to("#MenuLogo, #MenuBurger", {
        opacity: 1,
      });
  }

  function animateMenuOut({ onComplete }: { onComplete?: Function }) {
    const tl = gsap.timeline();

    // Hide the logo and the burger.
    tl.to("#MenuLogo, #MenuBurger", {
      opacity: 0,
    })
      // Animate the list items out.
      .to(
        "#MenuItemsList li",
        {
          y: 100,
          opacity: 0,
          reversed: true,
          stagger: 0.05,
        },
        ">-.5"
      )
      // Animate the SVG out.
      // .to(
      //   "#MenuSVG",
      //   {
      //     opacity: 0,
      //     duration: duration.FADE_IN,
      //   },
      //   ">"
      // )
      // Animate the page out.
      .to(
        "#MenuPage",
        {
          opacity: 0,
          duration: duration.FADE_IN,
        },
        ">"
      )
      // Set the page's z-index so it goes beyond everything.
      .set(
        "#MenuPage",
        {
          zIndex: zIndex.HIDDEN,
          onComplete: () => onComplete?.(),
        },
        ">"
      )
      // Show the logo and the burger.
      .to(
        "#MenuLogo, #MenuBurger",
        {
          opacity: 1,
        },
        ">"
      );
  }

  return { animateMenuIn, animateMenuOut };
}
