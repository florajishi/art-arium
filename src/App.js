import './App.css';
import React, { useEffect, useState } from 'react';
import { Routes, Route, Navigate } from "react-router-dom"
import NavBar from './NavBar';
import NewArtwork from './NewArtwork';
import Gallery from './Gallery';
import ArtworkDetails from './ArtworkDetails';


function App() {

  return (
    <div className='theme'>
      <NavBar />
      <Gallery />
      <Routes>
        <Route path='/latest' element={<Gallery />} />
        <Route path='/most-popular' element={<Gallery />} />
        <Route path='/submit-art' element={<NewArtwork />} />
        <Route path='/view-art' element={<ArtworkDetails />} />
        <Route path='/' element={<Navigate replace to='/latest' />} />
      </Routes>
    </div>
  );
}

export default App;
