import {
  Select,
  SelectContent,
  SelectGroup,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { ArrowUpDown } from "lucide-react";

export function SortBy({
  setSearchText,
  setFilter,
  filter,
}: {
  setSearchText: React.Dispatch<React.SetStateAction<string>>;
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
  filter: {
    location: string;
    priceRange: {
      minimum: number;
      maximum: number;
    };
    sortBy: string;
  };
}) {
  return (
    <Select
      onValueChange={(selectedSortByItem) => {
        setSearchText("");

        setFilter({
          location: "",
          sortBy: selectedSortByItem,
          priceRange: {
            minimum: 0,
            maximum: 0,
          },
        });
      }}
      value={filter.sortBy}
    >
      <SelectTrigger className="min-w-[100px] py-1 rounded-lg text-gray-500 text-xs focus-visible:border focus-visible:border-gray-200 border border-gray-200 shadow-none focus-visible:ring-0">
        <ArrowUpDown className="w-4 h-4 mr-2" />
        <SelectValue placeholder="Sort By" />
      </SelectTrigger>
      <SelectContent>
        <SelectGroup>
          {[
            { label: "Most Recent", value: "recent" },
            { label: "Price: Low to High", value: "price-asc" },
            { label: "Price: High to Low", value: "price-desc" },
          ].map((sortOption) => {
            return (
              <SelectItem
                key={sortOption.value}
                className="text-[13px] text-gray-500 font-medium"
                value={sortOption.value}
              >
                {sortOption.label}
              </SelectItem>
            );
          })}
        </SelectGroup>
      </SelectContent>
    </Select>
  );
}
