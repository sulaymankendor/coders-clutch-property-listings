import React from "react";
import PhoneIcon from "../svgs/PhoneIcon";
import EnvelopeIcon from "../svgs/EnvelopeIcon";
import GlobeIcon from "../svgs/GlobeIcon";
import FiveStarsRate from "../reusables/FiveStarsRate";
import profileImg from "../../assets/profile.jpg";

function AgentInfo() {
  return (
    <div className="border border-gray-300 w-[15rem] px-5 py-3 rounded-xl mt-3">
      <h1 className="font-semibold text-lg text-gray-800">Agent</h1>
      <div className="mt-3">
        <div className="flex items-center gap-2 mb-3">
          <img
            src={profileImg}
            alt="hero image"
            width={1920} // or the actual image width
            height={1080} // or the actual image height
            className="size-12 rounded-full object-cover"
          />
          <div>
            <p className="text-sm font-semibold text-gray-800">
              Sulayman Kendor
            </p>
            <p className="text-xs text-gray-500">Senior Real Estate Agent</p>
            <FiveStarsRate rating={3} />
          </div>
        </div>
        <div className="flex flex-col gap-1">
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
      <button
        // href={"/"}
        className="bg-sky-600 text-sm transition-all hover:bg-sky-700 w-full text-white font-medium py-2 rounded-full mt-4"
      >
        View
      </button>
    </div>
  );
}

export default AgentInfo;
