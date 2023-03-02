import * as React from "react";
import { useNavigate } from "react-router-dom";
import useCases from "../case/useCases";
import PreFlight from "../components/PreFlight/PreFlight";
import useViewportMasks from "../components/ViewportMasks/useViewportMasks";

// Types.
import type { RequestState } from "../types";
import AnimatedLayout from "../animations/AnimatedLayout";
import { Case } from "../case/Case";

type Props = {};

const stackOfCallbacks: Function[] = [];

export default function CasesPage({}: Props) {
  const navigate = useNavigate();
  const { showMasks } = useViewportMasks();
  const { getAllCases } = useCases();

  const [cases, setCases] = React.useState<Case[]>([]);
  const [shouldAnimateOut, setShouldAnimateOut] = React.useState(false);

  const [requestState, setRequestState] =
    React.useState<RequestState>("loading");

  React.useEffect(() => {
    getAllCases({
      onSuccess: (cases) => {
        setCases(cases);

        // Set the request state.
        setRequestState("loaded");

        stackOfCallbacks.push(() =>
          // Animate out.
          setShouldAnimateOut(true)
        );
      },
      onFailure: (message) => {
        setRequestState("erred");
        stackOfCallbacks.push(() =>
          showMasks({
            bruhText: message,
            interstitialClassName: "bg-red-600",
          })
        );
      },
    });
  }, []);

  return (
    <AnimatedLayout
      shouldAnimateIn={false}
      shouldAnimateOut={shouldAnimateOut}
      onAnimateOut={() =>
        // When the animation is done, we want to navigate to the cases page.
        navigate("/cases", {
          state: { cases },
        })
      }
    >
      <PreFlight
        {...{ stackOfCallbacks }}
        isParentLoading={requestState === "loading"}
      />
    </AnimatedLayout>
  );
}
