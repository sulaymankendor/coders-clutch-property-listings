import Listings from "../home/Listings";
import { properties } from "../../utils/data";
import heroImage from "../../assets/house2.jpg";
import ListingSearchFiltering from "../home/ListingSearchFiltering";

function Home() {
  return (
    <section>
      <div className="grid grid-cols-2 [1281px]:w-[70%] w-[75%] max-[1281px]:gap-8 mx-auto">
        <img
          src={heroImage}
          alt="hero image"
          width={20000000}
          height={20000000}
          className="w-[37rem] h-[22rem] rounded-3xl"
        />
        <div className="mt-5 text-start">
          <h1 className="font-medium text-4xl text-gray-800">
            Find your <span className="text-sky-700">Dream Home</span>
          </h1>
          <p className="text-gray-600 text-left [1281px]:text-base text-sm">
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Eveniet
            dicta aliquid ab perferendis facere quod amet numquam ipsum placeat
            molestias quaerat perspiciatis, cupiditate incidunt veniam iste
            earum laboriosam tempore eos.
          </p>
          <div className="flex mb-12 items-center justify-between">
            {[
              { id: 1, name: "Total Properties", stat: "5,200" },
              { id: 2, name: "Agents", stat: "200" },
              { id: 3, name: "Successful Transactions", stat: "2,000" },
              { id: 4, name: "Customers", stat: "12,000" },
            ].map((item) => (
              <div key={item.id} className="mt-4">
                <h2 className="text-xl text-center font-semibold text-gray-800">
                  {item.stat}
                </h2>
                <p className="text-gray-600 text-xs text-center">{item.name}</p>
              </div>
            ))}
          </div>
          <a
            href={"/"}
            className="bg-sky-600 text-sm transition-all hover:bg-sky-700 px-9 py-[15px] text-white rounded-lg font-medium"
          >
            Get Started
          </a>
        </div>
      </div>
      <ListingSearchFiltering />
      <Listings
        // mt={"mt-14"}
        properties={properties}
      />
    </section>
  );
}

export default Home;
