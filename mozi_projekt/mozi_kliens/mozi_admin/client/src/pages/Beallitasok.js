import React, {useEffect} from 'react'
import { useNavigate } from 'react-router-dom';
import Header from '../components/Header';
import CreateTicket from '../components/make-ticket-components/MakeTicket';
function Beallitasok({authState, logout}) {

  let history = useNavigate();
  useEffect(() => {
    if (!localStorage.getItem("accessToken")) {
      history("/");
    }
  }, []);

  return (
    <div className="container">
      <Header authState={authState} logout={logout} oldalNeve={"Beállítások"} />

    </div>
  )
}

export default Beallitasok