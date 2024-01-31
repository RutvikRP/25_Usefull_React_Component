import useLocalStorage from "./useLocalStorage";

function LightDark() {
  const [theam, setTheam] = useLocalStorage("theam", "dark");
  function handelToggleTheam() {
    setTheam(theam === "light" ? "dark" : "light");
  }
  return (
    <div
      className={`w-full h-screen ${
        theam === "dark" ? "bg-black text-white" : "bg-white text-black"
      } `}
    >
      <div className={`pt-52 flex  justify-center`}>
        <div className=" flex flex-col gap-2">
          <h1 className="flex items-center justify-center text-5xl font-bold ">
            Sita Ram
          </h1>
          <button
            className={`py-1 px-2 rounded-md font-semibold ${
              theam === "dark" ? " bg-white text-black" : "bg-black text-white"
            }`}
            onClick={handelToggleTheam}
          >
            Change Theam
          </button>
        </div>
      </div>
    </div>
  );
}

export default LightDark;
