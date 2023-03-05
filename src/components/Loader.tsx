import React from "react";
import LogoLoader from "./Logo/LogoLoader";

type Props = {};

export default function Loader({}: Props) {
  return (
    <div
      id="Loader"
      className="grid place-items-center fixed w-screen h-screen top-0 left-0"
    >
      <div className="flex justify-center items-center flex-col gap-8 p-8">
        <LogoLoader text="loading" textClassName="text-black" />
      </div>
    </div>
  );
}
