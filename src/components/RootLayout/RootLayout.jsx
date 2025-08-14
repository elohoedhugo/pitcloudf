import React from 'react'
import { Outlet } from 'react-router-dom'
import "../RootLayout/RootLayout.css"
import blackLogo from "../../assets/blockpit_black.svg"
import secondlogo from "../../assets/blockpit_white.svg"

const RootLayout = () => {
  return (
    <div id='rootlayout'>
        <header>
             <div id='leftdiv'>
                <img src={blackLogo} alt="" id='blackLogo'/>
                <div id='linediv'></div>
                <ul id='menu'>
                  <li className='menulistitem'>Features</li>
                  <li className='menulistitem'>Pricing</li>
                  <li className='menulistitem'>Contact</li>
                </ul>
             </div>
             <div id='rightdiv'>
              <button className='button' id='login'>Log In</button>
              <button className='button' id='signup'>Sign Up</button>
             </div>
        </header>
        <main>
            <Outlet/>
        </main>

    </div>
  )
}

export default RootLayout