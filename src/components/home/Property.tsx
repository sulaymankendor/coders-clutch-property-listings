import ButtonIcon from "../reusables/ButtonIcon";
import FiveStarsRate from "../reusables/FiveStarsRate";
import ArrowUpRightIcon from "../svgs/ArrowUpRightIcon";
import BedIcon from "../svgs/BedIcon";
import HeartOutlineIcon from "../svgs/HeartOutlineIcon";
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
        className="w-full h-[12rem] rounded-2xl object-cover"
      />

      <div>
        <div className="flex justify-between items-center">
          <h2 className="font-semibold text-lg text-gray-800 mt-2">
            {property.name}
          </h2>
          <FiveStarsRate rating={property.rating} size={"size-[14px]"} />
        </div>
        <div className="flex justify-between items-center">
          <div>
            <div className="flex items-center justify-between">
              <div className="flex items-center mb-1 gap-[2px]">
                <LocationIcon size="size-4" />
                <p className="text-xs text-gray-600">{property.location}</p>
              </div>
              <p className="text-sm text-sky-800 font-semibold mb-2">
                D{formatPrice(Number(property.pricePerMonth))}/monthly
              </p>
            </div>

            <p className="text-xs text-gray-700 w-[90%] mb-2 line-clamp-2">
              {property.description}
            </p>
          </div>
          <Link
            // to={`/properties/${property.name}`} //to be changed
            to={`/property/${property.id}`}
            className="cursor-pointer mt-7 bg-sky-600 hover:bg-sky-700 transition-all p-2 rounded-full"
          >
            <ArrowUpRightIcon />
          </Link>
        </div>
        <div className="flex items-center justify-between w-[70%]">
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
            <p className="text-xs text-gray-600">
              {/* {formatPropertySize(property.size)} sq ft */}
              {property.sizeSqFt} sq ft
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Property;
