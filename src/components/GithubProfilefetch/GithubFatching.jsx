import { useState } from "react";
import { useEffect } from "react";

function GithubFatching() {
  const [userName, setUserName] = useState("RutvikRP");
  const [userData, setUserData] = useState({});
  const [loading, setLoadin] = useState(false);
  const [submit, setSubmit] = useState(false);
  async function fetchGithubUser() {
    setLoadin(true);
    const res = await fetch(`https://api.github.com/users/${userName}`);
    const data = await res.json();
    if (data) {
      console.log(data);
      setUserData(data);
      setUserName("");
      setLoadin(false);
    }
  }
  useEffect(() => {
    fetchGithubUser();
  }, [submit]);
  if (loading) {
    <div>Loading is on Going</div>;
  }
  const date = new Date(userData?.created_at);
  return (
    <div className=" flex justify-center items-center h-screen w-full text-blue-400 text-xl bg-black">
      <div className=" flex flex-col w-2/3  h-4/5  border-blue-950 bg-blue-950/50 border-2  rounded-md p-10">
        <div className=" flex justify-center mt-4  items-center gap-4">
          <input
            type="text"
            placeholder="type github profile name  "
            className=" bg-blue-200   text-blue-950 px-2 py-1 rounded-md text-sm"
            value={userName}
            onChange={(e) => setUserName(e.target.value)}
          />
          <button
            className="bg-blue-500 text-sm font-bold   text-blue-950 px-2 py-1 rounded-md"
            onClick={() => setSubmit(!submit)}
          >
            Search
          </button>
        </div>
        {userData.message !== "Not Found" ? (
          <div className=" flex flex-col justify-center items-center mt-7 gap-10">
            <img
              src={userData.avatar_url}
              alt="gitImage"
              className=" w-56 h-56 rounded-full border-2 border-blue-950"
            />
            <div className=" flex gap-2 flex-col ">
              <a
                href={`https://github.com/${userData.login}`}
                className=" font-semibold  underline"
              >
                {userData.name || userData.login}
              </a>
              <p>
                Join in :
                {` ${date.getDate()} ${date.toLocaleString("en-us", {
                  month: "short",
                })} ${date.getFullYear()}`}
              </p>
              <p>Public Repositery : {userData.public_repos}</p>
              <p>folowers : {userData.followers}</p>
              <p>following : {userData.following}</p>
            </div>
          </div>
        ) : null}
      </div>
    </div>
  );
}

export default GithubFatching;
