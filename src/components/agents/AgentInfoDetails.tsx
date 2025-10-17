import React, { useEffect, useState } from "react";
import { properties } from "@/utils/data";
import Listings from "../home/Listings";
import Reviews from "../reusables/Reviews";
import AgentInfoNavs from "./AgentInfoNavs";
import About from "./About";

function AgentInfoDetails() {
  const [currentNav, setCurrentNav] = useState("About");
  const [listings, setListings] = useState<
    Array<{ id: string; [key: string]: any }>
  >([]);

  return (
    <div>
      <AgentInfoNavs currentNav={currentNav} setCurrentNav={setCurrentNav} />
      {(() => {
        switch (currentNav) {
          case "About":
            return <About />;
          case "Listings":
            return (
              <Listings
                // title="Latest Listings"
                mt={"mt-14"}
                properties={properties}
                width="w-full"
              />
            );
          case "Reviews":
            return <Reviews />;
        }
      })()}
    </div>
  );
}

export default AgentInfoDetails;
