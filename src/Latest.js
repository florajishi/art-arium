import { React, useState, useEffect } from "react";
import Post from "./Post";

function Latest({ handleLinkClick }){
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
    
    const artworks = posts.map((post) => (
        <Post 
            key={post.id} 
            post={post}
            handleLinkClick={handleLinkClick}
        />
    ))
    return (
        <div>{artworks}</div>
    );
}


export default Latest