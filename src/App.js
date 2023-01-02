import './App.css';
import React, { useEffect, useState } from 'react';
import Gallery from './Gallery';

function App() {
  const [posts, setPosts] = useState([]);
  // const [selectedPost, setSelectedPost] = useState("")
  // const [selectedProfile, setSelectedProfile] = useState("")
  // const [mostPopular, setMostPopular] = useState([])
  // const [filterByCategory, setFilterByCategory] = useState("")

  useEffect(() => {
    let url = "http://localhost:3000/posts";
    fetch(url)
      .then((r) => r.json())
      .then(setPosts)
  }, [])

  return (
    <Gallery posts={posts} />
  );
}

export default App;
