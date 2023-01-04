import './App.css';
import React, { useEffect, useState } from 'react';
import { Routes, Route, BrowserRouter } from "react-router-dom"
import NavBar from './NavBar';
import Home from './Home';
import MostPopular from './MostPopular';
import NewArtwork from './NewArtwork';
import PostPage from './PostPage';
import Latest from './Latest';
import Gallery from './Gallery';

function App() {

  const [page, setPage] = useState("/")
  
  function handleLinkClick(e) {
    e.preventDefault()
    setPage(e.target.pathname)
  }

  return (
    <div>
      <NavBar handleLinkClick={handleLinkClick}/>
      <Gallery handleLinkClick={handleLinkClick}/>
        <Routes>
          <Route exact path='/latest' element={<Latest />} />
          <Route exact path='/most-popular' element={<MostPopular />} />
          <Route exact path='/submit-art' element={<NewArtwork />} />
          <Route exact path='/view-post' element={<PostPage />} />
          <Route exact path='/' element={<Home />} />
        </Routes>
    </div>
  );
}

export default App;
