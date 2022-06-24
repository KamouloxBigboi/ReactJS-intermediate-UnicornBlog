import React from "react";

const HomePage = () => {

    const [posts, setPosts] = React.useState([])

    React.useEffect(() => {

        // fetch posts from jsonplaceholder

        fetch('https://jsonplaceholder.typicode.com/posts/')
            .then((response) => response.json())
            // .then((json) => console.log(json));
            .then((json) => setPosts(json));
        },[])

    return (
        
        // Mapping and displaying posts one by one

        <div className="posts">

            <h1>All the posts are here</h1>

        <div className="posts_list">
            {
               posts && posts.map((posts) => (

                    // Single Post 

                    <div className="postCards">
                        <p>Id of the post :  {posts.id}</p>
                        <p>Title :  {posts.title}</p>
                        <p>{posts.body}</p>
                        <p>user Id:  {posts.userId}</p>
                    </div>

                ))
            }

        </div>
        
        </div>
)}

export default HomePage