import LocationIcon from "../svgs/LocationIcon";
import AgentInfo from "../propertyDetails/AgentInfo";
import PropertyInfo from "../propertyDetails/PropertyInfo";
import { useParams } from "react-router-dom";
import propertyImg from "../../assets/house2.jpg";

function PropertyDetails() {
  const { id } = useParams();
  console.log(id);
  return (
    <section className="w-[90%] mt-32 mx-auto">
      <div className="grid grid-cols-[1fr_15rem] gap-5">
        {true && (
          <img
            src={propertyImg}
            alt="hero img"
            width={1920} // or the actual img width
            height={1080} // or the actual img height
            className="w-full h-[25rem] rounded-xl object-cover"
          />
        )}
        <div className="w-full grid gap-5">
          {true && (
            <img
              src={propertyImg}
              alt="hero img"
              width={1920} // or the actual img width
              height={1080} // or the actual img height
              className="w-full h-full rounded-xl object-cover"
            />
          )}
          {true && (
            <img
              src={propertyImg}
              alt="hero img"
              width={1920} // or the actual img width
              height={1080} // or the actual img height
              className="w-full h-full rounded-xl object-cover"
            />
          )}
        </div>
      </div>
      <div>
        <div className="flex justify-between items-start mt-3">
          <div>
            <h1 className="font-semibold text-2xl text-gray-800">ksd </h1>
            <div className="flex items-center mb-1 gap-[2px] mt-2">
              <LocationIcon size="size-4" />
              <p className="text-xs text-gray-600">kfd </p>
            </div>
            <div className="flex items-center mt-4 justify-between w-[35rem] border border-gray-400 rounded-lg px-9 py-4">
              <div className="flex items-center flex-col gap-1">
                <p className="text-xs text-gray-600 text-center">Bedrooms</p>
                <p className="text-base text-center font-medium text-gray-700">
                  3 Rooms
                </p>
              </div>
              <div className="h-[2.5rem] bg-gray-400 w-[1px]"></div>
              <div className="flex items-center flex-col gap-1">
                <p className="text-xs text-gray-600 text-center">Bathrooms</p>
                <p className="text-base font-medium text-center text-gray-700">
                  4 Baths
                </p>
              </div>
              <div className="h-[2.5rem] bg-gray-400 w-[1px]"></div>
              <div className="flex items-center flex-col gap-1">
                <p className="text-xs text-gray-600 text-center">Square Feet</p>
                <p className="text-base font-medium text-center text-gray-700">
                  2,300 sq ft
                </p>
              </div>
              <div className="h-[2.5rem] bg-gray-400 w-[1px]"></div>
              <div className="flex items-center flex-col gap-1">
                <p className="text-xs text-gray-600 text-center">Status</p>
                <p className="text-base font-medium text-center text-gray-700">
                  apartment
                </p>
              </div>
            </div>
          </div>
          <AgentInfo />
        </div>

        <PropertyInfo listing={[]} />
      </div>
    </section>
  );
}

export default PropertyDetails;
