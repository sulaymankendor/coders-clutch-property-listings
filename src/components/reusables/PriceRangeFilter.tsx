import {
  Select,
  SelectContent,
  SelectGroup,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { Banknote } from "lucide-react";

export function PriceRangeFilter() {
  return (
    <Select>
      <SelectTrigger className="min-w-[100px] py-1 rounded-lg text-gray-500 text-xs focus-visible:border focus-visible:border-gray-200 border border-gray-200 shadow-none focus-visible:ring-0">
        <Banknote className="w-4 h-4 mr-2" />
        <SelectValue placeholder="Price Range" />
      </SelectTrigger>
      <SelectContent>
        <SelectGroup>
          {[
            { label: "Under D5,000", value: "0-5000" },
            { label: "D5,000 - D10,000", value: "5000-10000" },
            { label: "D10,000 - D20,000", value: "10000-20000" },
            { label: "D20,000 - D50,000", value: "20000-50000" },
            { label: "D50,000 - D100,000", value: "50000-100000" },
            { label: "D100,000 - D200,000", value: "100000-200000" },
            { label: "D200,000 - D500,000", value: "200000-500000" },
            { label: "Above D500,000", value: "500000+" },
          ].map((priceRange) => {
            return (
              <SelectItem
                key={priceRange.value}
                className="text-[13px] text-gray-500 font-medium"
                value={priceRange.value}
              >
                {priceRange.label}
              </SelectItem>
            );
          })}
        </SelectGroup>
      </SelectContent>
    </Select>
  );
}
