import Navbar from "./components/Navbar";
import { Routes, Route, useNavigate } from "react-router-dom";
import Home from "./pages/Home";
import Filmek from "./pages/Filmek";
import Jegyfoglalasok from "./pages/Jegyfoglalasok";
import Felhasznalok from "./pages/Felhasznalok";
import Beallitasok from "./pages/Beallitasok";
import Login from "./pages/Login";
import Musor from "./pages/Musor";
import { AuthContext } from "./contexts/AuthContext";
import { useState, useEffect } from "react";
import axios from "axios";
import SelectedTickets from "./components/make-ticket-components/SelectedTicket";
import CreateTicket from "./components/make-ticket-components/MakeTicket";
import JegyMaking from "./pages/JegyMaking";
function App() {

  const [authState, setAuthState] = useState({
    username: "",
    id: 0,
    status: false,
  });

  let history = useNavigate();

  useEffect(() => {
    axios
      .get("http://localhost:3002/admin/auth", {
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

  const logout = () => {
    localStorage.removeItem("accessToken");
    setAuthState({ username: "", id: 0, status: false });
    history("/");
  };


  return (
    <div className="App">
      <AuthContext.Provider value={{ authState, setAuthState }}>
          {authState.status &&
            (<Navbar authState={authState} />)}
          <Routes>
            <Route path="/kezdolap" element={<Home authState={authState} logout={logout}/>} />
            <Route path="/musor" element={<Musor authState={authState} logout={logout}/>}  />
            <Route path="/jegyfoglalasok" element={<Jegyfoglalasok authState={authState} logout={logout}/>} />
            <Route path="/filmek" element={<Filmek />} />
            <Route path="/felhasznalok" element={<Felhasznalok  authState={authState} logout={logout}/>} />
            <Route path="/beallitasok" element={<JegyMaking authState={authState} logout={logout}/>}  />
            <Route path="/" element={<Login />} />
            <Route path="/jegyar/:id" element={<SelectedTickets authState={authState} logout={logout} />}/>
            <Route path="/createTicket" element={<CreateTicket authState={authState} logout={logout} />}/>
          </Routes>
      </AuthContext.Provider>
    </div>
  );
}

export default App;
