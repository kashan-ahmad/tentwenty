import { useEffect } from "react";
import { Outlet, useLocation } from "react-router-dom";
import ViewportMasks from "./components/ViewportMasks/ViewportMasks";
import useViewportMasks from "./components/ViewportMasks/useViewportMasks";

/**
 * Routes to except from the page transition animation.
 */
const exceptions = ["/"];

/**
 * The parent component of the tree + The animated route layout.
 */
function App() {
  const { pathname } = useLocation();
  const { showMasks, hideMasks } = useViewportMasks();

  // Effect: Animate the viewport masks on each route transition if it isn't an excepted route.
  useEffect(() => {
    if (exceptions.includes(pathname)) return;

    showMasks({ onComplete: hideMasks });
  }, [pathname]);

  return (
    <>
      <Outlet />
      <ViewportMasks />
    </>
  );
}

export default App;
