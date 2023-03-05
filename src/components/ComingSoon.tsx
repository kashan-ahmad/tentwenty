import React from "react";

type Props = {};

export default function ComingSoon({}: Props) {
  return (
    <div className="grid place-items-center fixed w-screen h-screen top-0 left-0">
      <div className="flex justify-center items-center flex-col gap-8 p-8">
        <img alt="" src="/ahhh.gif" loading="lazy" width="300px" />
        <div className="text-2xl">Coming Soon</div>
        <button
          onClick={() => window.history.back()}
          className="py-4 px-8 text-white bg-blue-500 hover:bg-blue-600 focus:bg-blue-600"
        >
          Go Back 😆
        </button>
      </div>
    </div>
  );
}
