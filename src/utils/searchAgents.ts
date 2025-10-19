import type { agentType } from "./type";

export const searchAgents = (
  searchText: string,
  agents: agentType[],
  setSearchedAgents: React.Dispatch<React.SetStateAction<agentType[]>>
) => {
  if (searchText) {
    const filteredAgents = agents.filter((agent) => {
      return (
        agent.name.toLowerCase().includes(searchText.toLowerCase()) ||
        agent.email.toLowerCase().includes(searchText.toLowerCase()) ||
        agent.phoneNumber.includes(searchText)
      );
    });
    setSearchedAgents(filteredAgents);
  } else {
    setSearchedAgents(agents);
  }
};
