import React from 'react'

function Header({oldalNeve, authState, logout}) {
  return (
    <div className='header'>
        <h1>{oldalNeve}</h1>
        <div className='header-items'>
        {authState.username}
        <button onClick={logout}> <svg className='logout' viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M5 21C4.45 21 3.979 20.8043 3.587 20.413C3.19567 20.021 3 19.55 3 19V5C3 4.45 3.19567 3.979 3.587 3.587C3.979 3.19567 4.45 3 5 3H12V5H5V19H12V21H5ZM16 17L14.625 15.55L17.175 13H9V11H17.175L14.625 8.45L16 7L21 12L16 17Z" fill="#333333"/>
</svg>
</button></div>
    </div>
  )
}

export default Header