import {
  Select,
  SelectContent,
  SelectGroup,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { MapPin } from "lucide-react";
import { useEffect } from "react";

export function Locations({
  filter,
  setFilter,
  setSearchText,
}: {
  filter: {
    location: string;
    priceRange: {
      minimum: number;
      maximum: number;
    };
    sortBy: string;
  };
  setFilter: React.Dispatch<
    React.SetStateAction<{
      location: string;
      priceRange: {
        minimum: number;
        maximum: number;
      };
      sortBy: string;
    }>
  >;
  setSearchText: React.Dispatch<React.SetStateAction<string>>;
}) {
  return (
    <Select
      onValueChange={(selectedLocation) => {
        setSearchText("");
        setFilter({
          priceRange: { minimum: 0, maximum: 0 },
          sortBy: "",
          location: selectedLocation,
        });
      }}
      value={filter.location}
    >
      <SelectTrigger className="min-w-[100px] py-1 rounded-lg text-gray-500 text-xs focus-visible:border focus-visible:border-gray-200 border border-gray-200 shadow-none focus-visible:ring-0">
        <MapPin className="w-4 h-4 mr-2" />
        <SelectValue placeholder="Locations" />
      </SelectTrigger>
      <SelectContent>
        <SelectGroup>
          {[
            "Downtown, New York",
            "Brooklyn, New York",
            "Soho, New York",
            "Queens, New York",
            "Manhattan, New York",
            "Miami Beach, Florida",
            "Chicago, Illinois",
            "Nashville, Tennessee",
            "San Francisco, California",
            "Austin, Texas",
            "Boston, Massachusetts",
            "Aspen, Colorado",
          ].map((location) => {
            return (
              <SelectItem
                key={location}
                className="text-[13px] text-gray-500 font-medium"
                value={location}
              >
                {location}
              </SelectItem>
            );
          })}
        </SelectGroup>
      </SelectContent>
    </Select>
  );
}
