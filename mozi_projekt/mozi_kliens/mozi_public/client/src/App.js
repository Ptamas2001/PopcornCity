import React from 'react';
import "./App.css";
import { useRef, useEffect, useState } from "react";
import Home from "./pages/Home";
import Jegyarak from "./pages/Jegyarak";
import Kajak from "./pages/Kajak";
import LoginButton from "./components/home-components/LoginButton";
import Musor from "./pages/Musor";
import Kosar from "./pages/Kosar";
import KosarIkon from "./components/home-components/KosarIkon";
import { motion, AnimatePresence } from "framer-motion";
import { BrowserRouter as Router, Routes, Route, Link, useNavigate } from "react-router-dom";
import FilmOverlay from "./components/home-components/FilmOverlay";
import LoginForm from "./components/home-components/LoginForm";
import axios from "axios";
import RegisterForm from './components/home-components/RegisterForm';
import Footer from './components/home-components/Footer';
import Logout from './components/home-components/Logout';
function App() {
  const scroll = useRef();
  const [open, setOpen] = useState(false);
  const [loginState, setLoginState] = useState(3);
  const [loggedIn, setLoggedIn] = useState(false);
  const [menuCucc, setMenuCucc] = useState();

  const [authState, setAuthState] = useState({
    username: "",
    id: 0,
    status: false,
  });
  const logout = () => {
    localStorage.removeItem("accessToken");
    setAuthState({ username: "", id: 0, status: false });
    setLoggedIn(false);
    setLoginState(3);
  };

  useEffect(() => {
    axios
      .get("http://localhost:3002/user/auth", {
        headers: {
          accessToken: localStorage.getItem("accessToken"),
        },
      })
      .then((response) => {
        if (response.data.error) {
          setAuthState({ ...authState, status: false });
        } else {
          setAuthState({
            username: response.data.username,
            id: response.data.id,
            status: true,
          });
        }
      });
  }, []);

  useEffect(() => {
    if (localStorage.getItem("accessToken")) {
      setLoggedIn(true);
    }
  }, []);

  useEffect(() => {
    const observer = new IntersectionObserver((entries, observer) => {
      const entry = entries[0];
      setMenuCucc(!entry.isIntersecting);
    });

    observer.observe(scroll.current);
  }, []);

  const openLogin = () => {
    setLoginState(0);
  };

  const closeLogin = () => {
    setLoginState(-1);
  };

  return (
    <div className="App">
      <Router>
        <div className="container">
          <div className="navbar-container header">
            <header className={menuCucc ? "hatter" : ""}>
              <motion.div
                className="text"
                animate={{
                  rotate: [0, 15, -15, 0],
                  x: [0, 15, -10, 0],
                }}
                transition={{ duration: 0.5 }}
              >
                <h1>Popcorn City</h1>
              </motion.div>
              <div className="menu-right">
              
              <nav className={open ? "open-nav" : ""}>
                <svg
                  onClick={() => setOpen(false)}
                  className="close"
                  viewBox="0 0 16 16"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    fillRule="evenodd"
                    clipRule="evenodd"
                    d="M7.116 8L2.558 12.558L3.442 13.442L8 8.884L12.558 13.442L13.442 12.558L8.884 8L13.442 3.442L12.558 2.558L8 7.116L3.442 2.558L2.558 3.442L7.116 8Z"
                    fill="black"
                  />
                </svg>

                <ul>
                  <li>
                    <Link to="/">
                      <i className="fa-solid fa-house"></i>Kezdőlap
                    </Link>
                  </li>
                  <li>
                    <Link to="/jegyarak">
                      <i className="fa-solid fa-tag"></i>Jegyárak
                    </Link>
                  </li>
                  <li>
                    <Link to="/etelek-italok">
                      <i className="fa-solid fa-utensils"></i>Ételek, italok
                    </Link>
                  </li>
                  <li>
                    <Link to="/musor">
                      <i className="fa-solid fa-eye"></i>Műsor
                    </Link>
                  </li>
                </ul>
              </nav>
              <div className="login_button">
                      {!loggedIn && (
                        <>
                          <LoginButton open={openLogin} />
                          <AnimatePresence>
                            {loginState === 0 && (
                              <FilmOverlay close={closeLogin}>
                                <LoginForm
                                  setLoggedIn={setLoggedIn}
                                  setAuthState={setAuthState}
                                  close={closeLogin}
                                  setLoginState={setLoginState}
                                />
                              </FilmOverlay>
                            )}
                            {loginState === 1 && (
                              <FilmOverlay close={closeLogin}>
                                <RegisterForm
                                  setLoggedIn={setLoggedIn}
                                  setAuthState={setAuthState}
                                  close={closeLogin}
                                  setLoginState={setLoginState}
                                />
                              </FilmOverlay>
                            )}
                          </AnimatePresence>
                        </>
                      )}
                      {loggedIn && (
                        <div className="dp-fx">
                          <p>{authState.username}</p>
                          
                          <Link to="/kosar">
                          <KosarIkon/>
                          </Link>
                        </div>
                      )}
                    </div>
                    {loggedIn && <Logout logout={logout}/>}
                    </div>
                    <svg
                onClick={() => setOpen(true)}
                className="menu"
                viewBox="0 0 18 12"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M9 12H0V10H9V12ZM18 7H0V5H18V7ZM18 2H9V0H18V2Z"
                  fill="white"
                />
              </svg>
              
            </header>
          </div>
          <div ref={scroll}></div>
          <Routes>
            <Route path="/" element={<Home authState={authState}/>} />
            <Route path="/jegyarak" element={<Jegyarak />} />
            <Route path="/etelek-italok" element={<Kajak />} />
            <Route path="/musor" element={<Musor />} />
            <Route path="/kosar" element={<Kosar authState={authState}/>} />
          </Routes>
        </div>
      </Router>
      <Footer/>
    </div>
  );
}

export default App;
