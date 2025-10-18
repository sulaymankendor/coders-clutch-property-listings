import AgentsListings from "../agents/AgentsListings";
import AgentsSearch from "../agents/AgentsSearch";
import { LoadingSpinner } from "../reusables/LoadingSpinner";
import { useGetAgents } from "@/hooks/useGetAgents";

function page() {
  const { agentsRequest } = useGetAgents();
  return (
    <section className="w-[90%] mx-auto">
      <AgentsSearch />

      {agentsRequest.isLoading ? (
        <LoadingSpinner />
      ) : agentsRequest.errorMsg ? (
        <div className="text-center py-10">
          <p className="text-red-700 text-sm">{agentsRequest.errorMsg}</p>
        </div>
      ) : agentsRequest.agents && agentsRequest.agents.length > 0 ? (
        <AgentsListings agents={agentsRequest.agents} />
      ) : (
        <div className="text-center py-10">
          <p className="text-gray-500 text-sm">No agent found</p>
        </div>
      )}
    </section>
  );
}

export default page;
