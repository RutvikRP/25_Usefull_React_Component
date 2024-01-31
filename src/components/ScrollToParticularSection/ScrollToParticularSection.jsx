import { useRef } from "react";

function ScrollToParticularSection() {
  const redRef = useRef(null);
  const greenRef = useRef(null);
  const purpleRef = useRef(null);
  const blueRef = useRef(null);

  return (
    <div className=" flex flex-col gap-4 relative">
      <div className=" fixed top-20  flex gap-2  pt-4 py-2 px-4  bg-blue-800/50">
        <button
          className=" bg-red-500 py-1 px-2 rounded-md"
          onClick={() => {
            redRef.current.scrollIntoView({ behavior: "smooth" });
          }}
        >
          RED
        </button>
        <button
          className="bg-green-500 py-1 px-2 rounded-md"
          onClick={() => {
            greenRef.current.scrollIntoView({ behavior: "smooth" });
          }}
        >
          GREEN
        </button>
        <button
          className=" bg-purple-500 py-1 px-2 rounded-md"
          onClick={() => {
            purpleRef.current.scrollIntoView({ behavior: "smooth" });
          }}
        >
          PURPLE
        </button>
        <button
          className=" bg-blue-500 py-1 px-2 rounded-md"
          onClick={() => {
            blueRef.current.scrollIntoView({ behavior: "smooth" });
          }}
        >
          BLUE
        </button>
      </div>
      <div className="flex flex-col gap-4 text-4xl font-bold">
        <div ref={redRef} className=" h-screen w-full bg-red-500 text-red-100 ">
          This is Red
        </div>
        <div
          ref={greenRef}
          className=" h-screen w-full bg-green-500 text-green-100"
        >
          This is green
        </div>
        <div
          ref={purpleRef}
          className=" h-screen w-full bg-purple-500 text-purple-100"
        >
          This is purple
        </div>
        <div
          ref={blueRef}
          className=" h-screen w-full bg-blue-500 text-blue-100"
        >
          This is blue
        </div>
      </div>
    </div>
  );
}

export default ScrollToParticularSection;
