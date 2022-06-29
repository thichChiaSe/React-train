import React, { useEffect, useRef, useState } from "react";
import axios from "axios";
import lodash from "lodash";
const HackerNews = () => {
  const [hits, setHits] = useState([]);
  const [query, setQuery] = useState("");
  const [loading, setLoading] = useState(true);
  const [errorMessage, setErrorMessage] = useState("");
  const [url, setUrl] = useState(
    "https://hn.algolia.com/api/v1/search?query=''"
  );
  const handleFetchData = useRef({});
  handleFetchData.current = async () => {
    setLoading(true); // trước khi setData thì loading chạy
    try {
      const res = await axios.get(
        ` https://hn.algolia.com/api/v1/search?query=${query}`
      );
      setHits(res.data?.hits || []); // optional chaining (?.)
      setLoading(false);
    } catch (err) {
      setLoading(false);
      setErrorMessage(`Lêu lêu ${err}`);
    }
  };
  const handleUpdateQuery = lodash.debounce((e) => {
    setQuery(e.target.value); // target là input, value là giá trị trong input
  }, 500);
  useEffect(() => {
    handleFetchData.current();
  }, [query]);
  return (
    <div className=" bg-white mx-auto mt-5 mb-5 p-5 rounded-lg shadow-md w-2/4">
      <div className="flex m-5 gap-x-5 ">
        <input
          type="text"
          placeholder="Nhập vào bất kỳ"
          className="border border-green-500 text-black p-5  block w-full rounded-md transition-all focus:border-blue-400 "
          defaultValue={query}
          onChange={handleUpdateQuery}
        />
        <button className=" bg-green-500 text-white font-semibold p-5 rounded-md">
          Fetching
        </button>
      </div>
      {loading && (
        <p className="loading w-8 h-8 rounded-full border-green-600 border-4 border-r-4 border-r-transparent animate-spin mx-auto my-10"></p>
      )}
      {!loading && errorMessage && (
        <p className="text-red-500">{errorMessage}</p>
      )}
      <div className="flex flex-wrap gap-5">
        {!loading &&
          hits.length > 0 &&
          hits.map((item, index) => (
            <h3 className="p-3 bg-gray-100 rounded-md" key={item.title}>
              {item.title}
            </h3>
          ))}
      </div>
    </div>
  );
};

export default HackerNews;
