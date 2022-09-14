/** @jsxImportSource @emotion/react */
import React from 'react';
import './App.css';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import WallPaper from "./layout/Wallpaper/WallPaper";
import Docs from "./layout/Docs/Docs";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path={"/"} element={<WallPaper />}>
          <Route path={"/"} element={<WallPaper />} />
          <Route path={"/docs"} element={<WallPaper />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
