import * as React from "react";
import { useNavigate } from "react-router-dom";
import useServices from "@/services/useServices";
import PreFlight from "@/components/PreFlight/PreFlight";
import useViewportMasks from "@/components/ViewportMasks/useViewportMasks";

// Types.
import type { RequestState } from "@/types";

type Props = {};

const stackOfCallbacks: Function[] = [];

export default function ServicesPage({}: Props) {
  const navigate = useNavigate();
  const { showMasks } = useViewportMasks();
  const { getAllServices } = useServices();

  const [requestState, setRequestState] =
    React.useState<RequestState>("loading");

  React.useEffect(() => {
    getAllServices({
      onSuccess: (services) => {
        // Set the request state.
        setRequestState("loaded");

        stackOfCallbacks.push(() =>
          // When the animation is done, we want to navigate to the services page.
          navigate("/services", {
            state: { services },
          })
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
    <PreFlight
      {...{ stackOfCallbacks }}
      isParentLoading={requestState === "loading"}
    />
  );
}
