import React from "react";
import type { Service } from "../Service";

export type ServiceComponentProps = React.PropsWithChildren<
  Service & {
    index?: number;
  }
>;

export default function ServiceComponent({
  id,
  name,
  slug,
  client,
  hasApp,
  hasWebsite,
  color,
  index,
  children,
}: ServiceComponentProps) {
  return (
    <article
      data-bg-color={color}
      className="Service group bg-white text-black w-screen md:w-[50vw] xl:w-[33.33vw] min-h-screen p-6 md:p-10 2xl:p-14 2xl:pb-0 relative flex flex-col justify-end gap-6 2xl:gap-2 transition-all duration-500 hover:text-white"
    >
      {/* Context */}
      <div
        aria-label="Service Context"
        className="flex flex-col gap-6 text-3xl 2xl:text-4xl"
      >
        {index === undefined || (
          <span className="font-normal translate-y-14 group-hover:translate-y-0 group-focus:translate-y-0 transition-transform duration-300 delay-200">
            0{index}
          </span>
        )}
        <span className="translate-y-14 group-hover:translate-y-0 group-focus:translate-y-0 transition-transform duration-300 delay-[250ms] whitespace-normal">
          {name}
        </span>
      </div>
      {/* Image */}
      <div
        aria-hidden="true"
        className="w-full md:h-80 2xl:order-2 2xl:my-20 2xl:h-96 2xl:scale-100 scale-50 -translate-x-16 2xl:-translate-x-96 2xl:translate-y-28 origin-bottom-left 2xl:origin-[75%_30%] opacity-0 group-hover:scale-100 2xl:group-hover:scale-150 group-hover:translate-x-0 group-hover:translate-y-0 group-hover:opacity-100 group-focus:scale-100 2xl:group-focus:scale-150 group-focus:translate-x-0 group-focus:translate-y-0 group-focus:opacity-100 transition-all duration-500 2xl:duration-700"
      >
        <img
          alt={`Cover photo of ${name}`}
          src={`/services/${slug}/cover.png`}
          className="w-full h-full object-contain"
        />
      </div>
      {children}
    </article>
  );
}
