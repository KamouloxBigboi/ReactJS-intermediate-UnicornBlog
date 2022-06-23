import React from "react";

// type PostType = {
     
//     id: Number,
//     title: String,
//     body: String,
//     userId: Number,
// }

const Gallery = () => {

    const [img, setImages] = React.useState([])

    React.useEffect(() => {

        // fetch images from jsonplaceholder

        fetch('https://jsonplaceholder.typicode.com/albums/')
            .then((response) => response.json())
            // .then((json) => console.log(json));
            .then((json) => setImages(json));
        },[])

    return (
        
        // Mapping and displaying images one by one

        <div className="images">

            <h1> All the images are here </h1>

        <div className="images_list">
            {
               img && img.map((img) => (

                    // All images

                    <div className="postCards">
                    <img src={img.url} alt="all_imgs"></img>  
                    </div>

                ))
            }

        </div>
        
        </div>
)}

export default Gallery