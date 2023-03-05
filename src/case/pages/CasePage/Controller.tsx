import React from "react";
import { useParams } from "react-router-dom";
import ComingSoon from "../../../components/ComingSoon";

type Props = {
  children: () => JSX.Element;
};

export default function Controller({ children }: Props) {
  const { slug } = useParams();

  if (slug !== "whocares") return <ComingSoon />;

  console.log({ slug });

  return children();
}
