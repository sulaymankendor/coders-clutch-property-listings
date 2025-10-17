"use client";
import { useState } from "react";
import PropertyInfoNavs from "./PropertyInfoNavs";
import Description from "./Description";
import Reviews from "../reusables/Reviews";

function PropertyInfo({ listing }: { listing: any }) {
  const [currentNav, setCurrentNav] = useState("Description");
  return (
    <div>
      <PropertyInfoNavs currentNav={currentNav} setCurrentNav={setCurrentNav} />
      {(() => {
        switch (currentNav) {
          case "Description":
            return (
              <Description
                description={listing.description}
                amenities={listing.amenities}
              />
            );

          case "Reviews":
            return <Reviews />;
        }
      })()}
    </div>
  );
}

export default PropertyInfo;
