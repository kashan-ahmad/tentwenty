import gsap from "gsap";
import Circle from "@/shapes/Circle";
import { useEffect, useState } from "react";
import PreFlightContent from "./PreFlightContent";

const entities = [
  "Digital Agency",
  "Digital Agency",
  "Websites",
  "Branding",
  "Ecommerce",
  "Apps",
  "350+ Projects",
];

export type PreFlightProps = {
  /**
   * The preflight can't be interrupted, provide a list of methods to execute stackwise when the flight has finished animating.
   */
  stackOfCallbacks: Function[];

  /**
   * If the parent is loading something or a process is ongoing. Forces the flight to continue until true.
   */
  isParentLoading?: boolean;
};

const flightTimeline = gsap.timeline();

export default function PreFlight({
  stackOfCallbacks,
  isParentLoading = false,
}: PreFlightProps) {
  const [index, setIndex] = useState(0);
  const [isFlying, setIsFlying] = useState(true);

  // Effect: Animate the whole flight.
  useEffect(() => {
    // First, hide the mask.
    flightTimeline
      // Default mask styles.
      .set("#Preflight .Mask", {
        scaleX: 0,
        transformOrigin: "right",
      })
      // Then, show the first mask.
      .to("#Preflight #Mask1", {
        scaleX: 1,
        duration: 0.25,
      })
      // Then, hide the first mask.
      .to("#Preflight #Mask1", {
        scaleX: 0,
        duration: 0.25,
        transformOrigin: "left",
      })
      // Then, show the text.
      .to(
        "#Preflight #Text",
        {
          opacity: 1,
          duration: 0,
        },
        ">-.25"
      )
      // Then, scale the component.
      .to("#Preflight", {
        scale: 0.9,
        duration: 4,
      })
      // Then, show the second mask.
      .to(
        "#Preflight #Mask2",
        {
          scaleX: 1,
          duration: 0.25,
        },
        ">-1"
      )
      // Then, hide the second mask.
      .to(
        "#Preflight #Mask2",
        {
          scaleX: 0,
          duration: 0.25,
          transformOrigin: "left",
        },
        ">"
      )
      // Then, hide the text.
      .to(
        "#Preflight #Text",
        {
          opacity: 0,
          duration: 0,
        },
        ">-.25"
      )
      // Then, show the logo.
      .to(
        "#Preflight #Logo",
        {
          opacity: 1,
          duration: 0,
        },
        ">"
      )
      // Then, show the circles.
      .to(".Circle", {
        stagger: 0.25,
        duration: 0.25,
        opacity: 1,
        // Stop the flight as the animation has ended.
        onComplete: () => setIsFlying(false),
      });

    // Changing the text per interval.
    const interval = setInterval(() => {
      setIndex((index) => ++index);
    }, 500);

    // Cancelling the interval.
    const timeout = setTimeout(() => clearInterval(interval), 4000);

    return () => {
      clearTimeout(timeout);
      clearInterval(interval);
    };
  }, []);

  // Effect: Observe flight's status and execute the call stack upon end.
  useEffect(() => {
    // When the flight itself has finished animating AND the parent has finished loading.
    if (!isFlying && !isParentLoading) {
      // Hide the logo.
      flightTimeline.to(
        "#Preflight #Logo",
        {
          opacity: 0,
          duration: 0.25,
          onComplete: () => {
            stackOfCallbacks.forEach((fn) => fn());
          },
        },
        ">+1"
      );
    }
  }, [isFlying, isParentLoading]);

  return (
    <>
      <div className="sr-only">Loading...</div>
      <div
        aria-hidden="true"
        className="min-h-screen min-w-screen font-semibold overflow-hidden"
      >
        <div className="origin-center scale-[.4] sm:scale-75 md:scale-90 lg:scale-110 xl:scale-125 2xl:scale-[1.5] absolute top-1/2 left-1/2 -translate-x-2/4 -translate-y-2/4">
          <PreFlightContent
            text={entities[index] || entities[entities.length - 1]}
          />
        </div>
        <Circle
          id="CircleTopLeft"
          className="Circle opacity-0 z-10 fixed -top-28 -left-32 rotate-180 lg:scale-125 lg:-top-32 lg:-left-32 xl:-top-20 xl:-left-28"
        />
        <Circle
          id="CircleLeft"
          className="Circle opacity-0 fixed top-10 -left-20 scale-110 -rotate-90 lg:scale-125 xl:scale-150 xl:top-32 xl:-left-16"
        />
        <Circle
          id="CircleBottomRight"
          className="Circle opacity-0 fixed -bottom-36 -right-2 rotate-180 lg:scale-150 lg:right-12"
        />
      </div>
    </>
  );
}
