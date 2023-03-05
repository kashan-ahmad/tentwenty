import React from "react";
import Controller from "./Controller";
import AnimatedLayout from "../../../animations/AnimatedLayout";

type Props = {};

export default function CasePage({}: Props) {
  return (
    <AnimatedLayout>
      <Controller>{() => <></>}</Controller>
    </AnimatedLayout>
  );
}
