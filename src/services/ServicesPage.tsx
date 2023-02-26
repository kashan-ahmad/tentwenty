import * as React from "react";
import ServiceComponent from "./ServiceComponent";
import AnimatedLayout from "~/animations/AnimatedLayout";
import { useLocation, useNavigate } from "react-router-dom";

// Types.
import type { Service } from "./Service";

type Props = {};

export default function ServicesPage({}: Props) {
  const navigate = useNavigate();
  const { state } = useLocation();

  const services: Service[] = state?.services;

  if (!services) return <></>;

  return (
    <AnimatedLayout>
      <button onClick={() => navigate("/test")}>Go</button>
      {services.map((service, i) => (
        <ServiceComponent key={i} {...service} />
      ))}
    </AnimatedLayout>
  );
}
