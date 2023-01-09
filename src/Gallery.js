import React, { useEffect, useState } from "react";
import { NavLink } from "react-router-dom";
import DisplayedPosts from "./DisplayedPosts";

function Gallery({ handleLinkClick }){
    const [posts, setPosts] = useState([]);
    const [comments, setComments] = useState([])

    useEffect(() => {
        fetch("db.json", {
            headers: {
                'Accept': 'application/json',
                'Content-Type': 'application/json',
            }
        })
          .then((r) => r.json())
          .then((data) => compileData(data.posts, data.comments)
          )
      }, [])
    
    function compileData(posts, comments){
        setPosts(posts)
        setComments(comments)
    }
    return (
        <div>
            <NavLink
                to="/latest"
                /*style={({ isActive })} => isActive ? activeStyle : undefined*/    
            >
                Latest Artwork
            </NavLink>
            <NavLink
                to="/most-popular"
                /*style={({ isActive })} => isActive ? activeStyle : undefined*/
            >
                Most Popular
            </NavLink>
            <DisplayedPosts posts={posts} />
        </div>
    );
}

export default Gallery;