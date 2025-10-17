import AgentInfo from "@/components/propertyDetails/AgentInfo";
import EnvelopeIcon from "@/components/svgs/EnvelopeIcon";
import GlobeIcon from "@/components/svgs/GlobeIcon";
import PhoneIcon from "@/components/svgs/PhoneIcon";
import React from "react";
import FiveStarsRate from "../reusables/FiveStarsRate";
import AgentInfoDetails from "../agents/AgentInfoDetails";
import profileImg from "@/assets/profile.jpg";

function AgentDetails() {
  return (
    <section className="mt-24 w-[90%] mx-auto">
      <div className="flex items-center justify-between pb-4">
        <div>
          <img
            src={profileImg}
            alt="hero image"
            width={1920} // or the actual image width
            height={1080} // or the actual image height
            className="size-32 rounded-full object-cover mx-auto"
          />
          <div className="mt-2">
            <div className="mx-auto w-fit">
              <FiveStarsRate rating={5} />
            </div>
            <h1 className="text-lg text-center font-semibold text-gray-800">
              Sulayman Kendor
            </h1>
          </div>
          <div className="flex flex-col gap-2 pt-1 px-4">
            <div className="flex items-center gap-2">
              <PhoneIcon size="size-4" />
              <p className="text-[13px] text-gray-500">+220 2793307</p>
            </div>
            <div className="flex items-center gap-2">
              <EnvelopeIcon />
              <p className="text-[13px] text-gray-500">lambda@gmail.com</p>
            </div>
            <div className="flex items-center gap-2">
              <GlobeIcon />
              <p className="text-[13px] text-gray-500">lambda@gmail.com</p>
            </div>
          </div>
        </div>
      </div>
      <div className="mt-6">
        <AgentInfoDetails />
      </div>
    </section>
  );
}

export default AgentDetails;
