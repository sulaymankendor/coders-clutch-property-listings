import LocationIcon from "../svgs/LocationIcon";
import AgentInfo from "../propertyDetails/AgentInfo";
import { Navigate, useParams } from "react-router-dom";
import { useGetPropertyByID } from "@/hooks/useGetPropertyByID";
import { formatPrice } from "@/utils/formatPrice";
import { useGetAgentByID } from "@/hooks/useGetAgentByID";
import FiveStarsRate from "../reusables/FiveStarsRate";

function PropertyDetails() {
  const { id } = useParams();

  const { propertyRequest, notFound } = useGetPropertyByID(Number(id));
  const { agentRequest } = useGetAgentByID(Number(id));
  if (notFound) {
    return <Navigate to="/not-found" replace />;
  }
  return (
    <section className="w-full max-w-7xl mt-20 sm:mt-24 lg:mt-32 mx-auto px-4 sm:px-6 lg:px-8">
      <div>
        {!propertyRequest.isLoading && (
          <img
            //@ts-ignore
            src={propertyRequest.property.imageUrl}
            alt="hero img"
            width={1920}
            height={1080}
            // Reduced heights from h-[250px]... to h-[200px]...
            className="w-full h-[200px] sm:h-[300px] md:h-[350px] lg:h-[350px] rounded-2xl object-cover"
          />
        )}
      </div>

      <div className="mt-6 lg:mt-8">
        <div className="grid grid-cols-1 lg:grid-cols-[2fr_1fr] gap-8 lg:gap-12">
          <div className="space-y-6">
            <div>
              <h1 className="font-bold text-xl text-gray-900 mb-2">
                {propertyRequest.property.name}
              </h1>
              <div className="flex items-center gap-3 mb-3">
                <FiveStarsRate rating={propertyRequest.property.rating} />
                <span className="text-sm text-gray-500">
                  ({propertyRequest.property.rating}/5)
                </span>
              </div>
              <div className="flex items-center gap-2">
                <LocationIcon size="size-5" />
                <p className="text-sm sm:text-base text-gray-600">
                  {propertyRequest.property.location}
                </p>
              </div>
            </div>

            <div className="grid grid-cols-2 sm:grid-cols-4 gap-4 bg-gray-50 border border-gray-200 rounded-xl p-4 sm:p-6">
              <div className="text-center">
                <p className="text-xs sm:text-sm text-gray-500 mb-1">
                  Bedrooms
                </p>
                <p className="text-lg sm:text-xl font-semibold text-gray-900">
                  {propertyRequest.property.bedrooms}
                </p>
                <p className="text-xs text-gray-400">Rooms</p>
              </div>
              <div className="text-center">
                <p className="text-xs sm:text-sm text-gray-500 mb-1">
                  Bathrooms
                </p>
                <p className="text-lg sm:text-xl font-semibold text-gray-900">
                  {propertyRequest.property.bathrooms}
                </p>
                <p className="text-xs text-gray-400">Baths</p>
              </div>
              <div className="text-center">
                <p className="text-xs sm:text-sm text-gray-500 mb-1">
                  Square Feet
                </p>
                <p className="text-lg sm:text-xl font-semibold text-gray-900">
                  {formatPrice(propertyRequest.property.sizeSqFt)}
                </p>
                <p className="text-xs text-gray-400">sq ft</p>
              </div>
              <div className="text-center">
                <p className="text-xs sm:text-sm text-gray-500 mb-1">Price</p>
                <p className="text-lg sm:text-xl font-semibold text-sky-600">
                  D{formatPrice(propertyRequest.property.pricePerMonth)}
                </p>
                <p className="text-xs text-gray-400">monthly</p>
              </div>
            </div>

            <div className="bg-white border border-gray-200 rounded-xl p-4 sm:p-6">
              <h2 className="font-semibold text-lg sm:text-xl text-gray-900 mb-3">
                Description
              </h2>
              <p className="text-sm text-gray-600 leading-relaxed">
                {propertyRequest.property.description}
              </p>
            </div>
          </div>

          <div className="lg:sticky lg:top-24 lg:self-start">
            <AgentInfo agent={agentRequest.agent} />
          </div>
        </div>
      </div>
    </section>
  );
}

export default PropertyDetails;
