import React from "react";

export default function ViewportMasks({
  className = "ViewportMask",
  id = "ViewportMaskInterstitial",
  ...props
}: React.ComponentPropsWithoutRef<"div">) {
  return (
    <div {...props} aria-hidden="true" className="absolute">
      <div
        className={`fixed top-0 right-0 bottom-0 left-0 bg-neutral-800 z-10 scale-y-0 origin-bottom ${className}`}
      ></div>
      <div
        id={id}
        className={`fixed top-0 right-0 bottom-0 left-0 z-10 scale-x-0 origin-right`}
      ></div>
      <div
        className={`fixed top-0 right-0 bottom-0 left-0 bg-neutral-900 z-10 scale-y-0 origin-bottom ${className}`}
      ></div>
    </div>
  );
}
