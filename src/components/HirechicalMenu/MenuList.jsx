/* eslint-disable react/prop-types */
import MenuItem from "./MenuItem";

function MenuList({ list = [] }) {
  return (
    <ul className="w-56 text-sm font-medium text-gray-900 bg-white border border-gray-200 rounded-lg dark:bg-gray-700 dark:border-gray-600 dark:text-white">
      {list && list.length
        ? list.map((item) => <MenuItem item={item} key={item.lable} />)
        : null}
    </ul>
  );
}

export default MenuList;
