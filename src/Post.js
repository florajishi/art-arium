import React from "react";
import { Link } from "react-router-dom";

function Post({ post, handleLinkClick }){
    // need to add id to destructured prop
    const { title, artist, image, description, category, likes} = post

    return(
        <div className="posts">
            <Link to="/view-art">
                <h2>{title}</h2>
                <img src={image} alt={title}/>
            </Link>
            <h2>{artist}</h2>
            <p>Likes: {likes}</p>
            <p>{description}</p>
            <p>Category: {category}</p>
            

        </div>
    )
}

export default Post