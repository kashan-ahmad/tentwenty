import gsap from "gsap";
import React from "react";

type Props = React.PropsWithChildren<React.ComponentPropsWithoutRef<"div">> & {
  animationProps?: gsap.TweenVars;
};

export default function AnimatedLayout({
  animationProps,
  id = "AnimatedLayout",
  className = "",
  children,
  ...rest
}: Props) {
  React.useEffect(() => {
    const element = `#${id}`;

    gsap
      .timeline({
        delay: 1.75,
      })
      .to(
        element,
        animationProps || {
          opacity: 0,
          duration: 0.5,
        }
      )
      .set(element, {
        zIndex: -1,
      });
  }, []);

  return (
    <>
      {children}
      <div
        {...rest}
        id={id}
        aria-hidden="true"
        className={`bg-neutral-900 fixed top-0 right-0 bottom-0 left-0 ${className}`}
      />
    </>
  );
}
