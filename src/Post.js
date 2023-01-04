import React from "react";

function Post({ post, handleLinkClick }){
    // need to add id to destructured prop
    const { title, artist, image, description, category, likes} = post

    return(
        <div className="posts">
            <a onClick={handleLinkClick} href="/view-art">
                <h2>{title}</h2>
                <img src={image} alt={title}/>
            </a>   
            <h2>{artist}</h2>
            <p>Likes: {likes}</p>
            <p>{description}</p>
            <p>Category: {category}</p>
            

        </div>
    )
}

export default Post