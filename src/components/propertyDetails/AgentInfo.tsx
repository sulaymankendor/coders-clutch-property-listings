import PhoneIcon from "../svgs/PhoneIcon";
import EnvelopeIcon from "../svgs/EnvelopeIcon";
import GlobeIcon from "../svgs/GlobeIcon";
import FiveStarsRate from "../reusables/FiveStarsRate";
import type { agentType } from "@/utils/type";
import { useNavigate } from "react-router-dom";

function AgentInfo({ agent }: { agent: agentType }) {
  const navigate = useNavigate();
  return (
    <div className="border border-gray-300 w-[15rem] px-5 py-3 rounded-xl mt-3">
      <h1 className="font-semibold text-lg text-gray-800">Agent</h1>
      <div className="mt-3">
        <div className="flex items-center gap-2 mb-3">
          <img
            src={agent.profileImageUrl}
            alt="hero image"
            width={1920} // or the actual image width
            height={1080} // or the actual image height
            className="size-12 rounded-full object-cover"
          />
          <div>
            <p className="text-sm font-semibold text-gray-800">{agent.name}</p>
            <p className="text-xs text-gray-500">Senior Real Estate Agent</p>
            <FiveStarsRate rating={agent.rating} />
          </div>
        </div>
        <div className="flex flex-col gap-1">
          <div className="flex items-center gap-2">
            <div>
              <PhoneIcon size="size-4" />
            </div>
            <p className="text-[13px] text-gray-500">{agent.phoneNumber}</p>
          </div>
          <div className="flex items-center gap-2">
            <div>
              <EnvelopeIcon />
            </div>
            <p className="text-[13px] text-gray-500 truncate">{agent.email}</p>
          </div>
          <div className="flex items-center gap-2 w-full">
            <div>
              <GlobeIcon />
            </div>
            <p className="text-[13px] text-gray-500 truncate">
              {agent.websiteUrl}
            </p>
          </div>
        </div>
      </div>
      <div>
        <button
          onClick={() => navigate(`/agent/${agent.id}`)}
          className="bg-sky-600 text-sm transition-all hover:bg-sky-700 w-full text-white font-medium py-2 rounded-full mt-4 text-center"
        >
          View
        </button>
      </div>
    </div>
  );
}

export default AgentInfo;
