import React from "react";

const menuItems = [
  {
    text: "About Us",
    href: "https://tentwenty.me/about-us",
  },
  {
    text: "Services",
    href: "https://tentwenty.me/services",
  },
  {
    text: "Cases",
    href: "https://tentwenty.me/cases",
  },
  {
    text: "Blog",
    href: "https://tentwenty.me/blog",
  },
  {
    text: "Contact",
    href: "https://tentwenty.me/contact",
  },
  {
    text: "Enquiry",
    href: "https://tentwenty.me/enquiry",
  },
];

export default function MenuItemsComponent({
  className = "",
  ...props
}: React.ComponentPropsWithoutRef<"ul">) {
  return (
    <ul
      {...props}
      className={`flex flex-col items-center gap-8 fixed top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 ${className}`}
    >
      {menuItems.map((item, i) => (
        <li key={i} className="group relative">
          <a
            target="_blank"
            rel="noreferrer"
            href={item.href}
            className="inline-block box-border text-4xl 2xl:text-5xl pb-4 2xl:pb-8 transition-all duration-300 text-neutral-400 hover:text-neutral-200 focus:text-neutral-200 hover:-translate-y-6"
          >
            {item.text}
          </a>
          <span
            aria-hidden="true"
            className="text-sm uppercase font-normal text-neutral-500 whitespace-nowrap absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 group-hover:translate-y-2 opacity-0 group-hover:opacity-100 transition-all duration-300"
          >
            Explore &#8594;
          </span>
        </li>
      ))}
    </ul>
  );
}
