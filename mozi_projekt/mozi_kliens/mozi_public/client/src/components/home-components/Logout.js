import React from 'react'
import {FiLogOut} from 'react-icons/fi';

function Logout({logout}) {
  return (
    <div className="logout-btn" onClick={logout}><FiLogOut/></div>
  )
}

export default Logout