import ButtonIcon from "../reusables/ButtonIcon";
import FiveStarsRate from "../reusables/FiveStarsRate";
import ArrowUpRightIcon from "../svgs/ArrowUpRightIcon";
import BedIcon from "../svgs/BedIcon";
import HeartOutlineIcon from "../svgs/HeartOutlineIcon";
import LocationIcon from "../svgs/LocationIcon";
import ShowerIcon from "../svgs/ShowerIcon";
import SizeIcon from "../svgs/SizeIcon";
import propertyImage from "../../assets/house2.jpg";
import type { propertyType } from "../../utils/type";
import { Link } from "react-router-dom";

function Property({ property }: { property: propertyType }) {
  return (
    <div key={Math.random()}>
      <div className="relative">
        <img
          src={propertyImage}
          alt="house image"
          width={20000000}
          height={20000000}
          className="w-full h-[12rem] rounded-2xl object-cover"
        />
        <ButtonIcon
          icon={<HeartOutlineIcon />}
          //   HeartSolidIcon
          className="absolute top-[4%] right-[3%] transition-all cursor-pointer bg-gray-200 hover:bg-gray-300 p-2 rounded-full"
        />
      </div>
      <div>
        <div className="flex justify-between items-center">
          <h2 className="font-semibold text-lg text-gray-800 mt-2">
            {property.name}
          </h2>
          <FiveStarsRate rating={5} size={"size-[14px]"} />
        </div>
        <div className="flex justify-between items-center">
          <div>
            <div className="flex items-center mb-1 gap-[2px]">
              <LocationIcon size="size-4" />
              <p className="text-xs text-gray-600">The Gambia, Kanifing</p>
            </div>
            <p className="text-sm text-sky-800 font-semibold mb-2">
              {/* D{formatPrice(Number(property.price))}/monthly */}D
              {property.pricePerMonth}/monthly
            </p>
          </div>
          <Link
            // to={`/properties/${property.name}`} //to be changed
            to={`/property/${property.id}`}
            className="cursor-pointer bg-sky-600 hover:bg-sky-700 transition-all p-2 rounded-full"
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
