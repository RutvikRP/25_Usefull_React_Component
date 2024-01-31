/* eslint-disable react/prop-types */
function Suggetions({
  filteredUser,
  setSearch,
  setShowDropdown,
  search,
  setFilteredUser,
}) {
  function handelClick(item) {
    setSearch(item);
    setShowDropdown(false);
    setFilteredUser([]);
  }
  return (
    search && (
      <ul className=" flex flex-col bg-green-500/50 gap-1  overflow-auto">
        {filteredUser
          ? filteredUser.map((item, index) => (
              <li
                onClick={() => handelClick(item)}
                key={index}
                className=" text-green-800 text-xl font-bold  cursor-pointer  "
              >
                {item}
              </li>
            ))
          : null}
      </ul>
    )
  );
}

export default Suggetions;
// { }
