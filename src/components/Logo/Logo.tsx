import React from "react";

export type LogoProps = {
  text?: string;
  textClassName?: string;
} & React.ComponentPropsWithoutRef<"div">;

export default function Logo({
  children,
  text = "tentwenty",
  textClassName = "text-white",
  ...props
}: LogoProps) {
  return (
    <div {...props}>
      <div className="relative inline-block">
        <span className={`text-8xl ${textClassName}`}>{text}</span>
        {children}
      </div>
    </div>
  );
}
