/* eslint-disable react/prop-types */
/* eslint-disable react/prop-types */
import { useState } from "react";
import data from "./data";
function Accordian() {
  const [select, setSelect] = useState(null);
  const [multi, setMulti] = useState(false);
  const [multiSelect, setMultiSelect] = useState([]);
  function handelSingleClick(currentID) {
    select === currentID ? setSelect(null) : setSelect(currentID);
    // console.log(select);
  }
  function handelMultiSelection(currentID) {
    let cpymultiSelect = [...multiSelect];
    if (!cpymultiSelect.includes(currentID)) {
      cpymultiSelect.push(currentID);
    } else {
      cpymultiSelect.splice(cpymultiSelect.indexOf(currentID), 1);
    }
    setMultiSelect(cpymultiSelect);
  }
  return (
    <>
      <h1 className="font-bold text-5xl text-green-500 text-center mb-5">
        Accordian
      </h1>
      <button
        className="px-2 py-4 bg-green-400 ml-[50%] -translate-x-[50%] mt-10"
        onClick={() => setMulti(!multi)}
      >
        {multi ? "multiSelect is now on" : "multiSelect is now off"}
      </button>

      <div className="flex flex-col  w-[50remx] item-center ml-[50%]  -translate-x-[50%]  text-green-500  p-20 mt-10 gap-4">
        {data && data.length > 0 ? (
          data.map((item) => (
            <ItemBlock
              item={item}
              key={item.id}
              select={select}
              handelSingleClick={handelSingleClick}
              handelMultiSelection={handelMultiSelection}
              multi={multi}
              multiSelect={multiSelect}
            />
          ))
        ) : (
          <div>No Data </div>
        )}
      </div>
    </>
  );
}
function ItemBlock({
  item,
  select,
  handelSingleClick,
  handelMultiSelection,
  multi,
  multiSelect,
}) {
  return (
    <>
      <div className="flex justify-between w-108 bg-green-800 rounded-md flex-col  ">
        <div
          onClick={
            multi
              ? () => handelMultiSelection(item.id)
              : () => handelSingleClick(item.id)
          }
          className="flex justify-between px-4 py-4"
        >
          <h1 className=" font-bold text-2xl ">{item.question}</h1>
          <span className=" text-green-400 font-semibold text-4xl">
            {item.id === select ? "-" : "+"}
          </span>
        </div>
        {multi
          ? multiSelect.includes(item.id) && (
              <div className="text-xl  bg-green-200 px-4 py-4 rounded-b-md font-semibold ">
                {item.answer}
              </div>
            )
          : item.id === select && (
              <div className="text-xl  bg-green-200 px-4 py-4 rounded-b-md font-semibold ">
                {item.answer}
              </div>
            )}
        {/* {(multiSelect.includes(item.id) || item.id === select) && (
          <div className="text-xl  bg-green-200 px-4 py-4 rounded-b-md font-semibold ">
            {item.answer}
          </div>
        )} */}
      </div>
    </>
  );
}
export default Accordian;
