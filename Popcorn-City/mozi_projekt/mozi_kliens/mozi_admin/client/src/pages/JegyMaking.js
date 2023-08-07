import React, {useEffect, useState} from 'react'
import { useNavigate, useParams } from 'react-router-dom';
import Header from '../components/Header';
import axios from "axios";
import {FcPlus} from 'react-icons/fc';
function JegyMaking({authState, logout}) {
  let history = useNavigate();
  let {id} = useParams();
  useEffect(() => {
    if (!localStorage.getItem("accessToken")) {
      history("/");
    }
  }, []);
  const [listOfTickets, setlistOfTickets] = useState([]);
  useEffect(() => {
    axios.get("http://localhost:3002/jegyarak").then((response) => {
      setlistOfTickets(response.data);
    });
  }, []);

 
  return (
    <div className='container'>
    <Header authState={authState} logout={logout} oldalNeve={"Jegyszerkesztés"} />
    <div className='moreticket' onClick={()=>{
        history("/createTicket")
      }}>
        <div className='moreticketbox'>
        <p id="plus"><FcPlus/></p>
        <p>Több jegy hozzáadása</p>
        </div>
      </div>
      <div className="jegyrow">
    {listOfTickets.map((value, key) => {
      return(
        <div className="post">
     <div className="jegybox">
      <h2>{value.types}</h2>
      <h3>{value.typeValue}</h3>
      <label>{value.leiras}</label><br></br>
      <div className="line"><i >&nbsp;</i></div>
      <h4>{value.price} Ft</h4>
      <br></br>
      <div className="descriptions">
      <svg className="tick" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path d="M21 7L9 19L3.5 13.5L4.91 12.09L9 16.17L19.59 5.59L21 7Z" fill="black"/>
      </svg>
      <label>{value.description}</label>
      </div>
      <button className='ticketEdit'  onClick={()=>{
          history(`/jegyar/${value.id}`)
        }}>Szerkesztés</button>
        <br></br>
        
     </div>
     
    </div>
    
      )
    })} 
       </div>
    </div>
  
  )

}

export default JegyMaking