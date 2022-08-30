import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";

/*Páginas */
import Login from "./view/login/";
import NovoUsuario from "./view/usuario-novo/";
import Home from "./view/home";

function App() {
  return (
    <BrowserRouter>
    <Routes>
      <Route path='/' element={<Login />} />
      <Route path='/novousuario' element={<NovoUsuario />} />
      <Route path='/home' element={<Home />} />
    </Routes>
    </BrowserRouter>
  );
}

export default App;
