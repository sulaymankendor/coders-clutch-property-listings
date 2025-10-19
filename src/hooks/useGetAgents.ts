import { axiosRequest } from "@/utils/axiosRequest";
import type { agentsRequest, agentType } from "@/utils/type";
import { useEffect, useState } from "react";

export const useGetAgents = (
  setSearchedAgents: React.Dispatch<React.SetStateAction<agentType[]>>
) => {
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
      setSearchedAgents(fetchedAgents);
    };
    fetchAgents();
  }, []);

  return { agentsRequest };
};
