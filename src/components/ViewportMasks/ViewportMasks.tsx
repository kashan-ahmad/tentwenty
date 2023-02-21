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
        className={`fixed top-0 right-0 bottom-0 left-0 bg-neutral-900 z-10 scale-y-0 origin-bottom grid place-items-center ${className}`}
      >
        <div
          hidden
          id="ViewportMaskNotice"
          className="flex justify-center items-center flex-col gap-8 p-8"
        >
          <img alt="" src="/ahhh.gif" loading="lazy" width="300px" />
          <div id="ViewportMaskNoticeText" className="text-2xl"></div>
          <button
            onClick={() => window.location.reload()}
            className="py-4 px-8 bg-blue-500 hover:bg-blue-600 focus:bg-blue-600"
          >
            Start Over 😆
          </button>
        </div>
      </div>
    </div>
  );
}
