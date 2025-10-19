import {
  Select,
  SelectContent,
  SelectGroup,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { PRICE_RANGES } from "@/utils/data";
import { Banknote } from "lucide-react";
import { useMemo, useCallback } from "react";

interface FilterState {
  location: string;
  priceRange: {
    minimum: number;
    maximum: number;
  };
  sortBy: string;
}

interface PriceRangeFilterProps {
  filter: FilterState;
  setFilter: React.Dispatch<React.SetStateAction<FilterState>>;
  setSearchText: React.Dispatch<React.SetStateAction<string>>;
}

export function PriceRangeFilter({
  filter,
  setFilter,
  setSearchText,
}: PriceRangeFilterProps) {
  // Memoize current value to avoid recalculation on every render
  const currentValue = useMemo(() => {
    const { minimum, maximum } = filter.priceRange;
    if (minimum === 0 && maximum === 0) return "";
    if (minimum === 500000 && maximum === Infinity) return "500000-Infinity";
    return `${minimum}-${maximum}`;
  }, [filter.priceRange.minimum, filter.priceRange.maximum]);

  // Memoize handler to prevent recreation on every render
  const handlePriceRangeChange = useCallback(
    (selectedPriceRange: string) => {
      setSearchText("");

      const dashIndex = selectedPriceRange.indexOf("-");
      const minStr = selectedPriceRange.slice(0, dashIndex);
      const maxStr = selectedPriceRange.slice(dashIndex + 1);
      const maximum = maxStr === "Infinity" ? Infinity : Number(maxStr);

      setFilter((prev) => ({
        ...prev,
        location: "",
        sortBy: "",
        priceRange: {
          minimum: Number(minStr),
          maximum,
        },
      }));
    },
    [setFilter, setSearchText]
  );

  return (
    <Select value={currentValue} onValueChange={handlePriceRangeChange}>
      <SelectTrigger className="min-w-[100px] py-1 rounded-lg text-gray-500 text-xs focus-visible:border focus-visible:border-gray-200 border border-gray-200 shadow-none focus-visible:ring-0">
        <Banknote className="w-4 h-4 mr-2" />
        <SelectValue placeholder="Price Range" />
      </SelectTrigger>
      <SelectContent>
        <SelectGroup>
          {PRICE_RANGES.map((priceRange) => (
            <SelectItem
              key={priceRange.value}
              className="text-[13px] text-gray-500 font-medium"
              value={priceRange.value}
            >
              {priceRange.label}
            </SelectItem>
          ))}
        </SelectGroup>
      </SelectContent>
    </Select>
  );
}
