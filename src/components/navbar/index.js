import React from "react";
import './index';
import {Link} from 'react-router-dom';
import { useSelector, useDispatch} from 'react-redux';

function Navbar(){

  const dispatch = useDispatch();

  return(
    <nav className="navbar navbar-expand-lg">
      <div className="container-fluid">
        <span className="navbar-brand text-white font-weigth-bold">Eventos</span>
          <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
            <i class="fa-solid fa-bars text-white"></i>
          </button>
        <div className="collapse navbar-collapse" id="navbarSupportedContent">
          <ul className="navbar-nav me-auto mb-2 mb-lg-0">

            <li className="nav-item"><Link className="nav-link" to="/">Home</Link></li>

            {
              useSelector(state => state.usuarioLogado) > 0 ?
              <>
                <li className="nav-item"><Link className="nav-link" to="">Publicar Evento</Link></li>
                <li className="nav-item"><Link className="nav-link" to="">Meus Eventos</Link></li>
                <li className="nav-item"><Link className="nav-link" to="" onClick={() => dispatch({type: 'LOG_OUT'})}>Sair</Link></li>
              </>
              :
              <>
                <li className="nav-item"><Link className="nav-link" to="/novousuario">Cadastrar</Link></li>
                <li className="nav-item"><Link className="nav-link" to="/login">Login</Link></li>
              </>
            }

          </ul>
        </div>
      </div>
    </nav>
  )
}

export default Navbar;