/* eslint-disable react/prop-types */
import { useState } from "react";
import { FaStar } from "react-icons/fa";
function StarRating({ noOfStar = 5 }) {
  const [rating, setRating] = useState(0);
  const [hoverRating, setHoverRating] = useState(0);
  function handelClick(getCurrentId) {
    setRating(getCurrentId);
  }
  function handelMouseEnter(getCurrentId) {
    setHoverRating(getCurrentId);
  }
  function handelMouseLeave() {
    setHoverRating(rating);
  }
  return (
    <div className="flex justify-center">
      {[...Array(noOfStar)].map((_, index) => {
        index += 1;

        return (
          <FaStar
            key={index}
            className={`${
              index <= (hoverRating || rating)
                ? "text-yellow-500"
                : "text-black"
            }`}
            onClick={() => handelClick(index)}
            onMouseMove={() => handelMouseEnter(index)}
            onMouseLeave={() => handelMouseLeave()}
            size={80}
          />
        );
      })}
    </div>
  );
}

export default StarRating;
