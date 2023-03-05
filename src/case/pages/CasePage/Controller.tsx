import React, { useState } from "react";
import { useParams } from "react-router-dom";
import { fadeOut } from "../../../animations/animations";
import ComingSoon from "../../../components/ComingSoon";
import Error from "../../../components/Error";
import Loader from "../../../components/Loader";
import { RequestState } from "../../../types";
import { CaseData } from "../../Case";
import useCases from "../../useCases";

type Props = {
  children: (data: CaseData) => JSX.Element;
};

export default function Controller({ children }: Props) {
  const { slug } = useParams();
  const { getCaseData } = useCases();

  // Only whocares is allowed for now.
  const isAllowedSlug = slug && slug === "whocares";

  // Local request state.
  const [data, setData] = useState<CaseData>();
  const [errorMessage, setErrorMessage] = useState("");
  const [requestState, setRequestState] = useState<RequestState>("loading");

  React.useEffect(() => {
    if (!isAllowedSlug) return;

    getCaseData({
      slug,
      onSuccess: (data) => {
        fadeOut("#Loader", undefined, () => {
          setData(data);
          setRequestState("loaded");
        });
      },
      onFailure: (message) => {
        fadeOut("#Loader", undefined, () => {
          setRequestState("erred");
          setErrorMessage(message);
        });
      },
    });
  }, []);

  if (!isAllowedSlug) return <ComingSoon />;

  return {
    erred: <Error message={errorMessage} />,
    loading: <Loader />,
    loaded: children(data!),
  }[requestState];
}
