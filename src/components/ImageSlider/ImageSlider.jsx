/* eslint-disable react/prop-types */
/* eslint-disable no-unused-vars */
import { useEffect, useState } from "react";
import { FaArrowCircleLeft, FaArrowCircleRight } from "react-icons/fa";

function ImageSlider({ url, page = "1", limit = "10" }) {
  const [images, setImages] = useState([]);
  const [currentSlide, setCurrentSlide] = useState(0);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);
  async function fetchImages(url) {
    try {
      setLoading(true);
      const res = await fetch(`${url}?page=${page}&limit=${limit}`);
      const data = await res.json();
      setImages(data);
      setLoading(false);
    } catch (e) {
      setError(e.message);
      setLoading(false);
    }
  }
  useEffect(() => {
    if (url !== "") fetchImages(url);
  }, [url]);
  if (loading) {
    return <div>{`Loading is on Going`}</div>;
  }
  if (error !== null) {
    return <div>{`Error Ocuurce : ${error}`}</div>;
  }
  function handelPrevious() {
    setCurrentSlide(currentSlide === 0 ? images.length - 1 : currentSlide - 1);
  }
  function handelNext() {
    setCurrentSlide(currentSlide === images.length - 1 ? 0 : currentSlide + 1);
  }
  return (
    <div className=" flex mt-10 justify-center">
      <div className=" relative flex w-[600PX] h-[600PX]  items-center justify-center">
        <FaArrowCircleLeft
          onClick={handelPrevious}
          className=" absolute w-8 h-8   left-4"
        />
        {images && images.length
          ? images.map((img, index) => (
              <img
                key={img.id}
                src={img.download_url}
                alt={img.download_url}
                className={
                  currentSlide === index
                    ? " h-full w-full rounded-md shadow-md"
                    : " hidden"
                }
              />
            ))
          : null}
        <FaArrowCircleRight
          onClick={handelNext}
          className=" absolute w-8 h-8  right-4"
        />
        <span className=" flex gap-2 absolute bottom-4  justify-center ">
          {images && images.length
            ? images.map((_, index) => (
                <div
                  key={index}
                  className={
                    currentSlide === index
                      ? " h-4 w-4 rounded-full bg-gray-200"
                      : " h-4 w-4 rounded-full bg-gray-400/50 "
                  }
                  onClick={() => setCurrentSlide(index)}
                ></div>
              ))
            : null}
        </span>
      </div>
    </div>
  );
}
export default ImageSlider;
