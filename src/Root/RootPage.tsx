import * as React from "react";
import { useNavigate } from "react-router-dom";
import useServices from "../services/useServices";
import PreFlight from "../components/PreFlight/PreFlight";
import useViewportMasks from "../components/ViewportMasks/useViewportMasks";

// Types.
import type { RequestState } from "../types";
import AnimatedLayout from "../animations/AnimatedLayout";
import { Service } from "../services/Service";

type Props = {};

const stackOfCallbacks: Function[] = [];

export default function ServicesPage({}: Props) {
  const navigate = useNavigate();
  const { showMasks } = useViewportMasks();
  const { getAllServices } = useServices();

  const [services, setServices] = React.useState<Service[]>([]);
  const [shouldAnimateOut, setShouldAnimateOut] = React.useState(false);

  const [requestState, setRequestState] =
    React.useState<RequestState>("loading");

  React.useEffect(() => {
    getAllServices({
      onSuccess: (services) => {
        setServices(services);

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
      {...{ shouldAnimateOut }}
      onAnimateOut={() =>
        // When the animation is done, we want to navigate to the services page.
        navigate("/services", {
          state: { services },
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
