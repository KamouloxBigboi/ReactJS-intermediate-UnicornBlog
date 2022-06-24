import React from "react";

const Gallery = () => {

  const [images, setImages] = React.useState([])

  React.useEffect(() => {

      // fetch from jsonplaceholder

      fetch('https://jsonplaceholder.typicode.com/albums/1/photos')
          .then((response) => response.json())
          // .then((json) => console.log(json));
          .then((json) => setImages(json));
      },[])

  return (
      
      // Mapping images one by one

      <div className="images">

          <h1>All the images are here</h1>

      <div className="images_list">
          {
             images && images.map((img) => (

                  // Getting the images url 

                  <div className="Images">
                      
                      <img src={img.url} alt="image from API"></img>
                      
                  </div>

              ))
          }

      </div>
      
      </div>
)}
            


export default Gallery
  // const fetchImage = async () => {
  //   const res = await fetch(imageUrl);
  //   const imageBlob = await res.blob();
  //   const imageObjectURL = URL.createObjectURL(imageBlob);
  //   setImg(imageObjectURL);
