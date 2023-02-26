import { NavigateOptions, To, useNavigate } from "react-router-dom";
import useViewportMasks from "~/components/ViewportMasks/useViewportMasks";

export default function useNavigateWithAnimation() {
  const navigate = useNavigate();
  const { showMasks } = useViewportMasks();

  return function (
    to: To,
    routerOptions?: NavigateOptions & {
      animation?: Function;
    }
  ) {
    const animate = routerOptions?.animation
      ? routerOptions.animation
      : showMasks;

    console.log({ animate });

    animate({ onComplete: () => navigate(to, routerOptions) });
  };
}
