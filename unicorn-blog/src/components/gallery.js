import React from "react";

const HomePage = () => {

  const [images, setImages] = React.useState([])

  React.useEffect(() => {

      // fetch from jsonplaceholder

      fetch('https://jsonplaceholder.typicode.com/albums/')
          .then((response) => response.json())
          // .then((json) => console.log(json));
          .then((json) => setImages(json));
      },[])

  return (
      
      // Mapping and displaying image one by one

      <div className="images">

          <h1>All the images are here</h1>

      <div className="images_list">
          {
             images && images.map((img) => (

                  // Single Post 

                  <div className="Images">
                      <p> {img.url} </p>
                  </div>

              ))
          }

      </div>
      
      </div>
)}

export default HomePage
  // const fetchImage = async () => {
  //   const res = await fetch(imageUrl);
  //   const imageBlob = await res.blob();
  //   const imageObjectURL = URL.createObjectURL(imageBlob);
  //   setImg(imageObjectURL);
