import FiveStarsRate from "../reusables/FiveStarsRate";
import ArrowUpRightIcon from "../svgs/ArrowUpRightIcon";
import BedIcon from "../svgs/BedIcon";
import LocationIcon from "../svgs/LocationIcon";
import ShowerIcon from "../svgs/ShowerIcon";
import SizeIcon from "../svgs/SizeIcon";
import type { propertyType } from "../../utils/type";
import { Link } from "react-router-dom";
import { formatPrice } from "@/utils/formatPrice";

function Property({ property }: { property: propertyType }) {
  return (
    <div key={Math.random()}>
      <img
        src={property.imageUrl}
        alt="house image"
        width={20000000}
        height={20000000}
        className="w-full h-[12rem] sm:h-[14rem] lg:h-[12rem] rounded-2xl object-cover"
      />

      <div>
        <div className="flex justify-between items-center flex-wrap gap-2">
          <h2 className="font-semibold text-base sm:text-lg text-gray-800 mt-2">
            {property.name}
          </h2>
          <FiveStarsRate rating={property.rating} size={"size-[14px]"} />
        </div>
        <div className="flex justify-between items-start gap-2">
          <div className="flex-1">
            <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-1 sm:gap-2">
              <div className="flex items-center mb-1 gap-[2px]">
                <LocationIcon size="size-4" />
                <p className="text-xs text-gray-600">{property.location}</p>
              </div>
              <p className="text-sm text-sky-800 font-semibold mb-2">
                D{formatPrice(Number(property.pricePerMonth))}/monthly
              </p>
            </div>

            <p className="text-xs text-gray-700 w-full sm:w-[90%] mb-2 line-clamp-2">
              {property.description}
            </p>
          </div>
          <Link
            to={`/properties/${property.id}`}
            className="cursor-pointer mt-7 bg-sky-600 hover:bg-sky-700 transition-all p-2 rounded-full flex-shrink-0"
          >
            <ArrowUpRightIcon />
          </Link>
        </div>
        <div className="flex items-center justify-between w-full sm:w-[80%] lg:w-[70%] flex-wrap gap-2">
          <div className="flex items-center gap-1">
            <BedIcon size="size-4" />
            <p className="text-xs text-gray-600">{property.bedrooms} Rooms</p>
          </div>
          <div className="flex items-center gap-1">
            <ShowerIcon size="size-4" />
            <p className="text-xs text-gray-600">{property.bathrooms} Baths</p>
          </div>
          <div className="flex items-center gap-1">
            <SizeIcon size="size-4" />
            <p className="text-xs text-gray-600">{property.sizeSqFt} sq ft</p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Property;
