import React, { useState } from 'react'

function FelhasznalokEgyenkent({user, setselectedUser,selectedUser,setChecked,checked}) {
  
  const [lista,setLista]=useState([])
  
  const set = (e)=>{
    console.log(checked)
    
    if (setChecked != null){
      setChecked(null)
       //setselectedUser(regi=>[]);
    }
    
    
    if (!selectedUser.includes(user.id)){
    setselectedUser(regi=>[...regi,user.id])
    }
    if (!lista.includes(user.id)){
      setLista(regi=>[...regi,user.id])
      }
      if (selectedUser.includes(user.id)){
        setselectedUser(regi=>[...regi,user.id])
        const filteredArray = selectedUser.filter(selectedUser => selectedUser - lista);
        setselectedUser(filteredArray)}
      }
      return (
    <>
      <tr>
          <input type="checkbox" checked={ checked }
           onChange={set}
           ></input><td>{user.id}</td>
          <td>{user.teljesNev}</td>
          <td>{user.username}</td>
          <td>{user.email}</td>
          <td>{user.telefonszam}</td>
          <td>{user.createdAt}</td>
        </tr>
    </>
  )
  
}

export default FelhasznalokEgyenkent
