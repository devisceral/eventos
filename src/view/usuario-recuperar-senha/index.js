import React, { useState } from "react";
import './index.css'
import Navbar from "../../components/navbar";

import firebase from '../../config/firebase';
import {getAuth, sendPasswordResetEmail} from 'firebase/auth';

function UsuarioRecuperarSenha(){

  const [email, setEmail] = useState();
  const [msg, setMsg] = useState();
  const [carregando, setCarregando] = useState();
  function recuperarSenha(){

      setCarregando(1);

      const auth = getAuth();

      sendPasswordResetEmail(auth, email).then(resultado => {
      setCarregando(0);
      setMsg("Enviamos um link no seu email para você redefinir sua senha!");
    }).catch(erro => {
      setCarregando(0);
      setMsg("Verifique se o email está correto!");
    })

   }

  return(
    <>
      <Navbar />
      <div className="form-cadastro">
        <form className="text-center form-login mx-auto mt-5">
          <h3 className="mb-3 font-weight-bold">Recuperar Senha</h3>
          <input onChange={(e) => setEmail(e.target.value)} type="email" className="form-control my-2" placeholder="Email" />

          <div className="msg my-4 text-center">
          {
            carregando ? <div class="spinner-border text-danger" role="status"><span class="visually-hidden">Loading...</span></div>
            :
            <span>{msg}</span>
          }
            
          </div>
          <button onClick={recuperarSenha} id="btnRecover" type="button" className="btn btn-lg btn-block btn-enviar" >Recuperar Senha</button>
        </form>
      </div>
    </>
  )
}

export default UsuarioRecuperarSenha;
