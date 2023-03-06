export type BoolBacks<T = any> = {
  onSuccess: (data: T) => unknown;
  onFailure: (message: string) => unknown;
};

export type RequestState = "loading" | "loaded" | "erred";

export type Animator = (
  /**
   * The selector for the element(s), or the elements themselves, to animate.
   */
  selector: string | Element | HTMLElement,

  /**
   * The timeline to use, creates a new timeline if not provided.
   */
  timeline?: gsap.core.Timeline,

  /**
   * Callback for when the animation ends.
   */
  onComplete?: gsap.Callback
) => unknown;
