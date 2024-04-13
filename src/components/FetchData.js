import React, { useState, useEffect } from "react";
import axios from "axios";
const FetchData = () => {
  const [data, setData] = useState({});
  const [id, setId] = useState(1);
  const [idFromButtonClick, setIdFromButtonClick] = useState(1);
  const handleClick = () => {
    setIdFromButtonClick(id);
  };
  const fetchData = async () => {
    console.log("Fetch");
    await axios
      .post(
        `https://chestnut-cooked-yarn.glitch.me/api/audio/`,
        {
          tags: "18+",
        },
        {
          header: {
            "Content-Type": "application/json",
          },
        }
      )
      .then((res) => {
        console.log(res.data);
        setData(res.data);
      })
      .catch((err) => {
        console.log(err);
      });
  };
  useEffect(() => {
    fetchData();
  }, [idFromButtonClick]);

  return (
    <div>
      <input
        type="text"
        value={id}
        onChange={(e) => {
          setId(e.target.value);
        }}
      />
      <button type="button" onClick={handleClick}>
        Get Post
      </button>
      {/* <h1>{data.title}</h1> */}
      {/* <ul>
        {data.map((datas) => (
          <li>{datas.title}</li>
        ))}
      </ul> */}
    </div>
  );
};

export default FetchData;
