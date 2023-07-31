import React from 'react'
import { useState } from 'react'
import "../style/Modal.css"
import Display from "../components/Display"

function Modal() {
  const [openModal, setopenModal] = useState(false)
  return (
    <div className="modal">
      <div className='container' onClick={() => {
        setopenModal(true);
      }}>Add Data +</div>
      {openModal && <Display closeModal={setopenModal} />}
    </div>

  )
}

export default Modal