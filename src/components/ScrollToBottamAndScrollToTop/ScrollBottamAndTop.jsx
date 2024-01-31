import { useRef } from "react";
import useFetch from "../UseFetch-UseOnClickOutside-UseWindowResizer/useFetch";
function ScrollBottamAndTop() {
  const [data, isLoading, isError] = useFetch(
    "https://dummyjson.com/products?limit=100"
  );
  const bottamRef = useRef(null);
  function handelScrollToBottam() {
    bottamRef.current.scrollIntoView({ behavior: "smooth" });
  }
  function handelScrollToTop() {
    window.scrollTo({
      top: 0,
      left: 0,
      behavior: "smooth",
    });
  }
  return (
    <div className=" flex flex-col  w-full justify-center items-center h-[100vmx] p-4 ">
      <button
        className=" flex bg-green-400 text-green-800 rounded-full py-1 px-2 mb-2"
        onClick={handelScrollToBottam}
      >
        Scroll To Bottam
      </button>
      <div>{isLoading ? "Loading is On Going" : null}</div>
      <div>{isError ? `Eroor:${isError}` : null}</div>
      <div>
        {!isLoading && !isError
          ? data.products.map((item, i) => (
              <div
                key={i}
                className="py-2 px-4 border-solid border-gray-500 border-b-2 "
              >
                {item.title}
              </div>
            ))
          : null}
      </div>
      <button
        className="bg-green-400 text-green-800 rounded-full py-1 px-2 mt-2"
        onClick={handelScrollToTop}
      >
        Scroll To Top
      </button>
      <div ref={bottamRef}></div>
    </div>
  );
}

export default ScrollBottamAndTop;
