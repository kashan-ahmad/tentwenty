import * as React from "react";
import { Navigate, useLocation } from "react-router-dom";
import ServiceComponent from "./ServiceComponent";
import AnimatedLayout from "@/animations/AnimatedLayout";

// Types.
import type { Service } from "./Service";

type Props = {};

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

  if (!services) return <Navigate to="/" />;

  return (
    <AnimatedLayout>
      <ul className="overflow-auto max-h-screen flex flex-col md:flex-row md:overflow-y-hidden">
        {services.map((service, i) => (
          <li key={i}>
            <ServiceComponent index={i + 1} {...service} />
          </li>
        ))}
      </ul>
    </AnimatedLayout>
  );
}
