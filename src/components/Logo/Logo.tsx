import React from "react";

export type LogoProps = {
  textClassName?: string;
} & React.ComponentPropsWithoutRef<"div">;

export default function Logo({
  children,
  textClassName = "text-white",
  ...props
}: LogoProps) {
  return (
    <div {...props}>
      <div className="relative inline-block">
        <span className={`text-8xl ${textClassName}`}>tentwenty</span>
        {children}
      </div>
    </div>
  );
}
