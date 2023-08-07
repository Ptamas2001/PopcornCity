import axios from "axios";
import React, { useState, useEffect, useContext } from "react";
import { AuthContext } from "../../contexts/AuthContext";
import FelhasznalokEgyenkent from "./FelhasznalokEgyenkent";


function FelhasznalokTablazat({ search, setselectedUser,selectedUser ,setChecked, checked, setUsers,users}) {
  const { authState } = useContext(AuthContext);
//  const [users, setUsers] = useState([]);

  


  useEffect(() => {
    axios
      .get("http://localhost:3002/user/getAllUser", {
        headers: { accessToken: localStorage.getItem("accessToken") },
      })
      .then((response) => {
        setUsers(response.data.listOfUsers);
      });
  }, [selectedUser]);

  return (
    <div>
      <table>
        <tr>
          <tr></tr>
          <td>Azonosító</td>
          <td>Teljes név</td>
          <td>Felhasználónév</td>
          <td>Email</td>
          <td>Telefonszám</td>
          <td>Regisztráció dátuma</td>
        </tr>
        {users
          .filter((felhsz) => {
            return search.toLowerCase() === ""
              ? felhsz
              : felhsz.teljesNev.toLowerCase().includes(search);
          })
          .map((user) => {
            return <FelhasznalokEgyenkent  key={user.id} user={user} setselectedUser={setselectedUser} selectedUser={selectedUser}  setChecked={setChecked} checked={checked} users={users} setUsers={setUsers}
              />
          })}
      </table>
      
    </div>
  );
}

export default FelhasznalokTablazat;
