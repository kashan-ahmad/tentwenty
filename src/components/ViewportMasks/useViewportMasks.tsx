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
      .set(
        maskClass,
        {
          scaleY: 0,
          duration: 0,
        },
        ">+1"
      )
      // Hide the interstitial mask.
      .to(
        maskID,
        {
          scaleX: 0,
          duration: 0,
          onComplete: () => onComplete?.(),
        },
        ">"
      );
  }

  /**
   * Animates the viewport masks with stagger, gracefully covering the whole screen while displaying different layers of colors.
   */
  function showMasks({
    bruhText,
    onComplete,
    interstitialClassName = "bg-blue-500",
  }: {
    bruhText?: string;
    onComplete?: Function;
    interstitialClassName?: string;
  } = {}) {
    // Set the background color.
    document.querySelector(maskID)?.classList.add(interstitialClassName);

    // Set the custom text, if provided.
    if (bruhText) {
      const notice = document.getElementById("ViewportMaskNotice");

      // Display the text container.
      notice?.classList.remove("hidden");

      // The actual text element.
      const bruh = document.getElementById("ViewportMaskNoticeText");

      if (bruh) {
        bruh.innerHTML = bruhText;
      }
    }

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
          scaleX: 1,
          duration: 0.25,
          ease: "power3.in",
          onComplete: () => onComplete?.(),
        },
        ">-.5"
      );
  }

  return { showMasks, hideMasks };
}
