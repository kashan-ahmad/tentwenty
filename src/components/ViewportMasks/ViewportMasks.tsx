import React from "react";

export default function ViewportMasks(
  props: React.ComponentPropsWithoutRef<"div">
) {
  return (
    <div {...props} aria-hidden="true">
      <div className="ViewportMask fixed top-0 right-0 bottom-0 left-0 bg-neutral-800 z-10 scale-y-0 origin-bottom"></div>
      <div
        id="ViewportMaskInterstitial"
        className="fixed top-0 right-0 bottom-0 left-0 bg-blue-600 z-10 scale-x-0 origin-right"
      ></div>
      <div className="ViewportMask fixed top-0 right-0 bottom-0 left-0 bg-neutral-900 z-10 scale-y-0 origin-bottom"></div>
    </div>
  );
}
