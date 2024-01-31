/* eslint-disable react/prop-types */
import { useEffect, useState } from "react";

// 0 1 2
// 3 4 5
// 6 7 8
function ShunChowkdi() {
  const [squere, setSquere] = useState([...Array(9).fill("")]);
  const [value, setValue] = useState("O");
  const [winner, setWinner] = useState("");
  console.log(squere);
  function handelClick(index) {
    if (squere[index] !== "") return;
    if (winner !== "") return;
    let cpysqure = [...squere];
    cpysqure[index] = value;
    setSquere(cpysqure);
    setValue(() => {
      return value === "O" ? "X" : "O";
    });
  }
  const winningPattern = [
    [0, 1, 2],
    [3, 4, 5],
    [6, 7, 8],
    [0, 3, 6],
    [1, 4, 7],
    [2, 5, 8],
    [0, 4, 8],
    [6, 4, 2],
  ];
  function handelWin() {
    for (let i = 0; i < winningPattern.length; i++) {
      // console.log(winningPattern[i]);
      const [x, y, z] = winningPattern[i];
      if (squere[x] && squere[x] === squere[y] && squere[y] === squere[z]) {
        setWinner(squere[x]);
      }
    }
  }
  function handelReset() {
    setSquere([...Array(9).fill("")]);
    setValue("O");
    setWinner("");
  }
  useEffect(() => handelWin(), [value]);
  if (winner !== "") {
    return (
      <div className=" flex flex-col justify-center  items-center h-screen w-full gap-5 font-bold bg-black">
        <div className=" text-blue-700  text-4xl ">{`${winner} is winner`}</div>
        <button
          className=" bg-blue-700 text-blue-950 py-2 px-4 rounded-md text-xl"
          onClick={() => handelReset()}
        >
          Restart
        </button>
      </div>
    );
  }
  if (squere.filter((i) => i === "").length === 0 && winner === "") {
    return (
      <div className=" flex flex-col justify-center  items-center h-screen w-full gap-5 font-bold  bg-black">
        <div className=" text-blue-700  text-4xl ">{`Match is draw`}</div>
        <button
          className=" bg-blue-700 text-blue-950 py-2 px-4 rounded-md text-xl"
          onClick={() => handelReset()}
        >
          Restart
        </button>
      </div>
    );
  }
  return (
    <div className=" flex flex-col gap-4  bg-black h-screen w-full justify-center items-center  font-bold text-sky-500">
      <div className="grid  border-solid border-2 border-sky-500  grid-cols-3">
        {[...Array(9)].map((_, index) => (
          <div
            key={index}
            className="cursor-pointer border-solid border-2 border-sky-500 text-5xl  font-bold overflow-hidden h-32 w-32"
          >
            <Squere
              handelClick={() => handelClick(index)}
              index={index}
              squere={squere}
            />
          </div>
        ))}
      </div>
      <div className=" font-bold text-4xl">{`Now '${value}' is playing`}</div>
    </div>
  );
}
function Squere({ handelClick, index, squere }) {
  return (
    <button onClick={handelClick} className=" w-full bg-blue-950/50 h-[100%]">
      {squere[index]}
    </button>
  );
}
export default ShunChowkdi;
