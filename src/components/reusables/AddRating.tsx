import React, { useState } from "react";

function AddRating({
  rate,
  setRate,
}: {
  rate: number;
  setRate: React.Dispatch<React.SetStateAction<number>>;
}) {
  const [hoveredStar, setHoveredStar] = useState(0);
  return (
    <div className="mt-10">
      {[...Array(5)].map((_, index) => {
        return (
          <button
            key={index}
            onClick={() => {
              if (index + 1 === rate) {
                setRate(0);
              } else {
                setRate(index + 1);
              }
            }}
            onMouseOver={() => setHoveredStar(index + 1)}
            onMouseLeave={() => setHoveredStar(0)}
            className={`cursor-pointer ${
              index + 1 <= hoveredStar ? "fill-yellow-400" : "fill-gray-400"
            } 
            ${index + 1 <= rate ? "fill-yellow-400" : "fill-gray-400"}
            `}
          >
            <svg
              className={`size-5`}
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 640 640"
            >
              <path d="M341.5 45.1C337.4 37.1 329.1 32 320.1 32C311.1 32 302.8 37.1 298.7 45.1L225.1 189.3L65.2 214.7C56.3 216.1 48.9 222.4 46.1 231C43.3 239.6 45.6 249 51.9 255.4L166.3 369.9L141.1 529.8C139.7 538.7 143.4 547.7 150.7 553C158 558.3 167.6 559.1 175.7 555L320.1 481.6L464.4 555C472.4 559.1 482.1 558.3 489.4 553C496.7 547.7 500.4 538.8 499 529.8L473.7 369.9L588.1 255.4C594.5 249 596.7 239.6 593.9 231C591.1 222.4 583.8 216.1 574.8 214.7L415 189.3L341.5 45.1z" />
            </svg>
          </button>
        );
      })}
    </div>
  );
}

export default AddRating;
