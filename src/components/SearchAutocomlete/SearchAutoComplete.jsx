import { useEffect, useState } from "react";
import Suggetions from "./Suggetions";

function SearchAutoComplete() {
  const [search, setSearch] = useState("");
  const [showDropdown, setShowDropdown] = useState(false);
  const [filteredUser, setFilteredUser] = useState([]);
  const [users, setUsers] = useState([]);
  const [loading, setLoading] = useState(true);
  async function fetchUser() {
    setLoading(true);
    const res = await fetch(`https://dummyjson.com/users/`);
    const data = await res.json();
    if (data && data.users && data.users.length) {
      // console.log(data);
      setUsers(data.users.map((obj) => obj.firstName));
      setLoading(false);
      // console.log(users);
    } else {
      setShowDropdown(false);
    }
  }
  useEffect(() => {
    if (search) {
      fetchUser();
    }
  }, [search]);
  if (loading) {
    <div>Loading is on Going</div>;
  }
  // console.log(users);
  function handelSearch(e) {
    const query = e.target.value.toLowerCase();
    setSearch(e.target.value);
    if (query.length > 1) {
      const filteredData =
        users && users.length
          ? users.filter((user) => user.toLowerCase().includes(query))
          : [];
      setFilteredUser(filteredData);
      setShowDropdown(true);
    }
  }
  // console.log(filteredUser);
  return (
    <div className="flex w-full h-screen justify-center">
      <div>
        <input
          type="text"
          value={search}
          onChange={(e) => handelSearch(e)}
          className=" bg-green-400 py-1 px-2 text-xl  placeholder:text-green-800  placeholder:text-sm"
          placeholder="Enter user name"
        />
        {showDropdown ? (
          <Suggetions
            filteredUser={filteredUser}
            setSearch={setSearch}
            setShowDropdown={setShowDropdown}
            search={search}
            setFilteredUser={setFilteredUser}
          />
        ) : null}
      </div>
    </div>
  );
}

export default SearchAutoComplete;
