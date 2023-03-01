import * as React from "react";
import ServiceComponent from "./ServiceComponent";
import { Navigate, useLocation } from "react-router-dom";
import LocomotiveScroll, { Direction } from "locomotive-scroll";

// Types.
import type { Service } from "./Service";
import AnimatedLayout from "../animations/AnimatedLayout";

type Props = {};

const getDirection = (): Direction =>
  window.matchMedia("(min-width: 768px)").matches ? "horizontal" : "vertical";

export default function ServicesPage({}: Props) {
  const { state } = useLocation();

  const services: Service[] = state?.services;

  // Effect: Add hover event listeners to all of the service components in order to change their backgrounds dynamically.
  React.useEffect(() => {
    const setColor = (service: HTMLElement) =>
      (service.style.backgroundColor =
        service.getAttribute("data-bg-color") || "#fff");

    const unsetColor = (service: HTMLElement) =>
      (service.style.backgroundColor = "#fff");

    const services = document.getElementsByClassName(
      "Service"
    ) as HTMLCollectionOf<HTMLElement>;

    if (services) {
      Array.from(services).forEach((service) => {
        // Set color on mouseover.
        service.addEventListener("mouseover", () => setColor(service));

        // Remove color on mouseout.
        service.addEventListener("mouseout", () => unsetColor(service));
      });
    }
  }, []);

  // Effect: Make the list scroll horizontally when vertically scrolled.
  React.useEffect(() => {
    const serviceList = document.getElementById("ServiceList");

    // Guard.
    if (!serviceList) return;

    const initScroll = () =>
      new LocomotiveScroll({
        el: serviceList,
        lerp: 0.05,
        smooth: true,
        multiplier: 1.25,
        direction: getDirection(),
      });

    // Initialize the scroll.
    let scroll = initScroll();

    const listener = () => {
      // Destroy and re-initialize the scroll to update in accordance with the window.
      scroll.destroy();
      scroll = initScroll();
    };

    window.addEventListener("resize", listener);

    return () => window.removeEventListener("resize", listener);

    // let scrolledHeight = 0;

    // console.log({
    //   offsetWidth: serviceList.offsetWidth,
    //   clientWidth: serviceList.clientWidth,
    //   scrollWidth: serviceList.scrollWidth,
    // });

    // serviceList.addEventListener("wheel", (e) => {
    //   scrolledHeight += e.deltaY;

    //   if (scrolledHeight < 0) scrolledHeight = 0;

    //   if (scrolledHeight > serviceList.scrollWidth)
    //     scrolledHeight = serviceList.scrollWidth;

    //   console.log({ scrolledHeight });

    //   serviceList.scroll({
    //     left: scrolledHeight,
    //     behavior: "smooth",
    //   });
    // });
  }, []);

  if (!services) return <Navigate to="/" />;

  return (
    <AnimatedLayout>
      <ul
        id="ServiceList"
        data-scroll-container
        className="overflow-auto h-screen md:min-w-[500vw] !flex flex-col md:flex-row md:overflow-y-hidden"
      >
        {services.map((service, i) => (
          <li key={i}>
            <ServiceComponent index={i + 1} {...service} />
          </li>
        ))}
      </ul>
    </AnimatedLayout>
  );
}
