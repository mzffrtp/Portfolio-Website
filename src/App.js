import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import ToogleTheme from "./component/toogleTheme/toogleTheme";
import HomePage from "./pages/homePage";

function App() {
  return (
    <>
      <BrowserRouter>
        <ToogleTheme />
        <HomePage />
        <Routes>
        <Route path= "/" element = {<HomePage />}/>


        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
