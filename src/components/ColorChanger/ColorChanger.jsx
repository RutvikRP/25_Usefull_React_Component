import { useState } from "react";

function ColorChanger() {
  const btn = "px-4 py-2 bg-slate-400 text-slate-800 font-bold rounded-md";
  const [typeOfcolor, setTypeOfcolor] = useState("hex");
  const [color, setcolor] = useState("#000000");
  function randomGenarater(length) {
    return Math.floor(Math.random() * length);
  }
  function handelHexColor() {
    const selectionList = [
      1,
      2,
      3,
      4,
      5,
      6,
      7,
      8,
      9,
      "A",
      "B",
      "C",
      "D",
      "E",
      "F",
    ];
    let random = "#";
    for (let i = 0; i < 6; i++) {
      random += selectionList[randomGenarater(selectionList.length)];
    }
    setcolor(`${random}`);
  }
  function handelRgbColor() {
    let r1 = randomGenarater(256);
    let r2 = randomGenarater(256);
    let r3 = randomGenarater(256);
    let random = `rgb(${r1}, ${r2}, ${r3})`;
    setcolor(random);
    console.log(random);
  }
  return (
    <div
      style={{
        height: "40vh",
        width: "40vw",
        background: color,
        display: "flex",
        flexDirection: "column",
        marginLeft: "50%",
        transform: "translate(-50%)",
      }}
    >
      <div className="flex gap-4 justify-center pt-2 ">
        <button
          className={btn}
          onClick={() => {
            return setTypeOfcolor("rgb"), handelRgbColor();
          }}
        >
          RGB COLOR
        </button>
        <button
          className={btn}
          onClick={() => {
            return setTypeOfcolor("hex"), handelHexColor();
          }}
        >
          HEXA COLOR
        </button>
        <button
          className={btn}
          onClick={typeOfcolor === "hex" ? handelHexColor : handelRgbColor}
        >
          GENERATE RANDOM COLOR ANY
        </button>
      </div>
      <div className="flex justify-center gap-40  mt-20">
        <h1 className=" text-[60px] font-bold text-white">{typeOfcolor}</h1>
        <h1 className=" text-[60px] font-bold text-white">{color}</h1>
      </div>
    </div>
  );
}

export default ColorChanger;
