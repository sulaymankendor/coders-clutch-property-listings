import { axiosRequest } from "@/utils/axiosRequest";
import type { agentsRequest } from "@/utils/type";
import { useEffect, useState } from "react";

export const useGetAgents = () => {
  const [agentsRequest, setAgentsRequest] = useState<agentsRequest>({
    errorMsg: "",
    isLoading: true,
    agents: [],
  });
  useEffect(() => {
    const fetchAgents = async () => {
      const fetchedAgents = await axiosRequest.getAgents(
        "agents",
        setAgentsRequest
      );
      setAgentsRequest((currentRequestState) => {
        return { ...currentRequestState, agents: fetchedAgents };
      });
    };
    fetchAgents();
  }, []);

  return { agentsRequest };
};
