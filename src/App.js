import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import store from "../src/store/";
import { Provider } from "react-redux/es/exports";

/*Páginas */
import Login from "./view/login/";
import NovoUsuario from "./view/usuario-novo/";
import Home from "./view/home";
import UsuarioRecuperarSenha from "./view/usuario-recuperar-senha";

function App() {
  return (
    <Provider store={store}>
      <BrowserRouter>
        <Routes>
          <Route exact path='/' element={<Home />} />
          <Route exact path='/novousuario' element={<NovoUsuario />} />
          <Route exact path='/login' element={<Login />} />
          <Route exact path='/usuariorecuperarsenha' element={<UsuarioRecuperarSenha />} />
        </Routes>
      </BrowserRouter>
    </Provider>
  );
}

export default App;
