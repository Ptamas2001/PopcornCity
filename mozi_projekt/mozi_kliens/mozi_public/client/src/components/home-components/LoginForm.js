import React, { useState, useContext, useEffect } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import { AuthContext } from "../../helpers/AuthContext";
import {AiOutlineCloseCircle} from 'react-icons/ai'
import RegisterButton from "./RegisterButton";
import { Toaster, toast } from 'react-hot-toast';

function LoginForm({setLoggedIn, setAuthState, close, setLoginState}) {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  let history = useNavigate();


  const login = () => {
    const data = { username: username, password: password };
    axios.post("http://localhost:3002/user/login", data).then((response) => {
      if (response.data.error) {
        toast.error(response.data.error);
      } else {
        localStorage.setItem("accessToken", response.data.token);
        setAuthState({
          username: response.data.username,
          id: response.data.id,
          status: true,
        });
        setLoggedIn(true);
      }
    });
    history("/")
  };

  return (
    <div className="login-form" onClick={(e) => e.stopPropagation()}>
       <Toaster position="middle-right" reverseOrder={false} />
      <div className="login-left">
      </div>
      <div className="login-right">
        <div className="login-close">
          <i onClick={close}><AiOutlineCloseCircle/></i>
        </div>
        <div className="login-right-content">
          <h1>Bejelentkezés</h1>
      <label className="label" htmlFor="name">
        Felhasználónév:
      </label>
      <input
        id="name"
        className="input"
        type="text"
        pattern=".+"
        placeholder="Írja ide a felhasználónevét"
        required
        onChange={(event) => {
          setUsername(event.target.value);
        }}
      />
      <label className="label2" htmlFor="name2">
        Jelszó:
      </label>
      <input
        id="name2"
        className="input2"
        type="password"
        pattern=".+"
        placeholder="Írja ide a jelszavát"
        required
        onChange={(event) => {
          setPassword(event.target.value);
        }}
      />
      <div className="login-btn">
      <button onClick={login}>Belépés</button>
      </div>
      <div className="logintoRegister" onClick={() => setLoginState(1)}>
      <RegisterButton/>
      </div>
      </div>
      </div>
    </div>
  );
}

export default LoginForm;
