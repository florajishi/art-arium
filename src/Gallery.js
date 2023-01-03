import React, { useEffect, useState } from "react";
import Post from "./Post";


function Gallery(){
    const [posts, setPosts] = useState([]);
    const [comments, setComments] = useState([])
// const [selectedPost, setSelectedPost] = useState("")
  // const [selectedProfile, setSelectedProfile] = useState("")
  // const [mostPopular, setMostPopular] = useState([])
  // const [filterByCategory, setFilterByCategory] = useState("")

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
        />
    ))
    return (
        <div>{artworks}</div>
    );
}

export default Gallery;