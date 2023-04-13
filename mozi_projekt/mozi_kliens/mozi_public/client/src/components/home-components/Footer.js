import React from 'react'
import {AiFillFacebook,AiFillInstagram,AiFillTwitterCircle} from 'react-icons/ai';
function Footer() {
  return (
    <div className="footer-container">
        <div className="footer-left">
            <h1><span>2023</span>POPCORN CITY.</h1>
        </div>
        <div className="footer-middle">
         
        </div>
        <div className="footer-right">
            <ul>
                <li><AiFillFacebook/></li>
                <li><AiFillInstagram/></li>
                <li><AiFillTwitterCircle/></li>
            </ul>
        </div>
    </div>
  )
}

export default Footer