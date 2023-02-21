import axios from "axios";
import { useCallback } from "react";
import strings from "~/utils/strings";

// Types.
import type { BoolBacks } from "~/types";
import type { Service } from "./Service";

export default function useServices() {
  const getAllServices = useCallback(
    ({ onSuccess, onFailure }: BoolBacks<Service[]>) => {
      setTimeout(() => {
        axios
          .get<Service[]>("/servics.json")
          .then((response) => onSuccess(response.data))
          .catch((error) => {
            onFailure(error.message || strings.DEFAULT_ERROR_MESSAGE);
            console.error(error);
          });
      }, 10000);
    },
    []
  );

  return {
    getAllServices,
  };
}
