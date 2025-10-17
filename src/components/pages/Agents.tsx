import AgentsListings from "../agents/AgentsListings";
import { agents } from "../../utils/data";
import AgentsSearch from "../agents/AgentsSearch";

function page() {
  return (
    <section className="w-[90%] mx-auto">
      <AgentsSearch />
      <AgentsListings agents={agents} />
    </section>
  );
}

export default page;
