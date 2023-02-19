import React from "react";

export default function Star(props: React.ComponentPropsWithoutRef<"svg">) {
  return (
    <svg
      {...props}
      width="108"
      height="104"
      viewBox="0 0 108 104"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M14.9161 90.5949L31.0506 60.8103L0.022583 47.159L7.46938 26.0615L39.7385 33.5077L43.4618 0H65.802L69.5253 33.5077L101.794 26.0615L108 47.159L78.2131 60.8103L94.3477 90.5949L76.972 103.005L54.6319 78.1846L31.0506 103.005L14.9161 90.5949Z"
        fill="currentColor"
      />
    </svg>
  );
}
