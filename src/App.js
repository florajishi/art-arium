import './App.css';
import React, { useEffect, useState } from 'react';
import NavBar from './NavBar';
import Home from './Home';

function App() {
  // const [selectedPost, setSelectedPost] = useState("")
  // const [selectedProfile, setSelectedProfile] = useState("")
  // const [mostPopular, setMostPopular] = useState([])
  // const [filterByCategory, setFilterByCategory] = useState("")

  return (
    <div>
      <NavBar />
      <Home />
    </div>
  );
}

export default App;
