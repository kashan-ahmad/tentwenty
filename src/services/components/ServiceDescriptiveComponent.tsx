import React from "react";
import ServiceComponent, { ServiceComponentProps } from "./ServiceComponent";

export default function ServiceDescriptiveComponent({
  client,
  hasApp,
  hasWebsite,
  ...props
}: ServiceComponentProps) {
  return (
    <ServiceComponent {...props}>
      {client && (
        <div
          aria-label="Services Provided"
          className="2xl:order-1 uppercase text-xs tracking-widest opacity-0 group-hover:opacity-100 group-focus:opacity-100 transition-[transform,opacity] duration-500 2xl:translate-y-14 2xl:group-hover:translate-y-0 2xl:group-focus:translate-y-0  2xl:duration-300 2xl:delay-200 2xl:text-sm"
        >
          {hasApp && "App"}
          {hasApp && hasWebsite && " & "}
          {hasWebsite && "Website "}
          for {client}
        </div>
      )}
    </ServiceComponent>
  );
}
