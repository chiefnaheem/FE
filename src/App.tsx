


import React from 'react'
import { Routes, BrowserRouter, Route } from 'react-router-dom'
import Home from './pages/Home'
import 'bootstrap/dist/css/bootstrap.min.css';
// import Details from './pages/Details';
import SingleArtist from './pages/SingleArtist';

export default function App() {
  return (
   <BrowserRouter>
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/details" element={<SingleArtist />} />
      {/* <Route path="/home/:id" element={<Home />} /> */}
    </Routes>
    </BrowserRouter>
  )
}

