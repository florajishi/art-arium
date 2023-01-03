import './App.css';
import React, { useEffect, useState } from 'react';
import NavBar from './NavBar';
import Home from './Home';
import data from "./db.json"

function App() {
  // const [selectedPost, setSelectedPost] = useState("")
  // const [selectedProfile, setSelectedProfile] = useState("")
  // const [mostPopular, setMostPopular] = useState([])
  // const [filterByCategory, setFilterByCategory] = useState("")

  console.log("Data: " , data)
  console.log("Posts: " , data.posts)
  return (
    <div>
      <NavBar />
      <Home />
    </div>
  );
}

export default App;
