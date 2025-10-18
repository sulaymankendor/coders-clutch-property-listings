import { axiosRequest } from "@/utils/axiosRequest";
import type { agentRequest } from "@/utils/type";
import { useEffect, useState } from "react";

export const useGetAgentByID = (id: number) => {
  const [agentRequest, setAgentRequest] = useState<agentRequest>({
    errorMsg: "",
    isLoading: true,
    agent: {
      id: 0,
      name: "",
      phoneNumber: "",
      rating: 0,
      email: "",
      websiteUrl: "",
      profileImageUrl: "",
      bio: "",
    },
  });
  useEffect(() => {
    const fetchAgentByID = async () => {
      const agent = await axiosRequest.getAgentByID(id, setAgentRequest);
      setAgentRequest((currentRequestState) => {
        return { ...currentRequestState, agent: agent };
      });
    };
    fetchAgentByID();
  }, []);

  return { agentRequest };
};
