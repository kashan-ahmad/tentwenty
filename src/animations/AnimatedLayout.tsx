import gsap from "gsap";
import React from "react";
import { Animator } from "../types";
import { duration, zIndex } from "../config";
import { fadeIn, fadeOut } from "./animations";

type Props = React.PropsWithChildren<React.ComponentPropsWithoutRef<"div">> & {
  animateIn?: Animator;
  animateOut?: Animator;

  shouldAnimateIn?: boolean;
  shouldAnimateOut?: boolean;

  onAnimateIn?: Function;
  onAnimateOut?: Function;
};

export default function AnimatedLayout({
  children,
  animateIn,
  animateOut,
  onAnimateIn,
  onAnimateOut,
  className = "",
  shouldAnimateIn = true,
  shouldAnimateOut = false,
  id = "AnimatedLayout",
  ...rest
}: Props) {
  const layout = `#${id}`;

  // Effect: Hide the layout/Animate-in the underneath content.
  React.useEffect(() => {
    if (!shouldAnimateIn) {
      // Animate-in in an instant.
      gsap.set(layout, { zIndex: -1 });

      return;
    }

    // There's an initial delay before the layout starts hiding and the content starts showing, this is to let the route animation get done with.
    const tl = gsap.timeline({
      delay: duration.DELAY_ANIMATE_IN,
    });

    // Reset the "out" animation.
    gsap.set(layout, {
      opacity: 1,
      zIndex: zIndex.MASK_LAYOUT_SHOWN,
    });

    const callback = () => {
      gsap.set(layout, {
        // So it goes beyond everything.
        zIndex: zIndex.HIDDEN,
      });

      onAnimateIn?.();
    };

    // Note the fade in on animate out, it's because we're fading out our layout which makes everything fade in.
    animateIn ? animateIn(layout, tl, callback) : fadeOut(layout, tl, callback);
  }, [shouldAnimateIn]);

  // Effect: Show the layout/Animate-out the underneath content.
  React.useEffect(() => {
    if (!shouldAnimateOut) return;

    const tl = gsap.timeline();

    // Reset the "in" animation.
    gsap.set(layout, {
      opacity: 0,
      zIndex: zIndex.MASK_LAYOUT_SHOWN,
    });

    // Note the fade in on animate out, it's because we're fading in our mask which makes everything fade out.
    animateOut
      ? animateOut(layout, tl, () => onAnimateOut?.())
      : fadeIn(layout, tl, () => onAnimateOut?.());
  }, [shouldAnimateOut]);

  return (
    <>
      <div
        {...rest}
        id={id}
        aria-hidden="true"
        className={`bg-neutral-900 fixed top-0 right-0 bottom-0 left-0 ${className}`}
      />
      {children}
    </>
  );
}
