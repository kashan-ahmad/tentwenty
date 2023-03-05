import React from "react";
import { zIndex } from "../../config";

export default function ViewportMasks({
  className = "ViewportMask",
  id = "ViewportMaskInterstitial",
  ...props
}: React.ComponentPropsWithoutRef<"div">) {
  return (
    <div {...props} aria-hidden="true" className="absolute">
      <div
        style={{
          zIndex: zIndex.MASK_VIEWPORT_SHOWN,
        }}
        className={`fixed top-0 right-0 bottom-0 left-0 bg-neutral-800 scale-y-0 origin-bottom ${className}`}
      ></div>
      <div
        style={{
          zIndex: zIndex.MASK_VIEWPORT_SHOWN + 1,
        }}
        id={id}
        className={`fixed top-0 right-0 bottom-0 left-0 scale-x-0 origin-right`}
      ></div>
      <div
        style={{
          zIndex: zIndex.MASK_VIEWPORT_SHOWN + 2,
        }}
        className={`fixed top-0 right-0 bottom-0 left-0 bg-neutral-900 scale-y-0 origin-bottom grid place-items-center ${className}`}
      >
        <div
          id="ViewportMaskNotice"
          className="flex hidden justify-center items-center flex-col gap-8 p-8"
        >
          <img alt="" src="/ahhh.gif" loading="lazy" width="300px" />
          <div
            id="ViewportMaskNoticeText"
            className="text-2xl text-white"
          ></div>
          <button
            onClick={() => window.location.reload()}
            className="py-4 px-8 bg-blue-500 hover:bg-blue-600 focus:bg-blue-600 text-white"
          >
            Start Over 😆
          </button>
        </div>
      </div>
    </div>
  );
}
