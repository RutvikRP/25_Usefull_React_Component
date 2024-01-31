/* eslint-disable react/prop-types */
import { useState } from "react";

function ModelWindow() {
  const [open, setOpen] = useState(false);
  function handelWindow() {
    setOpen(!open);
  }
  return (
    <>
      <div
        className="flex  z-0 h-screen w-full  bg-stone-900 justify-center  "
        onClick={open && handelWindow}
      >
        {open ? <Window handelWindow={handelWindow} /> : null}
        {/* {open ? (
          <Window
            handelWindow={handelWindow}
            header={"a b c d e f g"}
            body={"any bodu nvndnvkdn nvodvn"}
          />
        ) : null} */}
        <button
          className="h-8 w-16 py-1 px-2 text-green-800 bg-green-400 rounded-md mt-10 "
          onClick={handelWindow}
        >
          Click
        </button>
      </div>
    </>
  );
}
function Window({ handelWindow, header, body }) {
  return (
    <div className="fixed z-1  top-[50%] left-[50%]  -translate-x-[50%] -translate-y-[50%]  ">
      <div
        className="relative w-full flex flex-col  h-full justify-center items-center  bg-green-100 rounded-md"
        onClick={(e) => e.stopPropagation()}
      >
        <header>
          {header ? (
            <h1 className="font-bold text-2xl text-green-400">{header}</h1>
          ) : (
            <h1 className=" font-bold text-2xl text-green-400">
              Window Header
            </h1>
          )}
        </header>
        {body ? (
          <div className="p-4">{body}</div>
        ) : (
          <div className="p-4">
            <p>
              Lorem ipsum dolor sit amet, consectetur adipisicing elit. Natus ad
              nobis atque neque illum iste temporibus maxime officiis saepe,
              exercitationem molestias omnis fuga vitae dolore delectus esse sed
              vel dolores.
            </p>
          </div>
        )}
        <span
          className="   absolute  top-1 right-1 cursor-pointer"
          onClick={handelWindow}
        >
          ❌
        </span>
      </div>
    </div>
  );
}
export default ModelWindow;
