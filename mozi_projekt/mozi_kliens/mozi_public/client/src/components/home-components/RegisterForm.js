import React, { useState, useContext, useEffect } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import { AuthContext } from "../../helpers/AuthContext";
import { AiOutlineCloseCircle } from "react-icons/ai";
import { Toaster, toast } from 'react-hot-toast';
function RegisterForm({ setLoggedIn, setAuthState, close, setLoginState }) {
  const [username, setUsername] = useState("");
  const [fullname, setFullname] = useState("");
  const [pnumber, setPnumber] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  let history = useNavigate();

  const register = () => {
    const data = {
      username: username,
      password: password,
      teljesNev: fullname,
      email: email,
      telefonszam: pnumber,
      premium: "false",
    };
    axios.post("http://localhost:3002/user/register", data).then((response) => {
      if (response.data.error) {
        toast.error(response.data.error);
      } else {
        toast.success(response.data.msg);
        setLoginState(0);
      }
    });
    history("/");
  };
  return (
    <div className="register-form" onClick={(e) => e.stopPropagation()}>
      <Toaster position="middle-right" reverseOrder={false} />
      <div className="register-left"></div>
      <div className="register-right">
        <div className="register-close">
          <i onClick={close}>
            <AiOutlineCloseCircle />
          </i>
        </div>
        <div className="register-right-content">
          <h1>Regisztráció</h1>
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
          <label className="label" htmlFor="name">
            Teljes név:
          </label>
          <input
            id="fullname"
            className="input"
            type="text"
            pattern=".+"
            placeholder="Írja ide a teljes nevét"
            required
            onChange={(event) => {
              setFullname(event.target.value);
            }}
          />
          <label className="label" htmlFor="name">
            Telefonszám:
          </label>
          <input
            id="pnumber"
            className="input"
            type="number"
            pattern=".+"
            placeholder="Írja ide a telefonszámát"
            required
            onChange={(event) => {
              setPnumber(event.target.value);
            }}
          />
          <label className="label" htmlFor="name">
            Email cím:
          </label>
          <input
            id="email"
            className="input"
            type="email"
            pattern=".+"
            placeholder="Írja ide az email címét"
            required
            onChange={(event) => {
              setEmail(event.target.value);
            }}
          />
          <label className="label2" htmlFor="name2">
            Jelszó:
          </label>
          <input
            id="password"
            className="input2"
            type="password"
            pattern=".+"
            placeholder="Írja ide a jelszavát"
            required
            onChange={(event) => {
              setPassword(event.target.value);
            }}
          />
          <div className="register-btn">
            <button onClick={register}>Regisztráció</button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default RegisterForm;
