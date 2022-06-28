import React, { useEffect, useRef, useState } from "react";
import axios from "axios";
const HackerNews = () => {
  const [hits, setHits] = useState([]);
  const [query, setQuery] = useState("");
  const handleFetchData = useRef({});
  handleFetchData.current = async () => {
    const res = await axios.get(
      ` https://hn.algolia.com/api/v1/search?query=${query}`
    );
    setHits(res.data?.hits || []); // optional chaining (?.)
  };
  useEffect(() => {
    handleFetchData.current();
  }, [query]);
  return (
    <>
      <input
        type="text"
        className="border border-green-500 text-black p-5 m-5"
        value={query}
        onChange={(e) => setQuery(e.target.value)}
      />
      <div>
        {hits.length > 0 &&
          hits.map((item, index) => <h3 key={item.title}>{item.title}</h3>)}
      </div>
    </>
  );
};

export default HackerNews;
