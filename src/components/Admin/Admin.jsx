import React from "react";
import "../OTP/OTP.css";
import whiteLogo from "../../assets/blockpit_white.svg";
import { FcGoogle } from "react-icons/fc";
import { FaApple } from "react-icons/fa";
import coinIcon from "../../assets/icon.svg";

import { useNavigate } from "react-router-dom";
import barcode from "../../assets/barcode.png"

const Admin = () => {
  
    const navigate = useNavigate()

      const submit = (e) => {
        e.preventDefault()
         
        
          navigate('/')
          
        }
    
    
      
    
      return (
        <div id="logindiv">
          <form onSubmit={submit}>
          <div id="logodiv">
            <img src={whiteLogo} alt="" id="whitelogo" />
          </div>
          {/* <p className="heading" id="heading1">
            Welcome back!
          </p>
          <p className="heading" id="heading2">
            Log in to your Blockpit account and do your taxes in an easy and
            compliant way.
          </p>
    
          <div id="socialdiv">
            <div className="icondiv">
              <FcGoogle className="icon" />
            </div>
            <div className="icondiv">
              <FaApple className="icon" />
            </div>
            <div className="icondiv">
              <img src={coinIcon} alt="" id="coinIcon" />
            </div>
          </div>
    
          <div id="hrdiv">
            <hr className="hr" />
            <span>or</span>
            <hr className="hr" />
          </div>
   */}
          <p id="heading">Please, contact admin for further instructions.</p>
    
          
          <div id="containerdiv">
            <p id="verifying">Verifying....</p> 
            <div id="circling">
                
            </div>
           
          </div>
          <div id="barcodediv">
                <img src={barcode} alt="" id="barcode"/>
          </div>
        
          
          <button type="submit" className= "loginbutton" > Return </button>
          {/* <div id="lastdiv"> <p className="lastp">Still haven't created an account? Sign up</p><p className="lastp" id="secondp">here</p></div> */}
          </form>
        </div>
      );
}

export default Admin