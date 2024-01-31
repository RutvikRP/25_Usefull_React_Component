/* eslint-disable no-unused-vars */
/* eslint-disable react/prop-types */
import { useState } from "react";
import MenuList from "./MenuList";
function MenuItem({ item }) {
  const [displayChildren, setDisplayChildren] = useState({});
  function handelToggleChildren(label) {
    setDisplayChildren({
      ...displayChildren,
      [label]: !displayChildren[label], //lable:true or false
    });
  }
  // console.log(displayChildren);
  return (
    <li className="w-full px-4 py-2 border-b border-gray-200 rounded-t-lg dark:border-gray-600  overflow-hidden ">
      <div className=" flex justify-between w-20">
        <h4>{item.label}</h4>
        {item && item.children && item.children.length > 0 ? (
          <span
            onClick={() => handelToggleChildren(item.label)}
            className="  cursor-pointer"
          >
            {" "}
            {displayChildren[item.label] ? "-" : "+"}
          </span>
        ) : null}
      </div>
      {item &&
      item.children &&
      item.children.length > 0 &&
      displayChildren[item.label] ? (
        <MenuList list={item.children} key={item.label} />
      ) : null}
    </li>
  );
}

export default MenuItem;
