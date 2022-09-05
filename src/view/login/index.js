import React, { useState } from "react";
import './index.css'
import { Link, Navigate } from "react-router-dom";
import firebase from '../../config/firebase';
import {getAuth, signInWithEmailAndPassword} from 'firebase/auth';

import { useSelector, useDispatch} from 'react-redux';

function Login(){

  const [email, setEmail] = useState();
  const [senha, setSenha] = useState();
  const [msgTipo, setMsgTipo] = useState();

  const dispatch = useDispatch();

  function logar(){
    const auth = getAuth()
    signInWithEmailAndPassword(auth, email, senha).then(resultado => {
      setMsgTipo('sucesso');
      dispatch({type: 'LOG_IN', usuarioEmail: email});
    }).catch(erro => {
      setMsgTipo('erro');
    });

  }

  return(

      <div className="login-content d-flex align-items-center">

        {useSelector(state => state.usuarioLogado) > 0 ? <Navigate to="/" /> : null}

        <form className="form-signin mx-auto">
          <div className="text-center mb-4">
            <h1 className="h3 mb-3 font-weight-normal text-white fw-bold">Login</h1>
          </div>

          <input onChange={(e) => setEmail(e.target.value)} type="email" id="inputEmail" className="form-control my-2" placeholder="Email " />
          <input onChange={(e) => setSenha(e.target.value)} type="password" id="inputPassword" className="form-control my-2" placeholder="Senha" />

          <button onClick={logar} className="btn btn-lg btn-primary btn-block btn-login" type="button">Logar</button>

          <div className="msg-login text-white text-center my-5">
              {msgTipo === 'sucesso' && <span><strong>Wow!</strong> Você está conectado!</span>}
              {msgTipo === 'erro' && <span><strong>Ops!</strong> Verifique se a senha ou usuário estão corretos! </span>}
          </div>
        
          <div className="opcoes-login mt-5">
            <Link to="/usuariorecuperarsenha" className="mx-2">Recuperar Senha</Link>
            <span className="text-white">&#9733;</span>
            <Link to="/novousuario" className="mx-2">Quero Cadastrar</Link>
          </div>
        </form>
      </div>
  )
}

export default Login;