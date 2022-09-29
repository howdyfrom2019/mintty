/** @jsxImportSource @emotion/react */
import React, {useCallback, useState} from 'react';
import './App.css';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import WallPaper from "./layout/Wallpaper/WallPaper";

function App() {
  const [firstSplash, isFirstSplash] = useState(true);
  const skipSplash = useCallback(() => {
    isFirstSplash(false);
  }, [isFirstSplash]);

  return (
    <BrowserRouter>
      <Routes>
        <Route path={"/"} element={<WallPaper isFirstVisited={firstSplash} callback={skipSplash} />}>
          <Route path={"/docs"} element={<WallPaper />} />
          <Route path={"/docs/:language"} element={<WallPaper />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
