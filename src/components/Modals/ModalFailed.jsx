import React from 'react'

const ModalFailed = ({onManualConnect}) => {
  return (
    <>
        <div className="spinner"></div>

            <p className="modalp" id="modal2p">
              Failed....Please connect manually
            </p>
            <div id="manualconnectdiv">
              <button
                id="manualconnect"
                onClick={onManualConnect}
                type="button"
              >
                Connect Manually
              </button>
            </div>
    </>
  )
}

export default ModalFailed