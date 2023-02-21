import { useEffect, useState } from "react";
import useServices from "./useServices";
import PreFlight from "~/components/PreFlight/PreFlight";
import useViewportMasks from "~/components/ViewportMasks/useViewportMasks";

// Types.
import type { Service } from "./Service";
import type { RequestState } from "~/types";

type Props = {};

const stackOfCallbacks: Function[] = [];

export default function ServicesPage({}: Props) {
  const { getAllServices } = useServices();
  const { showMasks, hideMasks } = useViewportMasks();

  const [services, setServices] = useState<Service[]>([]);
  const [requestState, setRequestState] = useState<RequestState>("loading");

  useEffect(() => {
    getAllServices({
      onSuccess: (services) => {
        setServices(services);
        setRequestState("loaded");
        stackOfCallbacks.push(showMasks);
      },
      onFailure: (message) => {
        setRequestState("erred");
        stackOfCallbacks.push(() =>
          showMasks({
            //onComplete: hideMasks,
            bruhText: message,
            interstitialClassName: "bg-red-600",
          })
        );
      },
    });
  }, []);

  return (
    <>
      <PreFlight
        {...{ stackOfCallbacks }}
        isParentLoading={requestState === "loading"}
      />
    </>
  );
}
