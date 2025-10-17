import type { agentType } from "../../utils/type";
import Agent from "./Agent";

function AgentsListings({ agents }: { agents: agentType[] }) {
  return (
    <div className="grid grid-cols-3 gap-10">
      {agents.map((agent, index) => {
        return <Agent key={agent.id} agent={agent} />;
      })}
    </div>
  );
}

export default AgentsListings;
