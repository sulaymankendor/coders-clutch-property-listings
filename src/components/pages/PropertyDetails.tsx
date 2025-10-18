import LocationIcon from "../svgs/LocationIcon";
import AgentInfo from "../propertyDetails/AgentInfo";
import { useParams } from "react-router-dom";
import { useGetPropertyByID } from "@/hooks/useGetPropertyByID";
import { formatPrice } from "@/utils/formatPrice";
import { useGetAgentByID } from "@/hooks/useGetAgentByID";

function PropertyDetails() {
  const { id } = useParams();
  const { propertyRequest } = useGetPropertyByID(Number(id));
  const { agentRequest } = useGetAgentByID(Number(id));
  return (
    <section className="w-[90%] mt-32 mx-auto">
      <div className="grid grid-cols-[1fr_15rem] gap-5">
        {!propertyRequest.isLoading && (
          <img
            //@ts-ignore
            src={propertyRequest.property.imageUrl}
            alt="hero img"
            width={1920} // or the actual img width
            height={1080} // or the actual img height
            className="w-full h-[25rem] rounded-xl object-cover"
          />
        )}
        <div className="w-full grid gap-5">
          {!propertyRequest.isLoading && (
            <img
              src={propertyRequest.property.imageUrl}
              alt="hero img"
              // or the actual img height
              className="w-full h-[11.875rem] rounded-xl object-cover"
            />
          )}
          {!propertyRequest.isLoading && (
            <img
              src={propertyRequest.property.imageUrl}
              alt="hero img"
              className="w-full h-[11.875rem] rounded-xl object-cover"
            />
          )}
        </div>
      </div>
      <div>
        <div className="flex justify-between items-start mt-3">
          <div className="w-[65%]">
            <h1 className="font-semibold text-2xl text-gray-800">
              {propertyRequest.property.name}
            </h1>
            <div className="flex items-center mb-1 gap-[2px] mt-2">
              <LocationIcon size="size-4" />
              <p className="text-xs text-gray-600">
                {propertyRequest.property.location}{" "}
              </p>
            </div>
            <div className="flex items-center mt-4 justify-between w-[35rem] border border-gray-400 rounded-lg px-9 py-4">
              <div className="flex items-center flex-col gap-1">
                <p className="text-xs text-gray-600 text-center">Bedrooms</p>
                <p className="text-base text-center font-medium text-gray-700">
                  {propertyRequest.property.bedrooms} Rooms
                </p>
              </div>
              <div className="h-[2.5rem] bg-gray-400 w-[1px]"></div>
              <div className="flex items-center flex-col gap-1">
                <p className="text-xs text-gray-600 text-center">Bathrooms</p>
                <p className="text-base font-medium text-center text-gray-700">
                  {propertyRequest.property.bathrooms} Baths
                </p>
              </div>
              <div className="h-[2.5rem] bg-gray-400 w-[1px]"></div>
              <div className="flex items-center flex-col gap-1">
                <p className="text-xs text-gray-600 text-center">Square Feet</p>
                <p className="text-base font-medium text-center text-gray-700">
                  {formatPrice(propertyRequest.property.sizeSqFt)} sq ft
                </p>
              </div>
              <div className="h-[2.5rem] bg-gray-400 w-[1px]"></div>
              <div className="flex items-center flex-col gap-1">
                <p className="text-xs text-gray-600 text-center">Type</p>
                <p className="text-base font-medium text-center text-gray-700">
                  apartment
                </p>
              </div>
            </div>
            <div className="mt-7 w-full">
              <h1 className="font-semibold text-base text-gray-800">
                Description
              </h1>
              <p className="text-[13px] text-gray-600">
                {propertyRequest.property.description}
              </p>
            </div>
          </div>
          <AgentInfo agent={agentRequest.agent} />
        </div>
      </div>
    </section>
  );
}

export default PropertyDetails;
