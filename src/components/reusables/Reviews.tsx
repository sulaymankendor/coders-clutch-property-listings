import { useState } from "react";
import FiveStarsRate from "./FiveStarsRate";
import AddRating from "./AddRating";

const SpinnerLoading = () => {
  return (
    <div
      style={{
        width: "20px",
        height: "20px",
        border: "2px solid #e5e7eb",
        borderTop: "2px solid #3b82f6",
        borderRadius: "50%",
        animation: "spin 1s linear infinite",
      }}
    >
      <style>{`
        @keyframes spin {
          0% {
            transform: rotate(0deg);
          }
          100% {
            transform: rotate(360deg);
          }
        }
      `}</style>
    </div>
  );
};

function Reviews() {
  const [rate, setRate] = useState(0);
  const [review, setReview] = useState("");
  const [isPosting] = useState(false);

  const [listOfReviews] = useState<Array<{ id: string; [key: string]: any }>>(
    []
  );

  return (
    <div>
      <h1 className="font-semibold text-lg text-gray-800">
        {listOfReviews.length} Reviews
      </h1>
      <AddRating setRate={setRate} rate={rate} />
      <div className="flex items-center gap-4 mb-10 mt-6">
        <img
          src="/profile.jpg"
          alt="hero image"
          width={1920} // or the actual image width
          height={1080} // or the actual image height
          className="size-12 rounded-full object-cover"
        />
        <input
          placeholder="Add a review"
          value={review}
          onChange={(event) => setReview(event.target.value)}
          className="border-b w-[70%] text-sm font-medium focus:outline-0"
        />
        <button className="cursor-pointer bg-sky-600 hover:bg-sky-700 transition-all text-white font-medium w-[6rem] py-[7px] text-sm rounded-full">
          {isPosting ? (
            <div className="mx-auto w-fit">
              <SpinnerLoading />
            </div>
          ) : (
            "Post"
          )}
        </button>
      </div>
      <div className="w-[70%]">
        {listOfReviews.map((userReview, index) => {
          return (
            <div key={index} className="flex gap-3 mt-7 w-full">
              <img
                src="/profile.jpg"
                alt="hero image"
                width={1920} // or the actual image width
                height={1080} // or the actual image height
                className="size-12 rounded-full object-cover"
              />
              <div className="w-full">
                <div className="flex items-center justify-between">
                  <div>
                    <h1 className="text-sm font-semibold text-gray-800">
                      Sulayman Kendor
                    </h1>
                    <FiveStarsRate rating={userReview.rate} />
                  </div>
                  <p className="text-xs font-medium text-gray-500">
                    {userReview.createdAt
                      ?.toDate()
                      .toLocaleDateString("en-GB", {
                        day: "numeric",
                        month: "long",
                        year: "numeric",
                      })}
                  </p>
                </div>
                <p className="text-sm text-gray-600 mt-2">
                  {userReview.review}
                </p>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
}

export default Reviews;
