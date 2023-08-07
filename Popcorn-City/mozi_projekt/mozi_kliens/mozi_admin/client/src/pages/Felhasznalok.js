import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import FelhasznalokTablazat from "../components/felhasznalok-components/FelhasznalokTablazat";
import SearchBar from "../components/felhasznalok-components/SearchBar";
import Header from "../components/Header";
import axios from "axios";

function Felhasznalok({ authState, logout }) {

  const [search, setSearch] = useState("");
  const [selectedUser,setselectedUser]=useState([]);
  const [checked,setChecked]= useState(false)
  const [users, setUsers] = useState([]);

 


  let history = useNavigate();
  useEffect(() => {
    if (!localStorage.getItem("accessToken")) {
      history("/");
    }
  }, []);

  const deleteUser = ()=>{
   axios.post(`http://localhost:3002/user/torles`, {adatok:{felhasznalok:selectedUser}}).then((response) => {
     setselectedUser([]);
   })
   console.log("ezek lesznek törölve")
   console.log(selectedUser.length)
  }

  const selectAll = () =>{
    
    if(checked === true){
      console.log("ilyenkor kéne üresnek lennie megint")
      setChecked(!checked);
      setselectedUser(regi=>[]);
      console.log(checked)
     }
    
    

    else{
      
      setselectedUser(regi=>[]);
       users.map((user)=>{
        console.log(user)
        console.log("Összes kiválasztása")
        setselectedUser(regi=>[...regi,user.id]);
      })
      setChecked(!checked);
      console.log(checked)
     
    } 
  }

  return (
    <div className="container">
      <Header
        authState={authState}
        logout={logout}
        oldalNeve={"Felhasználók"}
      />
      <div className="items">
        <div className="search-items">
          <svg
            width="24"
            height="24"
            viewBox="0 0 24 24"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M18.9 20.3L13.3 14.7C12.8 15.1 12.225 15.4167 11.575 15.65C10.925 15.8833 10.2333 16 9.5 16C7.68333 16 6.146 15.371 4.888 14.113C3.62933 12.8543 3 11.3167 3 9.5C3 7.68333 3.62933 6.14567 4.888 4.887C6.146 3.629 7.68333 3 9.5 3C11.3167 3 12.8543 3.629 14.113 4.887C15.371 6.14567 16 7.68333 16 9.5C16 10.2333 15.8833 10.925 15.65 11.575C15.4167 12.225 15.1 12.8 14.7 13.3L20.325 18.925C20.5083 19.1083 20.6 19.3333 20.6 19.6C20.6 19.8667 20.5 20.1 20.3 20.3C20.1167 20.4833 19.8833 20.575 19.6 20.575C19.3167 20.575 19.0833 20.4833 18.9 20.3V20.3ZM9.5 14C10.75 14 11.8127 13.5627 12.688 12.688C13.5627 11.8127 14 10.75 14 9.5C14 8.25 13.5627 7.18733 12.688 6.312C11.8127 5.43733 10.75 5 9.5 5C8.25 5 7.18733 5.43733 6.312 6.312C5.43733 7.18733 5 8.25 5 9.5C5 10.75 5.43733 11.8127 6.312 12.688C7.18733 13.5627 8.25 14 9.5 14Z"
              fill="#AAAAAA"
            />
          </svg>
          <SearchBar setSearch={setSearch}/>
        </div>
        <br></br>
        <div className="items-items">

          <label>
   <span> {selectedUser.length}</span> kiválasztva
          </label>
          <input type="checkbox" id="scales" name="scales" checked={checked} onClick={selectAll} ></input>
      <label for="scales">Összes kijelölése</label>
          <label>
            <div className="delete">
            <span>
              <svg 
              onClick={deleteUser}
                width="18"
                height="20"
                viewBox="0 0 18 20"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M7 16C7.26522 16 7.51957 15.8946 7.70711 15.7071C7.89464 15.5196 8 15.2652 8 15V9C8 8.73478 7.89464 8.48043 7.70711 8.29289C7.51957 8.10536 7.26522 8 7 8C6.73478 8 6.48043 8.10536 6.29289 8.29289C6.10536 8.48043 6 8.73478 6 9V15C6 15.2652 6.10536 15.5196 6.29289 15.7071C6.48043 15.8946 6.73478 16 7 16ZM17 4H13V3C13 2.20435 12.6839 1.44129 12.1213 0.87868C11.5587 0.316071 10.7956 0 10 0H8C7.20435 0 6.44129 0.316071 5.87868 0.87868C5.31607 1.44129 5 2.20435 5 3V4H1C0.734784 4 0.48043 4.10536 0.292893 4.29289C0.105357 4.48043 0 4.73478 0 5C0 5.26522 0.105357 5.51957 0.292893 5.70711C0.48043 5.89464 0.734784 6 1 6H2V17C2 17.7956 2.31607 18.5587 2.87868 19.1213C3.44129 19.6839 4.20435 20 5 20H13C13.7956 20 14.5587 19.6839 15.1213 19.1213C15.6839 18.5587 16 17.7956 16 17V6H17C17.2652 6 17.5196 5.89464 17.7071 5.70711C17.8946 5.51957 18 5.26522 18 5C18 4.73478 17.8946 4.48043 17.7071 4.29289C17.5196 4.10536 17.2652 4 17 4ZM7 3C7 2.73478 7.10536 2.48043 7.29289 2.29289C7.48043 2.10536 7.73478 2 8 2H10C10.2652 2 10.5196 2.10536 10.7071 2.29289C10.8946 2.48043 11 2.73478 11 3V4H7V3ZM14 17C14 17.2652 13.8946 17.5196 13.7071 17.7071C13.5196 17.8946 13.2652 18 13 18H5C4.73478 18 4.48043 17.8946 4.29289 17.7071C4.10536 17.5196 4 17.2652 4 17V6H14V17ZM11 16C11.2652 16 11.5196 15.8946 11.7071 15.7071C11.8946 15.5196 12 15.2652 12 15V9C12 8.73478 11.8946 8.48043 11.7071 8.29289C11.5196 8.10536 11.2652 8 11 8C10.7348 8 10.4804 8.10536 10.2929 8.29289C10.1054 8.48043 10 8.73478 10 9V15C10 15.2652 10.1054 15.5196 10.2929 15.7071C10.4804 15.8946 10.7348 16 11 16Z"
                  fill="#1C4E80"
                />
              </svg>
            </span>
            Törlés
            </div>
          </label>
        </div>
      </div>
      <div>
        <div className="user-box">
          <FelhasznalokTablazat search={search} setselectedUser={setselectedUser} selectedUser={selectedUser} setChecked={setChecked} checked={checked} users={users} setUsers={setUsers}  />
        </div>
      </div>
    </div>
  );
}

export default Felhasznalok;
