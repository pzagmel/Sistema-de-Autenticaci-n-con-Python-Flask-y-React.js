import React from "react";
import { useState, useEffect, useContext } from "react";
import { Context } from "../store/appContext";
import { Navigate, useNavigate } from "react-router";

export const Signup = () => {
  let navigate = useNavigate();
  const { store, actions } = useContext(Context);
  const token = sessionStorage.getItem("token");
  
  const register = async (evento) => {

    evento.preventDefault();
    let email = evento.target[0].value;
    let pass = evento.target[1].value;
    let rpass = evento.target[2].value;

    if (pass != rpass) {
      alert("Contraseñas deben ser iguales");
    }
    if (email == "" || pass == "" || rpass == "") {
      alert("Debes completar los datos");
    } else {     
      await actions.getinfoRegister(
        JSON.stringify({
          email: email,
          password: email,
    
        })
      );
      alert("Registrado");
      navigate("/login")       
    }
  };
  return (
    <>      
      {token && token != "" && token != undefined ? (
        "you are registed in with this token " + token
      ) : (
        <div className="container" id="REGISTERHIJOMAYOR">
          <div className="row registerinfo">
            <div className="col-1">
              <div className="login-card" id="CONTAINERREGISTER">
                <h2 className="register">
                  Signup
                </h2>              
                <form className="login-form" onSubmit={register}>
                  <input type="email" placeholder="Correo" />
                  <input type="password" placeholder="Contraseña"  />
                  <input type="password" placeholder="Repetir Contraseña"/>                                             
                  <button type="submit">CREAR</button>
              </form>
              </div>
            </div>
          </div>
        </div>
      )}
    </>
  );
};
