import { Locations } from "../reusables/Locations";
import SearchBar from "../reusables/SearchBar";

function AgentsSearch() {
  return (
    <div className="mb-10">
      <div className="flex w-full mx-auto items-center gap-4">
        <SearchBar className="w-[40%]" />
      </div>
      <div>
        <div className="flex justify-between items-center w-full mx-auto mt-5">
          <p className="text-sm text-gray-600">
            <span className="font-semibold text-xl text-gray-800">
              100 Results
            </span>{" "}
            in Kunkujang Keitaya
          </p>
          <div className="flex items-center gap-1">
            <Locations />
            {/* <Locations /> */}
          </div>
        </div>
      </div>
    </div>
  );
}

export default AgentsSearch;
