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
        <Route exact path='/' element={<Home />} />
        <Route exact path='/novousuario' element={<NovoUsuario />} />
        <Route exact path='/login' element={<Login />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
