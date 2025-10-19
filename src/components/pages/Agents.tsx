import { useEffect, useState } from "react";
import AgentsListings from "../agents/AgentsListings";
import AgentsSearch from "../agents/AgentsSearch";
import { LoadingSpinner } from "../reusables/LoadingSpinner";
import { useGetAgents } from "@/hooks/useGetAgents";
import type { agentType } from "@/utils/type";
import { searchAgents } from "@/utils/searchAgents";

function page() {
  const [searchedAgents, setSearchedAgents] = useState<agentType[]>([]);
  const { agentsRequest } = useGetAgents(setSearchedAgents);
  const [searchText, setSearchText] = useState("");
  useEffect(() => {
    searchAgents(searchText, agentsRequest.agents, setSearchedAgents);
  }, [searchText]);
  return (
    <section className="w-[90%] mx-auto">
      <AgentsSearch
        numberOfResults={searchedAgents.length}
        searchText={searchText}
        setSearchText={setSearchText}
      />

      {agentsRequest.isLoading ? (
        <LoadingSpinner />
      ) : agentsRequest.errorMsg ? (
        <div className="text-center py-10">
          <p className="text-red-700 text-sm">{agentsRequest.errorMsg}</p>
        </div>
      ) : agentsRequest.agents && agentsRequest.agents.length > 0 ? (
        <AgentsListings agents={searchedAgents} />
      ) : (
        <div className="text-center py-10">
          <p className="text-gray-500 text-sm">No agent found</p>
        </div>
      )}
    </section>
  );
}

export default page;
