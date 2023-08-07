import React from 'react'

function LoginButton({open}) {
  return (
    <div className="cursor-pointer" onClick={open}>
    <span><i className="fa-solid fa-right-to-bracket"></i>Belépés</span>
    </div>
  )
}

export default LoginButton