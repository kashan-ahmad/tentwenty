import React from "react";

export default function Circle(props: React.ComponentPropsWithoutRef<"svg">) {
  return (
    <svg
      {...props}
      width="242"
      height="241"
      fill="none"
      viewBox="0 0 242 241"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M120.811 240.806C187.308 240.806 241.214 186.9 241.214 120.403C241.214 53.9063 187.308 -6.10352e-05 120.811 -6.10352e-05C54.3143 -6.10352e-05 0.407959 53.9063 0.407959 120.403C0.407959 186.9 54.3143 240.806 120.811 240.806Z"
        fill="url(#paint0_linear_9_17)"
      />
      <defs>
        <linearGradient
          id="paint0_linear_9_17"
          x1="0.408439"
          y1="120.399"
          x2="241.22"
          y2="120.399"
          gradientUnits="userSpaceOnUse"
        >
          <stop stopColor="#E12179" />
          <stop offset="1" stopColor="#311996" />
        </linearGradient>
      </defs>
    </svg>
  );
}
