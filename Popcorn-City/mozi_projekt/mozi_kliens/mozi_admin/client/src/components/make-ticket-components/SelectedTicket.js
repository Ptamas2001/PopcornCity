import React, { useEffect, useState } from 'react'
import { useNavigate } from 'react-router-dom';
import Header from '../Header';
import { Link } from "react-router-dom"
import { useParams } from 'react-router-dom';
import axios from "axios";
import { Formik, Form, Field } from "formik";
import * as Yup from "yup";
import "../../pages/jegyfoglalasok.css";
function SelectedTickets({ authState, logout }) {
  let history = useNavigate();
  let { id } = useParams();
  const [ticketObject, setTicketObject] = useState({});
  useEffect(() => {
    if (!localStorage.getItem("accessToken")) {
      history("/");
    }
  }, []);
  useEffect(() => {
    axios.get(`http://localhost:3002/jegyarak/byId/${id}`).then((response) => {
      setTicketObject(response.data);


    });
  }, []);
  const initialValues = {

    types: "",
    typeValue: "",
    infos: "",
    price: "",
    description: "",
  };
  const validationSchema = Yup.object().shape({
    types: Yup.string().required("You must input a Title!"),
    typeValue: Yup.string().required(),
    infos: Yup.string().required("You must input a Title!"),
    price: Yup.string().required(),
    description: Yup.string().required("You must input a Title!"),

  });
  const onSubmit = (data) => {
    axios.post(`http://localhost:3002/jegyarak/modositas/${id}`, data).then(() => {
      history("/beallitasok")
    })
  }

  const onDelete = () => {
    
    axios.post(`http://localhost:3002/jegyarak/torles/${id}`).then(() => {
   
      history("/beallitasok")
    })
  }



  return (

    <div className='container'>
      <Header authState={authState} logout={logout} oldalNeve={"Jegymódosítás"} />


      <div className="jegyrow">
        <div className="jegybox">
          <Formik initialValues={initialValues}
            onSubmit={onSubmit}
            validationSchema={validationSchema}>
            <Form
              //onChange={e => setTicketObject(e.target.value)}
            >
              <label>Jegy típusa</label>
              <Field
                name="types"
                placeholder ={ticketObject.types}/>
                 <label>Kedvezményes/teljes árú-e a jegy</label>
              <Field
                name="typeValue"
                placeholder={ticketObject.typeValue}/>
                <label>Vetítés típusa</label>
              <Field
                name="infos"
                placeholder={ticketObject.infos}
              />
               <label>Jegy ára</label>
              <Field
                name="price"
                placeholder={ticketObject.price}
              />
               <label>Információk</label>
              <Field
                name="description"
                placeholder={ticketObject.description}

              />

              <button onClick={onSubmit} type="submit" >Szerkesztés mentése</button>
              <button onClick={onDelete} >Jegy törlése</button>
            </Form>

          </Formik>
        </div>

      </div>



    </div>
  )
}

export default SelectedTickets