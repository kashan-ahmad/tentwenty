import React from "react";

type Props = { message: string };

export default function Error({ message }: Props) {
  return (
    <div className="grid place-items-center fixed w-screen h-screen top-0 left-0">
      <div className="flex justify-center items-center flex-col gap-8 p-8">
        <img alt="" src="/ahhh.gif" loading="lazy" width="300px" />
        <div className="text-2xl">{message}</div>
        <button
          onClick={() => window.location.reload()}
          className="py-4 px-8 text-white bg-red-500 hover:bg-red-600 focus:bg-blue-600"
        >
          Reload
        </button>
      </div>
    </div>
  );
}
