import gsap from "gsap";

/**
 * Timeline for the route masks.
 */
const timeline = gsap.timeline();

export default function useViewportMasks() {
  /**
   * Animates the viewport masks with stagger, gracefully covering the whole screen while displaying different layers of colors.
   */
  function animateMasks({ onComplete }: { onComplete?: Function } = {}) {
    timeline
      // Display the viewport masks.
      .to(
        ".ViewportMask",
        {
          stagger: 0.75,
          duration: 0.25,
          scaleY: 1,
          ease: "power3.in",
        },
        ">"
      )
      // Then, display the interstitial mask.
      .to(
        "#ViewportMaskInterstitial",
        {
          duration: 0.25,
          scaleX: 1,
          ease: "power3.in",
          onComplete: () => {
            resetMasks({ onComplete });
          },
        },
        ">-.5"
      );
  }

  /**
   * Resets all of the masks at once, without any animation.
   */
  function resetMasks({ onComplete }: { onComplete?: Function } = {}) {
    timeline
      // Hide the viewport masks.
      .set(".ViewportMask", {
        scaleY: 0,
        duration: 0,
      })
      // Hide the interstitial mask.
      .to("#ViewportMaskInterstitial", {
        scaleX: 0,
        duration: 0,
        onComplete: () => onComplete?.(),
      });
  }

  return { animateMasks, resetMasks };
}
