import { useState } from "react";

function useOnClickOutside(context, ref) {
  const [state, setState] = useState(false);

  // console.log(ref.current);
  function handelClick(e) {
    state ? e.stopPropagation() : setState(!state);
  }
  function handelOutSideClick() {
    state ? setState(false) : null;
  }
  if (ref.current) {
    ref.current.addEventListener("click", handelOutSideClick);
  }

  return (
    <div onClick={() => handelOutSideClick()} className=" w-full">
      <div
        onClick={(e) => handelClick(e)}
        className="bg-green-500 text-green-200 py-1 px-2 rounded-md font-bold"
      >
        {state ? context : <button className="">Click me</button>}
      </div>
    </div>
  );
}

export default useOnClickOutside;
