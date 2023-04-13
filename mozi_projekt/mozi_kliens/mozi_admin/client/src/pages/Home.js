import React, {useEffect} from 'react';
import { useNavigate } from "react-router-dom";
import Header from '../components/Header';
import Statistics from '../components/home-components/Statistics';
import CalendarComponent from '../components/musor-components/CalendarComponent';
function Home({authState, logout}) {
  let history = useNavigate();
  useEffect(() => {
    if (!localStorage.getItem("accessToken")) {
      history("/");
    }
  }, []);

  return (
    <div className="container">
      <Header authState={authState} logout={logout} oldalNeve={"Kezdőlap"} />
      <CalendarComponent />
      <Statistics/>
    </div>
  )
}

export default Home