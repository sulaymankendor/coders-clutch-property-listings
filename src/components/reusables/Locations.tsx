import {
  Select,
  SelectContent,
  SelectGroup,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";

export function Locations() {
  return (
    <Select>
      <SelectTrigger className="min-w-[100px] py-1 rounded-lg text-gray-500 text-xs focus-visible:border focus-visible:border-gray-200 border border-gray-200 shadow-none focus-visible:ring-0">
        <SelectValue placeholder="Locations" />
      </SelectTrigger>
      <SelectContent>
        <SelectGroup>
          {[
            "Banjul",
            "Serrekunda",
            "Brikama",
            "Bakau",
            "Farafenni",
            "Lamin",
            "Sukuta",
            "Gunjur",
            "Soma",
            "Basse Santa Su",
            "Janjanbureh",
            "Kerewan",
            "Mansa Konko",
            "Barra",
            "Essau",
            "Kaur",
            "Kuntaur",
            "Georgetown",
            "Wassu",
            "Bansang",
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
