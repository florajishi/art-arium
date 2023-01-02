import React from "react";
import Post from "./Post";

function Gallery({ posts }){

    const artworks = posts.map((post) => (
        <Post 
            key={post.id} 
            post={post}
        />
    ))
    return (
        <div>{artworks}</div>
    );
}

export default Gallery;