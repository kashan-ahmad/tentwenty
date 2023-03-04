import { gsap } from "gsap";
import { Animator } from "../types";

export const fadeIn: Animator = (selector, timeline, onComplete) => {
  const tl = timeline || gsap.timeline();

  tl.to(selector, {
    opacity: 1,
    duration: 0.5,
    ease: "power3.in",
    onComplete,
  });
};

export const fadeOut: Animator = (selector, timeline, onComplete) => {
  const tl = timeline || gsap.timeline();

  tl.to(selector, {
    opacity: 0,
    duration: 0.5,
    ease: "power3.in",
    onComplete,
  });
};
