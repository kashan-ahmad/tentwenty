import gsap from "gsap";
import { useEffect, useState } from "react";
import Preflight from "./Vectors/Preflight";

const entities = [
  "Digital Agency",
  "Digital Agency",
  "Websites",
  "Branding",
  "Ecommerce",
  "Apps",
  "350+ Projects",
];

function animateFlightMask(timeline: gsap.core.Timeline) {}

function App() {
  const [index, setIndex] = useState(0);

  useEffect(() => {
    const flightTimeline = gsap.timeline();

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
      );

    // Changing the text per interval

    const interval = setInterval(() => {
      setIndex((index) => ++index);
    }, 500);

    // Cancelling the interval
    const timeout = setTimeout(() => clearInterval(interval), 4000);

    return () => {
      clearTimeout(timeout);
      clearInterval(interval);
    };
  }, []);

  return (
    <div className="w-screen h-screen font-semibold bg-[#171719] overflow-hidden">
      <div className="origin-center scale-[.4] sm:scale-75 md:scale-90 lg:scale-100 absolute top-1/2 left-1/2 -translate-x-2/4 -translate-y-2/4">
        <Preflight text={entities[index] || entities[entities.length - 1]} />
      </div>
    </div>
  );
}

export default App;
