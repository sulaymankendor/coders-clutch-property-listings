import ArrowUpRightIcon from "../svgs/ArrowUpRightIcon";
import GlobeIcon from "../svgs/GlobeIcon";
import EnvelopeIcon from "../svgs/EnvelopeIcon";
import PhoneIcon from "../svgs/PhoneIcon";
import FiveStarsRate from "../reusables/FiveStarsRate";
import { Link } from "react-router-dom";
import profileUrl from "../../assets/profile.jpg";
import type { agentType } from "../../utils/type";

function Agent({ agent }: { agent: agentType }) {
  return (
    <div className="border border-gray-200 py-4 rounded-lg relative">
      <img
        src={profileUrl}
        alt="hero image"
        width={1920}
        height={1080}
        className="size-14 sm:size-16 rounded-full object-cover mx-auto"
      />
      <div className="flex border-b border-b-gray-200 px-3 sm:px-4 py-3 items-center justify-between gap-2">
        <div className="flex-1 min-w-0">
          <h1 className="text-sm font-semibold text-gray-800 truncate">
            {agent.name}
          </h1>
        </div>
        <FiveStarsRate rating={agent.rating} />
      </div>
      <div className="flex flex-col gap-2 pt-3 px-3 sm:px-4 pb-12 sm:pb-14">
        <div className="flex items-center gap-2">
          <PhoneIcon size="size-4" />
          <p className="text-[13px] text-gray-500 truncate">
            {" "}
            {agent.phoneNumber}
          </p>
        </div>
        <div className="flex items-center gap-2">
          <EnvelopeIcon />
          <p className="text-[13px] text-gray-500 truncate"> {agent.email}</p>
        </div>
        {agent.websiteUrl && (
          <div className="flex items-center gap-2">
            <GlobeIcon />
            <p className="text-[13px] text-gray-500 truncate">
              {" "}
              {agent.websiteUrl}
            </p>
          </div>
        )}
      </div>

      <Link
        to={`/agent/${agent.id}`}
        className="absolute bottom-3 sm:bottom-4 right-3 sm:right-4 cursor-pointer ml-auto bg-sky-600 hover:bg-sky-700 transition-all p-2 rounded-full flex-shrink-0"
      >
        <ArrowUpRightIcon />
      </Link>
    </div>
  );
}

export default Agent;
