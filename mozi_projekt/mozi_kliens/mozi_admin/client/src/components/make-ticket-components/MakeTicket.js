import React from 'react'
import { useNavigate } from 'react-router-dom';
import Header from '../Header';
import {Link} from "react-router-dom"
import axios from "axios";
import { Formik, Form, Field, ErrorMessage } from "formik";
import * as Yup from "yup";

function CreateTicket() {
    let history = useNavigate();
    const initialValues = {
        id: "",
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
      const onSubmit = (data)=> {
        console.log(data);
        axios.post("http://localhost:3002/jegyarak/",data).then(() => {
            console.log(data);
            history("/beallitasok")
      })
    }
   
      
  return (
    <div className='container'>
    <h1>Jegykészítés</h1>
    <div className='jegyrow'>
       <div className="jegybox">
         <Formik
           initialValues={initialValues}
           onSubmit={onSubmit}
           validationSchema={validationSchema}
           >
           <Form>
            <label>Jegy típusa</label>
             <Field 
             
             name="types"
                    placeholder="Adja meg a jegy típusát"
                    />
                    <label>Kedvezményes/teljes árú-e a jegy</label>
             <Field 
             
             name="typeValue"
                    placeholder="Kedvezményes/teljes árú jegy" />
                    <label>Vetítés típusa</label>
             <Field 
             
             name="infos"
                    placeholder="Adja meg a vetítés típusát(2D/3D)"/>
                    <label>Jegy ára</label>
             <Field 
             
             name="price"
                    placeholder="Adja meg a jegy árát"/>
                    <label>Információk</label>
             <Field 
             
             name="description"
                    placeholder="Információk a jegyről"
                    />
                      
              <button onClick={onSubmit} type="submit" className='form-btn'>Módosítások mentése </button>
              
           </Form>
         </Formik>


    </div>
    </div>
    </div>
  )
}

export default CreateTicket
