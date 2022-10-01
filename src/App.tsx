/** @jsxImportSource @emotion/react */
import React, {useCallback, useState} from 'react';
import './App.css';
import {BrowserRouter, Routes, Route} from "react-router-dom";
import WallPaper from "./layout/Wallpaper/WallPaper";
import Docs from "./layout/Docs/Docs";
import Docs404 from "./layout/Docs/component/Docs404";

function App() {
  const [firstSplash, isFirstSplash] = useState(true);
  const skipSplash = useCallback(() => {
    isFirstSplash(false);
  }, [isFirstSplash]);

  return (
    <BrowserRouter basename={process.env.PUBLIC_URL}>
      <Routes>
        <Route path={"/"} element={<WallPaper isFirstVisited={firstSplash} callback={skipSplash} />}>
          <Route path={"/docs"} element={<WallPaper />} />
          <Route path={"/docs/:language"} element={<WallPaper />} />
        </Route>
        <Route path={"/*"} element={<Docs404 language={"NULL"} />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
