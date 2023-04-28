import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import ToogleTheme from "./component/toogleTheme/toogleTheme";
import HomePage from "./pages/homePage";
import Projects from "./pages/projects";

function App() {
  return (
    <>
      <BrowserRouter>
        <ToogleTheme />
        <Routes>
        <Route path= "/" element = {<HomePage />}/>
        <Route path= "/projects" element = {<Projects />}/>
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
