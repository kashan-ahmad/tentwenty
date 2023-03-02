import axios from "axios";
import { useCallback } from "react";
import strings from "../utils/strings";

// Types.
import type { Case } from "./Case";
import type { BoolBacks } from "../types";

export default function useCases() {
  const getAllCases = useCallback(
    ({ onSuccess, onFailure }: BoolBacks<Case[]>) => {
      axios
        .get<Case[]>("/cases.json")
        .then((response) => onSuccess(response.data))
        .catch((error) => {
          onFailure(error.message || strings.DEFAULT_ERROR_MESSAGE);
          console.error(error);
        });
    },
    []
  );

  return {
    getAllCases,
  };
}
