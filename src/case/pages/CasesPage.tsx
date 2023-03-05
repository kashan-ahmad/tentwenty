import * as React from "react";
import { locoOptions } from "../../config";
import CaseComponent from "../components/CaseComponent";
import { Navigate, useLocation } from "react-router-dom";
import AnimatedLayout from "../../animations/AnimatedLayout";
import CaseDescriptiveComponent from "../components/CaseDescriptiveComponent";
import LocomotiveScroll, { Direction } from "locomotive-scroll";

// Types.
import type { Case } from "../Case";

type Props = {};

const getDirection = (): Direction =>
  window.matchMedia("(min-width: 768px)").matches ? "horizontal" : "vertical";

export default function CasesPage({}: Props) {
  const { state } = useLocation();

  const cases: Case[] = state?.cases;

  // Effect: Add hover event listeners to all of the case components in order to change their backgrounds dynamically.
  React.useEffect(() => {
    const setColor = (element: HTMLElement) =>
      (element.style.backgroundColor =
        element.getAttribute("data-bg-color") || "#fff");

    const unsetColor = (element: HTMLElement) =>
      (element.style.backgroundColor = "#fff");

    const cases = document.getElementsByClassName(
      "Case"
    ) as HTMLCollectionOf<HTMLElement>;

    if (cases) {
      Array.from(cases).forEach((element) => {
        // Set color on mouseover.
        element.addEventListener("mouseover", () => setColor(element));

        // Remove color on mouseout.
        element.addEventListener("mouseout", () => unsetColor(element));
      });
    }
  }, []);

  // Effect: Make the list scroll horizontally when vertically scrolled.
  React.useEffect(() => {
    const caseList = document.getElementById("CaseList");

    // Guard.
    if (!caseList) return;

    const initScroll = () =>
      new LocomotiveScroll({
        ...locoOptions,
        el: caseList,
        direction: getDirection(),
      });

    // Initialize the scroll.
    let scroll = initScroll();

    // Scroll to the right end instantly.
    scroll.scrollTo("right", {
      duration: 0,
      callback: () => {
        // Then scroll to the very left slowly.
        scroll.scrollTo("left", {
          duration: 3000,
        });
      },
    });

    // Re-initialize the scroll to update in accordance with the window.
    const listener = () => scroll.init();

    window.addEventListener("resize", listener);

    return () => window.removeEventListener("resize", listener);

    // let scrolledHeight = 0;

    // console.log({
    //   offsetWidth: caseList.offsetWidth,
    //   clientWidth: caseList.clientWidth,
    //   scrollWidth: caseList.scrollWidth,
    // });

    // caseList.addEventListener("wheel", (e) => {
    //   scrolledHeight += e.deltaY;

    //   if (scrolledHeight < 0) scrolledHeight = 0;

    //   if (scrolledHeight > caseList.scrollWidth)
    //     scrolledHeight = caseList.scrollWidth;

    //   console.log({ scrolledHeight });

    //   caseList.scroll({
    //     left: scrolledHeight,
    //     behavior: "smooth",
    //   });
    // });
  }, []);

  if (!cases) return <Navigate to="/" />;

  return (
    <AnimatedLayout>
      <ul
        id="CaseList"
        data-scroll-container
        className="overflow-auto h-screen md:min-w-[500vw] !flex flex-col md:flex-row md:overflow-y-hidden"
      >
        {cases.map((_case, i) => (
          <li key={i}>
            <CaseDescriptiveComponent index={i + 1} {..._case} />
          </li>
        ))}
        <CaseComponent
          color="black"
          slug="coffee"
          id={Math.random()}
          name="Meet us for coffee"
        />
      </ul>
    </AnimatedLayout>
  );
}
