"use client";
import React from "react";
import ArrowUpRightIcon from "../svgs/ArrowUpRightIcon";
import GlobeIcon from "../svgs/GlobeIcon";
import EnvelopeIcon from "../svgs/EnvelopeIcon";
import PhoneIcon from "../svgs/PhoneIcon";
import FiveStarsRate from "../reusables/FiveStarsRate";
import { Link, Router } from "react-router-dom";
import profileUrl from "../../assets/profile.jpg";
import type { agentType } from "../../utils/type";

function Agent({ agent }: { agent: agentType }) {
  return (
    <div className="border border-gray-200 py-4 rounded-lg relative">
      <img
        src={profileUrl}
        alt="hero image"
        width={1920} // or the actual image width
        height={1080} // or the actual image height
        className="size-16 rounded-full object-cover mx-auto"
      />
      <div className="flex border-b border-b-gray-200 px-4 py-3 items-center justify-between">
        <div>
          <h1 className="text-sm font-semibold text-gray-800">{agent.name}</h1>
        </div>
        <FiveStarsRate rating={4} />
      </div>
      <div className="flex flex-col gap-2 pt-3 px-4">
        <div className="flex items-center gap-2">
          <PhoneIcon size="size-4" />
          <p className="text-[13px] text-gray-500"> {agent.phoneNumber}</p>
        </div>
        <div className="flex items-center gap-2">
          <EnvelopeIcon />
          <p className="text-[13px] text-gray-500"> {agent.email}</p>
        </div>
        {agent.websiteUrl && (
          <div className="flex items-center gap-2">
            <GlobeIcon />
            <p className="text-[13px] text-gray-500"> {agent.websiteUrl}</p>
          </div>
        )}
      </div>

      <Link
        to={`/agent/${agent.id}`}
        className="absolute bottom-10 right-4 cursor-pointer ml-auto bg-sky-600 hover:bg-sky-700 transition-all p-2 rounded-full"
      >
        <ArrowUpRightIcon />
      </Link>
    </div>
  );
}

export default Agent;
