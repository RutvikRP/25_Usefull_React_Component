import { useState } from "react";

const images = [
  {
    url: "https://img.freepik.com/premium-photo/portrait-young-female-athlete-stadium_653240-5866.jpg?w=1380",
  },
  {
    url: "https://img.freepik.com/premium-photo/lgdt-friends-enjoying-joint-celebration-with-confetti-generative-ai_722401-29853.jpg?w=740",
  },
  {
    url: "https://img.freepik.com/premium-photo/lgdt-friends-enjoying-joint-celebration-with-confetti-generative-ai_722401-29853.jpg?w=740",
  },
  {
    url: "https://img.freepik.com/premium-photo/portrait-young-female-athlete-stadium_653240-5866.jpg?w=1380",
  },
  {
    url: "https://img.freepik.com/premium-photo/lgdt-friends-enjoying-joint-celebration-with-confetti-generative-ai_722401-29853.jpg?w=740",
  },
  {
    url: "https://img.freepik.com/premium-photo/lgdt-friends-enjoying-joint-celebration-with-confetti-generative-ai_722401-29853.jpg?w=740",
  },
];
function ImageGenaraterPageDesign() {
  const [selected, setSelected] = useState("");
  function handelSelect(i) {
    setSelected(images[i].url);
  }

  return (
    <div className="flex flex-col justify-between items-center w-full min-h-screen bg-gray-900 text-gray-200 px-10 pb-10">
      <h1 className=" text-4xl text-green-500 font-bold pt-5">
        Image Genarater
      </h1>
      <div className=" w-full flex justify-between py-10">
        <div className=" w-[70%]">
          <input
            type="text"
            className=" w-full h-7 border  text-gray-900 text-sm rounded-lg block py-5 px-5 bg-slate-700 border-gray-500 outline-none placeholder-gray-400 focus:ring-green-500 focus:border-green-500"
            placeholder="hello"
          />
        </div>
        <div className=" flex gap-4">
          <div>
            <select
              id="small"
              className="block w-full p-2  text-sm  border  rounded-lg bg-slate-700 text-slate-400 border-gray-500 outline-none placeholder-gray-400 focus:ring-green-500 focus:border-green-500"
            >
              <option selected>No of amount</option>
              <option value="1">1</option>
              <option value="2">2</option>
              <option value="3">3</option>
              <option value="4">4</option>
              <option value="5">5</option>
              <option value="6">6</option>
              <option value="7">7</option>
              <option value="8">8</option>
              <option value="9">9</option>
              <option value="10">10</option>
            </select>
          </div>
          <div>
            <select
              id="small"
              className="block w-full p-2  text-sm  border  rounded-lg bg-slate-700 text-slate-400 border-gray-500 outline-none placeholder-gray-400 focus:ring-green-500 focus:border-green-500"
            >
              <option selected>Choose a Resolution</option>
              <option value="1080x1980">1080x1980</option>
              <option value="4k">4k</option>
              <option value="hd">hd</option>
              <option value="8k">8k</option>
            </select>
          </div>
          <button className=" bg-green-500 font-bold text-xl  rounded-md py-2 px-2">
            Search
          </button>
        </div>
      </div>
      <div className=" flex flex-col justify-center items-center py-5">
        {/* <div>
            {selected ? (
              <div className=" flex h-96 w-80 mb-10">
                <img src={selected} className=" w-full h-full block " />
              </div>
            ) : null}
          </div> */}
        <div className="overflow-x-hidden py-4 ">
          <div className="">
            {/* animate-marquee whitespace-nowrap */}
            {images.length >= 4 ? (
              <span className=" grid grid-cols-4 gap-10 overflow-hidden ">
                {images.map((image, i) => (
                  <img
                    key={i}
                    src={image.url}
                    className="  rounded-md h-full w-full hover:scale-105 duration-1000 shadow-sm shadow-green-500"
                    onClick={() => handelSelect(i)}
                  />
                ))}
              </span>
            ) : (
              <span className=" flex w-full overflow-hidden  items-center gap-10 ">
                {images.map((image, i) => (
                  <img
                    key={i}
                    src={image.url}
                    className=" rounded-md h-96 w-80  hover:scale-110 duration-1000 "
                    onClick={() => handelSelect(i)}
                  />
                ))}
              </span>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}

export default ImageGenaraterPageDesign;
