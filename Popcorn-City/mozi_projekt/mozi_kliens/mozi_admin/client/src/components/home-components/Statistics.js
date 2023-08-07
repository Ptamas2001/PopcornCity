import React, { useState, useEffect } from "react";
import { CircularProgressbar, buildStyles } from 'react-circular-progressbar';
import '../../../node_modules/react-circular-progressbar/dist/styles.css';
import axios from "axios";
function Statistics(props) {
  const [musor, setMusor] = useState([]);
  const [eladottJegyek, setEladottJegyek] = useState(0);
  const [users, setUsers] = useState([]);
  const [loginCount, setLoginCount] = useState(0);
  const percentage = 50;
  let osszesjegy = musor.length * 140;
  let osszesjegy2 = musor.length * 140;
  useEffect(() => {
    axios.get("http://localhost:3002/musor/getAllMusor").then((response) => {
      setMusor(response.data);
    });
  }, []);
  useEffect(() => {
    axios.get("http://localhost:3002/user/getAllUser", {
      headers: { accessToken: localStorage.getItem("accessToken") },
    }).then((response) => {
      setUsers(response.data.listOfUsers);
    })
  }, [])
  useEffect(() => {
    for (let i = 0; i < musor.length; i++) {
      let ticketsLeft = 140 - musor[i].ticketsLeft;
      osszesjegy = osszesjegy - ticketsLeft;
    }
    setEladottJegyek(osszesjegy2 - osszesjegy);
  }, [musor]);
  useEffect(() => {
    axios.get("http://localhost:3002/user/getLoginCount").then((response) => {
      setLoginCount(response.data);
    });
  }, []);
  let szazalek = (eladottJegyek / (osszesjegy2 / 100)) - (eladottJegyek / (osszesjegy2 / 100)) % 1
  return (
    <>
    <div className="statistics-container">
      <div className="statistics-box first">
      <div className="CircularProgressbar-trail" style={{ width: 100, height: 100 , pathColor: 'white',
    textColor: 'white',
    trailColor: 'white',}}>
        <CircularProgressbar value={(eladottJegyek / (osszesjegy2 / 100))} text={`${szazalek}%`}
         // Colors
   styles={buildStyles({ pathColor: `rgba(62, 152, 199, ${percentage / 100})`,
    textColor: '#fff',
    trailColor: '#fff',
    backgroundColor: '#3e98c7', })} />
      </div>
      <div><span>{osszesjegy2}</span> jegyből <span>{eladottJegyek}</span> jegyfoglalás történt</div>
      </div>
      <div className="statistics-box second">
      <div><span>{users.length}</span> regisztrált felhasználó </div>
      </div>
      <div className="statistics-box third">
      <div><span>{musor.length}</span> műsoron lévő film </div>
      </div>
      <div className="statistics-box four">
      <div><span>{loginCount.loginCount}</span> bejelentkezés történt</div>
      </div>
      </div>
    </>
  );
}
export default Statistics;

