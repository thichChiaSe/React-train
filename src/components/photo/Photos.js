import React, { useEffect, useState } from "react";
import axios from "axios";
//lấy data
const getPhotos = async () => {
  try {
    const response = await axios.get("https://picsum.photos/v2/list");
    // handle success
    console.log(response);
    return response.data;
  } catch (error) {
    // handle error
    console.log(error);
  }
};
///
const Photos = () => {
  const [randomPhotos, setRandomPhotos] = useState([]);
  const [nextPhoto, setNextPhoto] = useState(1);
  const handleLoadMorePhoto = () => {
    getPhotos(nextPhoto).then((image) => {
      // concat
      const newPhotos = [...randomPhotos, ...image];
      console.log("getRandomPhotos ~ newPhotos", newPhotos);
      setRandomPhotos(newPhotos);
      setNextPhoto(nextPhoto + 1);
    });
  };
  // useEffect(() => {
  //   //side effect
  //   getPhotos().then((images) => {
  //     setRandomPhotos(images);
  //     console.log(images);
  //   });
  // }, []);
  return (
    <div>
      {/* // randomPhotos.length > 0 nếu độ dài lớn hơn 0 thì mới map(ex:tắt useEffect) */}
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
      <div className="text-center">
        <button
          onClick={handleLoadMorePhoto}
          className="inline-block px-8 py-4 bg-purple-600 text-white"
        >
          Load more
        </button>
      </div>
    </div>
  );
};

export default Photos;
