import React, { useEffect, useState } from "react";
import axios from "axios";
//lấy data
const getPhotos = () => {
  return axios
    .get("https://picsum.photos/v2/list")
    .then((response) => {
      // handle success
      console.log(response);
      return response.data;
    })
    .catch((error) => {
      // handle error
      console.log(error);
    });
};
///
const Photos = () => {
  const [randomPhotos, setRandomPhotos] = useState([]);
  // useEffect(() => {
  //   //side effect
  //   getPhotos().then((images) => {
  //     setRandomPhotos(images);
  //     console.log(images);
  //   });
  // }, []);
  return (
    // randomPhotos.length > 0 nếu độ dài lớn hơn 0 thì mới map(ex:tắt useEffect)
    <div className="grid grid-cols-4 gap-5 p-5">
      {randomPhotos.length > 0 &&
        randomPhotos.map((item, index) => (
          <div key={item.id} className="p-3 bg-white shadow-md rounded-lg">
            <img
              src={item.download_url}
              alt={item.author}
              className="w-full h-full object-cover rounded-lg"
            />{" "}
            {/*gắn data*/}
          </div>
        ))}
    </div>
  );
};

export default Photos;
