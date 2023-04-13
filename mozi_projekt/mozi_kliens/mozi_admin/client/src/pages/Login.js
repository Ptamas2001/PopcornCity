import React, { useState, useContext, useEffect } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import { AuthContext } from "../contexts/AuthContext";
import { Toaster, toast } from 'react-hot-toast';

function Login() {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const { setAuthState } = useContext(AuthContext);

  let history = useNavigate();

  useEffect(() => {
    if (localStorage.getItem("accessToken")) {
      history("/kezdolap");
    }
  }, []);

  const login = () => {
    const data = { username: username, password: password };
    axios.post("http://localhost:3002/admin/login", data).then((response) => {
      if (response.data.error) {
        toast.error(response.data.error);
      } else {
        localStorage.setItem("accessToken", response.data.token);
        setAuthState({
          username: response.data.username,
          id: response.data.id,
          status: true,
        });
        history("/kezdolap");
      }
    });
  };
  return (
    <div class="logincontainer">
      <Toaster position="middle-right" reverseOrder={false} />
      <div class="login-container">
        <div class="login-wrapper">
          <div class="fo-mezok">
            <div class="loginform">
              <h1>Popcorn City.</h1>
              <h2>Bejelentkezés</h2>
              <label class="label" for="name">Felhasználónév</label>
                <input id="name" class="input" type="text" pattern=".+" required onChange={(event) => {
                  setUsername(event.target.value);
                }} />


              <label class="label2" for="name2">Jelszó</label>
                <input id="name2" class="input2" type="password" pattern=".+" required onChange={(event) => {
                  setPassword(event.target.value);
                }} />
                <button onClick={login}>Bejelentkezés</button>
              </div>
              
          </div>
        </div>
      </div>
    </div>
  )
}

export default Login