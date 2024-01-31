/* eslint-disable react/prop-types */
import { useEffect, useState } from "react";

function ScrollIndicator({ url }) {
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);
  const [scrollPersentage, setScrollPercentage] = useState(0);

  async function fetchData(url) {
    try {
      setLoading(true);
      const res = await fetch(url);
      const data = await res.json();
      setData(data.products);
      setLoading(false);
    } catch (e) {
      setError(e.message);
      setLoading(false);
    }
  }
  function handelScrollPercentage() {
    const howMuchScroll =
      document.body.scrollTop || document.documentElement.scrollTop;
    const totalHeight =
      document.documentElement.scrollHeight -
      document.documentElement.clientHeight;
    setScrollPercentage((howMuchScroll / totalHeight) * 100);
  }
  console.log(scrollPersentage);
  useEffect(() => {
    url && fetchData(url);
  }, [url]);
  useEffect(() => {
    window.addEventListener("scroll", handelScrollPercentage);
    return window.removeEventListener("scroll", () => {});
  }, []);
  if (loading) {
    return <div>Loading is on Going....</div>;
  }
  if (error !== null) {
    return <div>Error:{error}</div>;
  }
  return (
    <div className=" flex flex-col gap-4 items-center">
      <div className="   fixed top-0 z-1  w-full h-14 bg-gray-500/55">
        <h1 className="text-2xl font-bold text-orange-500 mb-2">
          Custom Scroll
        </h1>
        <div>
          <div
            className={`bg-orange-500 h-4 absolute left-0`}
            style={{ width: `${scrollPersentage}%` }}
          ></div>
        </div>
      </div>
      <div className="flex flex-col gap-4  w-96">
        {data && data.length > 0
          ? data.map((item) => <Item key={item.id} item={item} />)
          : null}
      </div>
    </div>
  );
}
function Item({ item }) {
  return (
    <div className="py-1 px-4 font-semibold text-sm flex justify-between border-2 border-gray-500 text-gray-800">
      <h4>{item.title}</h4>
      <h4 className="  font-bold">{item.price}</h4>
    </div>
  );
}
export default ScrollIndicator;
