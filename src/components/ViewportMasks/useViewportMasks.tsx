import gsap from "gsap";

/**
 * Timeline for the route masks.
 */
const timeline = gsap.timeline();

const maskClass = ".ViewportMask";
const maskID = "#ViewportMaskInterstitial";

export default function useViewportMasks() {
  /**
   * Resets all of the masks at once, without any animation.
   */
  function hideMasks({ onComplete }: { onComplete?: Function } = {}) {
    timeline
      // Hide the viewport masks.
      .set(maskClass, {
        scaleY: 0,
        duration: 0,
      })
      // Hide the interstitial mask.
      .to(maskID, {
        scaleX: 0,
        duration: 0,
        onComplete: () => onComplete?.(),
      });
  }

  /**
   * Animates the viewport masks with stagger, gracefully covering the whole screen while displaying different layers of colors.
   */
  function showMasks({
    onComplete,
    interstitialColor = "blue",
  }: { interstitialColor?: "red" | "blue"; onComplete?: Function } = {}) {
    // Set the background color.
    document
      .querySelector(maskID)
      ?.classList.add(`bg-${interstitialColor}-600`);

    timeline
      // Display the viewport masks.
      .to(maskClass, {
        stagger: 0.75,
        duration: 0.25,
        scaleY: 1,
        ease: "power3.in",
      })
      // Then, display the interstitial mask.
      .to(
        maskID,
        {
          duration: 0.25,
          scaleX: 1,
          ease: "power3.in",
          onComplete: () => onComplete?.(),
        },
        ">-.5"
      );
  }

  return { showMasks, hideMasks };
}
