/* eslint-disable react/prop-types */
/* eslint-disable no-unused-vars */
import { useEffect, useState } from "react";

function LoadMore({ url }) {
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);
  const [count, setCount] = useState(0);
  const [disable, setDisable] = useState(false);
  async function fetchProduct(url) {
    try {
      setLoading(true);
      const res = await fetch(
        `https://dummyjson.com/products?limit=20&skip=${
          count === 0 ? "0" : count * 20
        }&select=title,price,thumbnail`
      );
      const data = await res.json();
      console.log(data);
      setProducts((prevData) => [...prevData, ...data.products]);
      setLoading(false);
    } catch (e) {
      setError(e);
      setLoading(false);
    }
  }
  useEffect(() => {
    // if (!url) return;
    fetchProduct(url);
  }, [count]);
  useEffect(() => {
    if (products && products.length === 100) return setDisable(true);
  }, [products]);
  if (loading) return <div>Loading is on going</div>;
  if (error) return <div>Error:{error.message}</div>;
  return (
    <div className="px-10 py-10 flex flex-col items-center justify-center">
      <div className=" flex ">
        <div className=" grid grid-cols-4 gap-4">
          {products &&
            products.map((item) => <Product item={item} key={item.id} />)}
        </div>
      </div>
      {disable ? "Yoy reach 100 items" : null}
      <button
        onClick={() => setCount(count + 1)}
        className=" px-4 py-2 bg-green-300 rounded-md w-40"
        disabled={disable}
      >
        Load More
      </button>
    </div>
  );
}
function Product({ item }) {
  return (
    <div className="flex flex-col border border-solid border-gray-700  rounded-md ">
      <img
        src={item.thumbnail}
        alt={item.title}
        className=" h-full w-full rounded-md "
      />
      <div className=" flex justify-between">
        <h4>{item.title}</h4>
        <h4>{item.price}</h4>
      </div>
    </div>
  );
}
export default LoadMore;
