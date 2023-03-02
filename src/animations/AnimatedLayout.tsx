import gsap from "gsap";
import React from "react";
import { Animator } from "../types";
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
  const element = `#${id}`;

  React.useEffect(() => {
    if (!shouldAnimateIn) {
      // Animate-in in an instant.
      gsap.set(element, { zIndex: -1 });

      return;
    }

    const tl = gsap.timeline({
      delay: 1.75,
    });

    const callback = () => {
      console.log("Called");

      // So it goes beyond everyone.
      tl.set(element, {
        zIndex: -100,
      });

      onAnimateIn?.();
    };

    // Note the fade in on animate out, it's because we're fading out our mask which makes everything fade in.
    animateIn
      ? animateIn(element, tl, callback)
      : fadeOut(element, tl, callback);
  }, [shouldAnimateIn]);

  React.useEffect(() => {
    if (!shouldAnimateOut) return;

    const tl = gsap.timeline();

    // Reset the "in" animation.
    tl.set(element, {
      opacity: 0,
    });

    // So it shows above everyone.
    tl.set(element, {
      zIndex: 100,
    });

    // Note the fade in on animate out, it's because we're fading in our mask which makes everything fade out.
    animateOut
      ? animateOut(element, tl, () => onAnimateOut?.())
      : fadeIn(element, tl, () => onAnimateOut?.());
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
