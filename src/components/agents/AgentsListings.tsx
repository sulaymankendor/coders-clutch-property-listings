import type { agentType } from "../../utils/type";
import Agent from "./Agent";

function AgentsListings({ agents }: { agents: agentType[] }) {
  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6 lg:gap-10">
      {agents.map((agent) => {
        return <Agent key={agent.id} agent={agent} />;
      })}
    </div>
  );
}

export default AgentsListings;
