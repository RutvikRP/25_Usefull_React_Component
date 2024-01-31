import { useRef } from "react";
import useFetch from "./useFetch";
import useOnClickOutside from "./useOnClickOutside";
import useWindowResizer from "./useWindowResizer";
const api = "https://dummyjson.com/products";
function Test() {
  const [apiData, isLoading, isError] = useFetch(api);
  const ref = useRef();
  const anyComponent = useOnClickOutside(
    "this is a new context for a brand new tesing purpose",
    ref
  );
  const windowSize = useWindowResizer();
  // const [state]=useOnClickOutside(context)

  return (
    <div
      ref={ref}
      className="flex flex-col  w-full h-[100vmx] justify-center items-center p-6 gap-4"
    >
      <div className="  flex-col gap-4 ">
        {isLoading ? "Loading is on Going...." : null}
        {isError ? `Error:${isError}` : null}
        {!isLoading && !isError
          ? apiData.products.map((item, i) => (
              <div
                className="border-b-gray-400 border-solid border-2 py-2 px-4"
                key={i}
              >
                {item.title}
              </div>
            ))
          : null}
      </div>
      <div>{anyComponent}</div>
      <div className="flex flex-col ">
        <div>{`window width is : ${windowSize.width}`}</div>
        <div>{`window heigth is: ${windowSize.height}`}</div>
      </div>
    </div>
  );
}
//
export default Test;
