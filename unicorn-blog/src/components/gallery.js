
import React, { useEffect, useState } from "react";
const imageUrl = "https://jsonplaceholder.typicode.com/albums/";

export default function App() {
  const [img, setImg] = useState();

  const fetchImage = async () => {
    const res = await fetch(imageUrl);
    const imageBlob = await res.blob();
    const imageObjectURL = URL.createObjectURL(imageBlob);
    setImg(imageObjectURL);
  };

  useEffect(() => {
    fetchImage();
  }, []);

  return (
    <>
      <img src={img} alt="imgs" />
    </>
  );
}
