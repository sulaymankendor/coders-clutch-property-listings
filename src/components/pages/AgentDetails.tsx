import EnvelopeIcon from "@/components/svgs/EnvelopeIcon";
import GlobeIcon from "@/components/svgs/GlobeIcon";
import PhoneIcon from "@/components/svgs/PhoneIcon";
import FiveStarsRate from "../reusables/FiveStarsRate";
import profileImg from "@/assets/profile.jpg";
import { useParams } from "react-router-dom";
import { useGetAgentByID } from "@/hooks/useGetAgentByID";

function AgentDetails() {
  const { id } = useParams();
  const { agentRequest } = useGetAgentByID(Number(id));
  return (
    <section className="mt-24 w-[90%] mx-auto">
      <div className="flex items-center justify-between pb-4">
        <div className="w-fit mx-auto">
          <img
            src={profileImg}
            alt="hero image"
            width={1920} // or the actual image width
            height={1080} // or the actual image height
            className="size-32 rounded-full object-cover mx-auto"
          />
          <div className="mt-2">
            <div className="mx-auto w-fit">
              <FiveStarsRate rating={agentRequest.agent.rating} />
            </div>
            <h1 className="text-lg text-center font-semibold text-gray-800">
              Sulayman Kendor
            </h1>
          </div>
          <div className="flex flex-col gap-2 pt-1 px-4">
            <div className="flex items-center gap-2 w-fit mx-auto">
              <PhoneIcon size="size-4" />
              <p className="text-[13px] text-gray-500">
                {agentRequest.agent.phoneNumber}
              </p>
            </div>
            <div className="flex items-center gap-2 w-fit mx-auto">
              <EnvelopeIcon />
              <p className="text-[13px] text-gray-500">
                {agentRequest.agent.email}
              </p>
            </div>
            <div className="flex items-center gap-2 w-fit mx-auto">
              <GlobeIcon />
              <p className="text-[13px] text-gray-500">
                {agentRequest.agent.websiteUrl}
              </p>
            </div>
          </div>
        </div>
      </div>
      <div className="mt-5 w-[80%] mx-auto">
        <p className="text-sm text-gray-600 text-center">
          {agentRequest.agent.bio}
        </p>
      </div>
    </section>
  );
}

export default AgentDetails;
