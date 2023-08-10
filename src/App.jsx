import { BrowserRouter, Route, Routes } from "react-router-dom";
import "./App.css";
import React from "react";
import Home from "./pages/Home/Home";
import Game from "./pages/Game/Game";

const App = () => {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home />}></Route>
          <Route path="/Game" element={<Game />}></Route>
          <Route path="*" element={<Home />}></Route>
        </Routes>
      </BrowserRouter>
    </>
  );
};

export default App;
