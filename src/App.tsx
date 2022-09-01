/** @jsxImportSource @emotion/react */
import React from 'react';
import './App.css';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import WallPaper from "./layout/Wallpaper/WallPaper";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path={"/"} element={<WallPaper />}/>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
