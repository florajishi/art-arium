import { React, useState, useEffect } from "react";
import Post from "./Post";
import { useLocation } from "react-router-dom";

//Changed to displayed posts
//Moved State to Gallery
function DisplayedPosts({ posts, handleLinkClick }){
    const location = useLocation();

    const displayedArt = posts.map((post) => (
        <Post 
            key={post.id} 
            post={post}
            handleLinkClick={handleLinkClick}
        />
    ))
    return (
        <div>
            <div>{displayedArt}</div>
            <p>Pathname: {location.pathname} </p>
        </div>
    );
}


export default DisplayedPosts