import React, { useEffect, useState } from "react";
import axios from "axios";
const getPhotos = () => {
  return axios
    .get("https://picsum.photos/v2/list")
    .then((response) => {
      // handle success
      return response.data;
      console.log(response);
    })
    .catch((error) => {
      // handle error
      console.log(error);
    })
    .then((img) => {
      // always executed
    });
};
const Photos = () => {
  const [randomPhotos, setRandomPhotos] = useState([]);
  useEffect(() => {
    //side effect
    getPhotos().then((images) => {
      setRandomPhotos(images);
      console.log(images);
    });
  }, []);
  return <div>{JSON.stringify(randomPhotos)}</div>;
};

export default Photos;
