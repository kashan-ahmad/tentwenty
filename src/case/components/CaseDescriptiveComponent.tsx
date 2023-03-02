import React from "react";
import CaseComponent, { CaseComponentProps } from "./CaseComponent";

export default function CaseDescriptiveComponent({
  client,
  hasApp,
  hasWebsite,
  ...props
}: CaseComponentProps) {
  return (
    <CaseComponent {...props}>
      {client && (
        <div
          aria-label="Cases solved"
          className="2xl:order-1 uppercase text-xs tracking-widest opacity-0 group-hover:opacity-100 group-focus:opacity-100 transition-[transform,opacity] duration-500 2xl:translate-y-14 2xl:group-hover:translate-y-0 2xl:group-focus:translate-y-0  2xl:duration-300 2xl:delay-200 2xl:text-sm"
        >
          {hasApp && "App"}
          {hasApp && hasWebsite && " & "}
          {hasWebsite && "Website "}
          for {client}
        </div>
      )}
    </CaseComponent>
  );
}
