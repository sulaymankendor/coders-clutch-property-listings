import React from "react";

function AgentInfoNavs({
  currentNav,
  setCurrentNav,
}: {
  currentNav: string;
  setCurrentNav: React.Dispatch<React.SetStateAction<string>>;
}) {
  return (
    <div className="flex items-center gap-16 mb-8 relative w-fit">
      {["About", "Listings", "Reviews", "Pricing & Payment Info"].map((nav) => (
        <button
          key={nav}
          className={`relative ${
            currentNav === nav ? "text-gray-800" : "text-gray-600"
          } hover:text-gray-800  group whitespace-nowrap cursor-pointer text-sm  font-medium transition-all py-[3px] `}
          onClick={() => setCurrentNav(nav)}
        >
          {nav}
          <div
            className={`absolute bottom-0 z-20 left-1/2 transform -translate-x-1/2 h-[1.5px] bg-gray-700 transition-all duration-300 ${
              currentNav === nav ? "w-full bg-black" : "w-0 group-hover:w-full"
            }`}
          ></div>
        </button>
      ))}
      <div className="absolute bottom-0 left-1/2 transform -translate-x-1/2 h-[1.5px] bg-gray-300 transition-all duration-300 w-full"></div>
    </div>
  );
}

export default AgentInfoNavs;
