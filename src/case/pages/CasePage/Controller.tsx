import React, { useState } from "react";
import { useParams } from "react-router-dom";
import { fadeOut } from "../../../animations/animations";
import useNavigateWithAnimation from "../../../animations/useNavigateWithAnimation";
import ComingSoon from "../../../components/ComingSoon";
import Error from "../../../components/Error";
import Loader from "../../../components/Loader";
import { RequestState } from "../../../types";
import { CaseData, CaseTab } from "../../Case";
import useCases from "../../useCases";

type ReturnType = CaseData & {
  activeTab: CaseTab;
  setActiveTab: (tab: CaseTab["name"]) => unknown;
};

type Props = {
  children: (data: ReturnType) => JSX.Element;
};

export default function Controller({ children }: Props) {
  // Local request state.
  const [data, setData] = useState<CaseData>();
  const [errorMessage, setErrorMessage] = useState("");
  const [requestState, setRequestState] = useState<RequestState>("loading");

  const { getCaseData } = useCases();
  const navigate = useNavigateWithAnimation();

  // Default selected tab is always the first one.
  const { slug, tab: tabParam = data?.tabs[0].name } = useParams();

  // Only whocares is allowed for now.
  const isAllowedSlug = slug && slug === "whocares";

  // Effect: Fetch case data.
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

  if (requestState === "erred") return <Error message={errorMessage} />;

  if (requestState === "loading") return <Loader />;

  return children({
    ...data!,
    activeTab: data!.tabs.find((tab) => tab.name === tabParam)!,
    setActiveTab: (tab) => navigate(`/cases/${slug}/${tab}`),
  });
}
